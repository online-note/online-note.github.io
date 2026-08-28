import { jsPDF } from 'jspdf';

/**
 * Export text content to a clean, professionally formatted A4 PDF
 * with intelligent text wrapping, multi-page pagination, and headers/footers.
 *
 * @param {string} text - The raw text content from the notepad
 * @param {string} [title="Online Note"] - The document title
 * @param {string} [lang="en"] - The user language code for date formatting
 * @returns {Promise<boolean>} - True if export succeeded, false otherwise
 */
export async function exportToPdf(text, title = 'Online Note', lang = 'en') {
  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return false;
  }

  // Initialize jsPDF A4 in Portrait mode (210mm x 297mm)
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true,
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginX = 20;
  const marginTop = 25;
  const marginBottom = 25;
  const contentWidth = pageWidth - marginX * 2; // 170mm
  const maxY = pageHeight - marginBottom;

  // Format creation timestamp according to locale
  const now = new Date();
  let dateFormatted;
  try {
    dateFormatted = new Intl.DateTimeFormat(lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(now);
  } catch {
    dateFormatted = now.toLocaleString();
  }

  const baseFontSize = 10.5;
  const lineHeight = 6.0; // mm
  doc.setFontSize(baseFontSize);
  doc.setFont('helvetica', 'normal');

  // Split raw text by existing line breaks, then split each by max width
  const rawParagraphs = text.split(/\r?\n/);
  const allLines = [];

  for (const para of rawParagraphs) {
    if (para === '') {
      allLines.push(''); // Represent empty line for paragraph spacing
    } else {
      const splitLines = doc.splitTextToSize(para, contentWidth);
      for (const line of splitLines) {
        allLines.push(line);
      }
    }
  }

  // Calculate lines across pages with header allowances
  // Page 1 header takes from Y=25 to Y=42; content starts at Y=48
  const page1StartY = 48;
  const subsequentStartY = marginTop;

  const pages = [];
  let currentPageLines = [];
  let currentY = page1StartY;

  for (let i = 0; i < allLines.length; i++) {
    const line = allLines[i];
    const nextY = currentY + (line === '' ? lineHeight * 0.7 : lineHeight);

    if (nextY > maxY && currentPageLines.length > 0) {
      // Flush current page and start next page
      pages.push(currentPageLines);
      currentPageLines = [line];
      currentY = subsequentStartY + (line === '' ? lineHeight * 0.7 : lineHeight);
    } else {
      currentPageLines.push(line);
      currentY = nextY;
    }
  }

  if (currentPageLines.length > 0) {
    pages.push(currentPageLines);
  }

  const totalPages = Math.max(1, pages.length);

  // Render each page
  pages.forEach((pageLines, pageIndex) => {
    if (pageIndex > 0) {
      doc.addPage();
    }

    const pageNumber = pageIndex + 1;

    if (pageNumber === 1) {
      // Document Title Header (Page 1)
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(30, 41, 59); // slate-800
      doc.text(title, marginX, marginTop);

      // Subtitle / Metadata
      doc.setFontSize(8.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 116, 139); // slate-500
      doc.text(`Generated on ${dateFormatted} • online-note.github.io`, marginX, marginTop + 7);

      // Decorative divider
      doc.setDrawColor(226, 232, 240); // slate-200
      doc.setLineWidth(0.4);
      doc.line(marginX, marginTop + 11, pageWidth - marginX, marginTop + 11);

      // Render lines on Page 1
      let y = page1StartY;
      doc.setFontSize(baseFontSize);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(15, 23, 42); // slate-900

      for (const line of pageLines) {
        if (line !== '') {
          doc.text(line, marginX, y);
          y += lineHeight;
        } else {
          y += lineHeight * 0.7; // slightly smaller spacing for empty blank lines
        }
      }
    } else {
      // Running Header on subsequent pages
      doc.setFontSize(8);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(148, 163, 184); // slate-400
      doc.text(title, marginX, marginTop - 10);

      doc.setDrawColor(241, 245, 249); // slate-100
      doc.setLineWidth(0.3);
      doc.line(marginX, marginTop - 6, pageWidth - marginX, marginTop - 6);

      // Render lines
      let y = subsequentStartY;
      doc.setFontSize(baseFontSize);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(15, 23, 42);

      for (const line of pageLines) {
        if (line !== '') {
          doc.text(line, marginX, y);
          y += lineHeight;
        } else {
          y += lineHeight * 0.7;
        }
      }
    }

    // Running Footer: Page X of Y
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(148, 163, 184); // slate-400
    const footerText = `Page ${pageNumber} of ${totalPages}`;
    doc.text(footerText, pageWidth / 2, pageHeight - 12, { align: 'center' });

    // Watermark tag in footer right
    doc.setFontSize(7.5);
    doc.text('online-note.github.io', pageWidth - marginX, pageHeight - 12, { align: 'right' });
  });

  // Extract a clean filename from the first non-empty line
  const firstNonEmptyLine = rawParagraphs.find((l) => l.trim().length > 0) || 'note';
  const sanitizedTitle = firstNonEmptyLine
    .trim()
    .replace(/[^\w\s\u00C0-\u024F\u3040-\u30FF\u4E00-\u9FAF-]/g, '')
    .trim()
    .slice(0, 30)
    .replace(/\s+/g, '_');

  const fileName = sanitizedTitle ? `${sanitizedTitle}.pdf` : `note_${new Date().toISOString().slice(0, 10)}.pdf`;

  doc.save(fileName);
  return true;
}
