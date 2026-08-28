export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語',
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLang: SupportedLanguage = 'en';

export const ui = {
  en: {
    // Site & Meta
    'site.title': 'Free Online Notepad | Private, Auto-Save & PDF Export',
    'site.description': 'An ultra-minimal, 100% client-side distraction-free notepad. Features instant auto-save to localStorage, dark/light mode toggle, and one-click PDF export. Zero server uploads.',
    'site.tagline': 'Distraction-free, private, client-side notepad',
    'site.name': 'Online Note',
    'site.keywords': 'online notepad, free notepad, browser notepad, text editor online, notes with autosave, export note to pdf, private notepad, minimal text editor, distraction free writing',

    // Header & Navigation
    'nav.language': 'Language',
    'nav.theme': 'Toggle Theme',
    'nav.github': 'GitHub Repository',
    'nav.support': 'Support the Developer',
    'nav.supportShort': 'Support',

    // Editor Status & Placeholders
    'editor.placeholder': 'Start typing your notes here...\n\n• Everything is automatically saved to your browser in real-time.\n• 100% private — your notes never leave your device.\n• Export to clean, formatted PDF or TXT anytime.',
    'editor.status.saved': 'Saved to browser',
    'editor.status.saving': 'Saving...',
    'editor.status.empty': 'Ready',

    // Stats & Counters
    'stats.words': 'words',
    'stats.word': 'word',
    'stats.characters': 'characters',
    'stats.character': 'character',
    'stats.lines': 'lines',
    'stats.line': 'line',
    'stats.readingTime': 'min read',

    // Action Buttons
    'actions.exportPdf': 'Export PDF',
    'actions.exportingPdf': 'Generating PDF...',
    'actions.downloadTxt': 'Download TXT',
    'actions.copy': 'Copy Text',
    'actions.copied': 'Copied to Clipboard!',
    'actions.clear': 'Clear Note',
    'actions.clearConfirm': 'Are you sure you want to clear your note? This action cannot be undone.',
    'actions.fontSans': 'Sans-serif',
    'actions.fontMono': 'Monospace',
    'actions.fontSize': 'Font Size',
    'actions.fullscreen': 'Full Screen',
    'actions.exitFullscreen': 'Exit Full Screen',

    // Theme Toggle
    'theme.toggle': 'Toggle color scheme',
    'theme.dark': 'Dark Mode',
    'theme.light': 'Light Mode',

    // How-to Section
    'howto.title': 'How to Use Online Note',
    'howto.subtitle': 'Simple, instantaneous, and private note taking in 3 easy steps.',
    'howto.step1.title': '1. Write Freely',
    'howto.step1.desc': 'Type your thoughts, code, or drafts directly into the distraction-free workspace.',
    'howto.step2.title': '2. Automatic Sync',
    'howto.step2.desc': 'Every keystroke is saved instantly in your browser storage. Close or refresh anytime.',
    'howto.step3.title': '3. One-Click Export',
    'howto.step3.desc': 'Export your note to a clean, formatted A4 PDF or TXT file with a single click.',

    // Features Section
    'features.title': 'Why Choose Online Note?',
    'features.subtitle': 'Built for writers, developers, students, and thinkers who demand speed and total privacy.',
    'features.privacy.title': '100% Private & Client-Side',
    'features.privacy.desc': 'No accounts, no cookies, and zero server uploads. Your notes are stored exclusively in your browser\'s local storage.',
    'features.autosave.title': 'Instant Auto-Save',
    'features.autosave.desc': 'Every keystroke is saved immediately. Close your tab, refresh your browser, or shut down your PC without losing a single character.',
    'features.pdf.title': 'Smart PDF Export',
    'features.pdf.desc': 'Export your notes into beautifully formatted, paginated A4 PDF documents with proper margins, timestamps, and page numbers.',
    'features.offline.title': 'Works Offline',
    'features.offline.desc': 'Once loaded, the notepad functions completely offline without requiring an active internet connection.',
    'features.responsive.title': 'Distraction-Free Design',
    'features.responsive.desc': 'A clean, uncluttered interface that adapts smoothly across desktop, tablet, and mobile screens.',
    'features.darkmode.title': 'Seamless Dark & Light Themes',
    'features.darkmode.desc': 'Engineered to reduce eye strain during late-night writing sessions with instant zero-flicker theme persistence.',

    // FAQ Section (Rich Snippets)
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about Online Note and data privacy.',
    'faq.q1': 'Is Online Note completely free to use?',
    'faq.a1': 'Yes, Online Note is 100% free with no subscriptions, no ads, and no registration required.',
    'faq.q2': 'Are my notes private and secure?',
    'faq.a2': 'Yes. All data remains exclusively within your local browser storage. We have no servers, databases, or analytics tracking your text.',
    'faq.q3': 'Does the notepad save automatically?',
    'faq.a3': 'Yes, every single keystroke is automatically saved in real time to your browser\'s localStorage so you never lose your progress.',
    'faq.q4': 'How does the PDF export work?',
    'faq.a4': 'Our built-in PDF generator calculates proper A4 margins and automatically adds pagination and page numbers for notes of any length.',
    'faq.q5': 'Can I use this notepad offline?',
    'faq.a5': 'Yes! Once the page is loaded in your browser, it continues to work flawlessly even when you have no internet connection.',

    // Footer
    'footer.privacyNote': '100% Client-Side • No server data collection • All data stays in your browser',
    'footer.rights': 'All rights reserved.',
  },

  es: {
    // Site & Meta
    'site.title': 'Bloc de Notas Online Gratis | Privado, Autoguardado y Exportar a PDF',
    'site.description': 'Un bloc de notas ultra minimalista, 100% en el cliente y sin distracciones. Autoguardado instantáneo en localStorage, modo oscuro/claro y exportación a PDF con un clic.',
    'site.tagline': 'Bloc de notas sin distracciones, privado y 100% en tu navegador',
    'site.name': 'Online Note',
    'site.keywords': 'bloc de notas online, bloc de notas gratis, notas en el navegador, editor de texto online, autoguardado, exportar a pdf, bloc de notas privado, escribir sin distracciones',

    // Header & Navigation
    'nav.language': 'Idioma',
    'nav.theme': 'Cambiar tema',
    'nav.github': 'Repositorio en GitHub',
    'nav.support': 'Apoyar al Desarrollador',
    'nav.supportShort': 'Apoyar',

    // Editor Status & Placeholders
    'editor.placeholder': 'Comienza a escribir tus notas aquí...\n\n• Todo se guarda automáticamente en tu navegador en tiempo real.\n• 100% privado: tus notas nunca salen de tu dispositivo.\n• Exporta a PDF formateado o TXT en cualquier momento.',
    'editor.status.saved': 'Guardado en el navegador',
    'editor.status.saving': 'Guardando...',
    'editor.status.empty': 'Listo',

    // Stats & Counters
    'stats.words': 'palabras',
    'stats.word': 'palabra',
    'stats.characters': 'caracteres',
    'stats.character': 'carácter',
    'stats.lines': 'líneas',
    'stats.line': 'línea',
    'stats.readingTime': 'min de lectura',

    // Action Buttons
    'actions.exportPdf': 'Exportar PDF',
    'actions.exportingPdf': 'Generando PDF...',
    'actions.downloadTxt': 'Descargar TXT',
    'actions.copy': 'Copiar texto',
    'actions.copied': '¡Copiado al portapapeles!',
    'actions.clear': 'Borrar nota',
    'actions.clearConfirm': '¿Estás seguro de que deseas borrar tu nota? Esta acción no se puede deshacer.',
    'actions.fontSans': 'Sans-serif',
    'actions.fontMono': 'Monoespaciado',
    'actions.fontSize': 'Tamaño de fuente',
    'actions.fullscreen': 'Pantalla completa',
    'actions.exitFullscreen': 'Salir de pantalla completa',

    // Theme Toggle
    'theme.toggle': 'Cambiar tema de color',
    'theme.dark': 'Modo oscuro',
    'theme.light': 'Modo claro',

    // How-to Section
    'howto.title': 'Cómo Usar Online Note',
    'howto.subtitle': 'Toma notas de forma rápida, sencilla y 100% privada.',
    'howto.step1.title': '1. Escribe libremente',
    'howto.step1.desc': 'Escribe ideas, código o borradores directamente en el editor sin distracciones.',
    'howto.step2.title': '2. Autoguardado instantáneo',
    'howto.step2.desc': 'Cada pulsación se guarda automáticamente en el almacenamiento local del navegador.',
    'howto.step3.title': '3. Exporta con un clic',
    'howto.step3.desc': 'Descarga tus notas en formato PDF A4 paginado o archivo de texto TXT en un segundo.',

    // Features Section
    'features.title': '¿Por qué elegir Online Note?',
    'features.subtitle': 'Diseñado para escritores, programadores, estudiantes y pensadores que buscan rapidez y máxima privacidad.',
    'features.privacy.title': '100% Privado y en el Navegador',
    'features.privacy.desc': 'Sin cuentas, sin cookies y sin envíos a servidores. Tus notas se guardan únicamente en el almacenamiento local de tu navegador.',
    'features.autosave.title': 'Autoguardado Instantáneo',
    'features.autosave.desc': 'Cada pulsación se guarda al instante. Cierra la pestaña o apaga tu ordenador sin perder una sola letra.',
    'features.pdf.title': 'Exportación Inteligente a PDF',
    'features.pdf.desc': 'Convierte tus notas en documentos PDF A4 perfectamente formateados y paginados, con márgenes y fecha.',
    'features.offline.title': 'Funciona sin Conexión',
    'features.offline.desc': 'Una vez cargada, la aplicación funciona completamente sin conexión a internet.',
    'features.responsive.title': 'Diseño sin Distracciones',
    'features.responsive.desc': 'Una interfaz limpia y despejada que se adapta a pantallas de escritorio, tabletas y móviles.',
    'features.darkmode.title': 'Modos Claro y Oscuro',
    'features.darkmode.desc': 'Diseñado para evitar la fatiga visual durante sesiones nocturnas con cambio de tema inmediato.',

    // FAQ Section
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Todo lo que necesitas saber sobre Online Note y la privacidad de tus datos.',
    'faq.q1': '¿Es Online Note completamente gratuito?',
    'faq.a1': 'Sí, es 100% gratuito, sin suscripciones, sin publicidad invasiva y sin necesidad de registrarse.',
    'faq.q2': '¿Mis notas son privadas y seguras?',
    'faq.a2': 'Totalmente. Tus datos se almacenan exclusivamente en tu navegador. No enviamos información a ningún servidor externo.',
    'faq.q3': '¿Se guardan las notas automáticamente?',
    'faq.a3': 'Sí, cada letra que escribes se guarda en tiempo real en localStorage, garantizando que nunca pierdas información.',
    'faq.q4': '¿Cómo funciona la exportación a PDF?',
    'faq.a4': 'Genera un documento PDF en formato estándar A4 con márgenes adecuados, fechado y paginación automática para notas extensas.',
    'faq.q5': '¿Puedo usar el bloc de notas sin internet?',
    'faq.a5': 'Sí. Una vez abierta la página, funciona 100% sin conexión a internet.',

    // Footer
    'footer.privacyNote': '100% en el cliente • Sin recopilación de datos • Todo permanece en tu navegador',
    'footer.rights': 'Todos los derechos reservados.',
  },

  pt: {
    // Site & Meta
    'site.title': 'Bloco de Notas Online Grátis | Privado, Salvamento Automático e Exportação em PDF',
    'site.description': 'Um bloco de notas minimalista, 100% do lado do cliente e sem distrações. Salvamento automático no localStorage, modo escuro/claro e exportação para PDF com um clique.',
    'site.tagline': 'Bloco de notas sem distrações, privado e 100% no seu navegador',
    'site.name': 'Online Note',
    'site.keywords': 'bloco de notas online, bloco de notas gratis, notas no navegador, editor de texto online, salvamento automatico, exportar pdf, bloco de notas privado',

    // Header & Navigation
    'nav.language': 'Idioma',
    'nav.theme': 'Alternar tema',
    'nav.github': 'Repositório no GitHub',
    'nav.support': 'Apoiar o Desenvolvedor',
    'nav.supportShort': 'Apoiar',

    // Editor Status & Placeholders
    'editor.placeholder': 'Comece a digitar suas anotações aqui...\n\n• Tudo é salvo automaticamente no seu navegador em tempo real.\n• 100% privado: suas anotações nunca saem do seu dispositivo.\n• Exporte para PDF formatado ou TXT a qualquer momento.',
    'editor.status.saved': 'Salvo no navegador',
    'editor.status.saving': 'Salvando...',
    'editor.status.empty': 'Pronto',

    // Stats & Counters
    'stats.words': 'palavras',
    'stats.word': 'palavra',
    'stats.characters': 'caracteres',
    'stats.character': 'caractere',
    'stats.lines': 'linhas',
    'stats.line': 'linha',
    'stats.readingTime': 'min de leitura',

    // Action Buttons
    'actions.exportPdf': 'Exportar PDF',
    'actions.exportingPdf': 'Gerando PDF...',
    'actions.downloadTxt': 'Baixar TXT',
    'actions.copy': 'Copiar texto',
    'actions.copied': 'Copiado para a área de transferência!',
    'actions.clear': 'Limpar nota',
    'actions.clearConfirm': 'Tem certeza de que deseja limpar sua anotação? Esta ação não pode ser desfeita.',
    'actions.fontSans': 'Sans-serif',
    'actions.fontMono': 'Monoespaçado',
    'actions.fontSize': 'Tamanho da fonte',
    'actions.fullscreen': 'Tela cheia',
    'actions.exitFullscreen': 'Sair da tela cheia',

    // Theme Toggle
    'theme.toggle': 'Alternar esquema de cores',
    'theme.dark': 'Modo Escuro',
    'theme.light': 'Modo Claro',

    // How-to Section
    'howto.title': 'Como Usar o Online Note',
    'howto.subtitle': 'Anotações rápidas, fáceis e totalmente privadas em 3 passos.',
    'howto.step1.title': '1. Digite Livremente',
    'howto.step1.desc': 'Escreva pensamentos, códigos ou rascunhos em um ambiente limpo.',
    'howto.step2.title': '2. Salvamento Automático',
    'howto.step2.desc': 'Cada caractere digitado é salvo instantaneamente no armazenamento local.',
    'howto.step3.title': '3. Exporte com um Clique',
    'howto.step3.desc': 'Baixe suas anotações em formato PDF A4 paginado ou arquivo TXT.',

    // Features Section
    'features.title': 'Por que escolher o Online Note?',
    'features.subtitle': 'Criado para escritores, desenvolvedores, estudantes e pensadores que valorizam velocidade e privacidade total.',
    'features.privacy.title': '100% Privado e Local',
    'features.privacy.desc': 'Sem contas, sem cookies e sem envio para servidores. Suas notas são armazenadas apenas no seu navegador.',
    'features.autosave.title': 'Salvamento Automático Instantâneo',
    'features.autosave.desc': 'Cada caractere digitado é salvo instantaneamente. Feche a aba ou reinicie sem perder nada.',
    'features.pdf.title': 'Exportação Inteligente para PDF',
    'features.pdf.desc': 'Transforme suas notas em arquivos PDF A4 com paginação elegante, margens e carimbo de data.',
    'features.offline.title': 'Funciona Offline',
    'features.offline.desc': 'Após o carregamento inicial, funciona perfeitamente sem conexão com a internet.',
    'features.responsive.title': 'Design Sem Distrações',
    'features.responsive.desc': 'Interface limpa e minimalista que se adapta a qualquer tela ou dispositivo.',
    'features.darkmode.title': 'Modos Escuro e Claro Integrados',
    'features.darkmode.desc': 'Evite o cansaço visual com alternância suave e persistência instantânea de preferências.',

    // FAQ Section
    'faq.title': 'Perguntas Frequentes',
    'faq.subtitle': 'Dúvidas comuns sobre o Online Note e armazenamento local.',
    'faq.q1': 'O Online Note é totalmente gratuito?',
    'faq.a1': 'Sim, 100% gratuito, sem necessidade de cadastro ou assinaturas.',
    'faq.q2': 'Minhas anotações são privadas?',
    'faq.a2': 'Sim. Seus textos ficam apenas no navegador do seu dispositivo e nunca são enviados a servidores.',
    'faq.q3': 'O salvamento é automático?',
    'faq.a3': 'Sim, cada alteração é salva instantaneamente no localStorage.',
    'faq.q4': 'Como funciona a exportação em PDF?',
    'faq.a4': 'Gera um PDF A4 com margens precisas, paginação automática e data de criação.',
    'faq.q5': 'Funciona sem internet?',
    'faq.a5': 'Sim, após carregar o site você pode utilizá-lo totalmente offline.',

    // Footer
    'footer.privacyNote': '100% no cliente • Sem coleta de dados no servidor • Tudo fica no seu navegador',
    'footer.rights': 'Todos os direitos reservados.',
  },

  de: {
    // Site & Meta
    'site.title': 'Kostenloser Online-Notizblock | Privat, Auto-Speichern & PDF-Export',
    'site.description': 'Ein ultra-minimalistischer, 100% clientseitiger Notizblock ohne Ablenkungen. Automatisches Speichern im localStorage, Dark Mode und PDF-Export mit einem Klick.',
    'site.tagline': 'Ablenkungsfreier, privater Notizblock im Browser',
    'site.name': 'Online Note',
    'site.keywords': 'online notizblock, kostenloser notizblock, notizen im browser, texteditor online, automatisches speichern, pdf exportieren, privater notizblock',

    // Header & Navigation
    'nav.language': 'Sprache',
    'nav.theme': 'Design wechseln',
    'nav.github': 'GitHub-Repository',
    'nav.support': 'Entwickler unterstützen',
    'nav.supportShort': 'Spenden',

    // Editor Status & Placeholders
    'editor.placeholder': 'Beginnen Sie hier mit der Eingabe Ihrer Notizen...\n\n• Alles wird in Echtzeit automatisch in Ihrem Browser gespeichert.\n• 100% privat – Ihre Notizen verlassen niemals Ihr Gerät.\n• Jederzeit als formatiertes PDF oder TXT exportieren.',
    'editor.status.saved': 'Im Browser gespeichert',
    'editor.status.saving': 'Speichern...',
    'editor.status.empty': 'Bereit',

    // Stats & Counters
    'stats.words': 'Wörter',
    'stats.word': 'Wort',
    'stats.characters': 'Zeichen',
    'stats.character': 'Zeichen',
    'stats.lines': 'Zeilen',
    'stats.line': 'Zeile',
    'stats.readingTime': 'Min. Lesezeit',

    // Action Buttons
    'actions.exportPdf': 'PDF exportieren',
    'actions.exportingPdf': 'PDF wird erstellt...',
    'actions.downloadTxt': 'TXT herunterladen',
    'actions.copy': 'Text kopieren',
    'actions.copied': 'In die Zwischenablage kopiert!',
    'actions.clear': 'Notiz löschen',
    'actions.clearConfirm': 'Möchten Sie Ihre Notiz wirklich löschen? Dieser Vorgang kann nicht rückgängig gemacht werden.',
    'actions.fontSans': 'Sans-Serif',
    'actions.fontMono': 'Monospace',
    'actions.fontSize': 'Schriftgröße',
    'actions.fullscreen': 'Vollbild',
    'actions.exitFullscreen': 'Vollbild beenden',

    // Theme Toggle
    'theme.toggle': 'Farbschema umschalten',
    'theme.dark': 'Dunkler Modus',
    'theme.light': 'Heller Modus',

    // How-to Section
    'howto.title': 'So funktioniert Online Note',
    'howto.subtitle': 'Schnelle, unkomplizierte und private Notizen in 3 Schritten.',
    'howto.step1.title': '1. Notizen verfassen',
    'howto.step1.desc': 'Schreiben Sie Texte, Entwürfe oder Code ohne störende Menüleisten.',
    'howto.step2.title': '2. Sofortige Sicherung',
    'howto.step2.desc': 'Jeder Anschlag wird lokal in Ihrem Browser gesichert.',
    'howto.step3.title': '3. Als PDF oder TXT exportieren',
    'howto.step3.desc': 'Laden Sie Ihre Notiz als sauberes A4-Dokument mit einem Klick herunter.',

    // Features Section
    'features.title': 'Warum Online Note wählen?',
    'features.subtitle': 'Entwickelt für Autoren, Entwickler, Studenten und Denker, die Schnelligkeit und absolute Privatsphäre schätzen.',
    'features.privacy.title': '100% Privat & Clientseitig',
    'features.privacy.desc': 'Keine Benutzerkonten, keine Cookies und keine Server-Uploads. Ihre Notizen verbleiben sicher in Ihrem lokalen Browserspeicher.',
    'features.autosave.title': 'Sofortiges automatisches Speichern',
    'features.autosave.desc': 'Jeder Tastenanschlag wird sofort gesichert. Tab schließen oder Neustarten ohne Datenverlust.',
    'features.pdf.title': 'Intelligenter PDF-Export',
    'features.pdf.desc': 'Exportieren Sie Notizen als sauber formatierte A4-PDFs mit intelligenter Seitennummerierung und Datumsstempel.',
    'features.offline.title': 'Funktioniert offline',
    'features.offline.desc': 'Nach dem ersten Laden funktioniert der Editor ohne aktive Internetverbindung.',
    'features.responsive.title': 'Ablenkungsfreies Design',
    'features.responsive.desc': 'Eine aufgeräumte Benutzeroberfläche, die auf Smartphones, Tablets und Desktop-Monitoren gleichermaßen überzeugt.',
    'features.darkmode.title': 'Dunkles & Helles Farbschema',
    'features.darkmode.desc': 'Schonen Sie Ihre Augen bei nächtlichen Schreibarbeiten durch flackerfreie Umschaltung.',

    // FAQ Section
    'faq.title': 'Häufig gestellte Fragen (FAQ)',
    'faq.subtitle': 'Antworten zu Sicherheit, Speicherung und Funktionen.',
    'faq.q1': 'Ist Online Note kostenlos?',
    'faq.a1': 'Ja, die Nutzung ist zu 100% kostenlos und erfordert keine Registrierung.',
    'faq.q2': 'Sind meine Daten geschützt?',
    'faq.a2': 'Ja. Ihre Texte verbleiben ausschließlich im lokalen Speicher Ihres Browsers.',
    'faq.q3': 'Werden meine Eingaben automatisch gespeichert?',
    'faq.a3': 'Ja, jeder Tastenanschlag wird unmittelbar in localStorage gesichert.',
    'faq.q4': 'Wie funktioniert der PDF-Export?',
    'faq.a4': 'Er erstellt formatierte A4-PDF-Dokumente inklusive automatischer Seitennummerierung.',
    'faq.q5': 'Kann ich den Notizblock offline verwenden?',
    'faq.a5': 'Ja, nach dem ersten Aufrufen funktioniert er auch ohne aktive Internetverbindung.',

    // Footer
    'footer.privacyNote': '100% Clientseitig • Keine Datenerfassung auf Servern • Alles verbleibt im Browser',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },

  fr: {
    // Site & Meta
    'site.title': 'Bloc-notes en Ligne Gratuit | Privé, Sauvegarde Auto & Export PDF',
    'site.description': 'Un bloc-notes ultra-minimaliste, 100% côté client et sans distraction. Sauvegarde instantanée dans localStorage, mode sombre/clair et export PDF en un clic.',
    'site.tagline': 'Bloc-notes sans distraction, privé et 100% local',
    'site.name': 'Online Note',
    'site.keywords': 'bloc-notes en ligne, bloc-notes gratuit, éditeur de texte en ligne, sauvegarde automatique, export pdf, bloc-notes privé',

    // Header & Navigation
    'nav.language': 'Langue',
    'nav.theme': 'Changer de thème',
    'nav.github': 'Dépôt GitHub',
    'nav.support': 'Soutenir le développeur',
    'nav.supportShort': 'Soutenir',

    // Editor Status & Placeholders
    'editor.placeholder': 'Commencez à saisir vos notes ici...\n\n• Tout est sauvegardé automatiquement dans votre navigateur en temps réel.\n• 100% privé : vos notes ne quittent jamais votre appareil.\n• Exportez en PDF ou TXT bien formaté à tout moment.',
    'editor.status.saved': 'Enregistré dans le navigateur',
    'editor.status.saving': 'Enregistrement...',
    'editor.status.empty': 'Prêt',

    // Stats & Counters
    'stats.words': 'mots',
    'stats.word': 'mot',
    'stats.characters': 'caractères',
    'stats.character': 'caractère',
    'stats.lines': 'lignes',
    'stats.line': 'ligne',
    'stats.readingTime': 'min de lecture',

    // Action Buttons
    'actions.exportPdf': 'Exporter en PDF',
    'actions.exportingPdf': 'Génération du PDF...',
    'actions.downloadTxt': 'Télécharger TXT',
    'actions.copy': 'Copier le texte',
    'actions.copied': 'Copié dans le presse-papiers !',
    'actions.clear': 'Effacer la note',
    'actions.clearConfirm': 'Êtes-vous sûr de vouloir effacer votre note ? Cette action est irréversible.',
    'actions.fontSans': 'Sans-serif',
    'actions.fontMono': 'Monospace',
    'actions.fontSize': 'Taille de police',
    'actions.fullscreen': 'Plein écran',
    'actions.exitFullscreen': 'Quitter le plein écran',

    // Theme Toggle
    'theme.toggle': 'Basculer le thème de couleur',
    'theme.dark': 'Mode sombre',
    'theme.light': 'Mode clair',

    // How-to Section
    'howto.title': 'Comment Utiliser Online Note',
    'howto.subtitle': 'Prise de notes fluide, instantanée et privée en 3 étapes.',
    'howto.step1.title': '1. Écrivez librement',
    'howto.step1.desc': 'Saisissez vos idées et textes dans une interface propre.',
    'howto.step2.title': '2. Sauvegarde automatique',
    'howto.step2.desc': 'Chaque mot est enregistré en temps réel dans votre navigateur.',
    'howto.step3.title': '3. Exportez facilement',
    'howto.step3.desc': 'Téléchargez votre document en PDF A4 ou TXT en un clic.',

    // Features Section
    'features.title': 'Pourquoi choisir Online Note ?',
    'features.subtitle': 'Conçu pour les rédacteurs, développeurs, étudiants et créateurs en quête de rapidité et de confidentialité totale.',
    'features.privacy.title': '100% Privé & Côté Client',
    'features.privacy.desc': 'Aucun compte, aucun cookie et aucun transfert vers des serveurs. Vos notes restent exclusivement dans votre navigateur.',
    'features.autosave.title': 'Sauvegarde Automatique Instantanée',
    'features.autosave.desc': 'Chaque frappe est enregistrée immédiatement. Fermez votre onglet sans perdre un seul mot.',
    'features.pdf.title': 'Export PDF Intelligent',
    'features.pdf.desc': 'Générez des documents PDF A4 élégants et paginés avec marges, horodatage et numérotation automatique.',
    'features.offline.title': 'Fonctionne Hors Ligne',
    'features.offline.desc': 'Une fois chargée, la page s\'utilise sans connexion internet active.',
    'features.responsive.title': 'Design Épuré et Sans Distraction',
    'features.responsive.desc': 'Une interface fluide et minimaliste adaptée à tous les écrans d\'ordinateur, tablettes et mobiles.',
    'features.darkmode.title': 'Thèmes Sombre et Clair',
    'features.darkmode.desc': 'Idéal pour réduire la fatigue oculaire lors des sessions d\'écriture tardives.',

    // FAQ Section
    'faq.title': 'Foire Aux Questions (FAQ)',
    'faq.subtitle': 'Toutes les réponses sur la sécurité et le fonctionnement.',
    'faq.q1': 'Online Note est-il gratuit ?',
    'faq.a1': 'Oui, c\'est un outil 100% gratuit sans inscription ni publicité.',
    'faq.q2': 'Mes notes sont-elles protégées ?',
    'faq.a2': 'Oui, vos données restent strictement dans le stockage local de votre navigateur.',
    'faq.q3': 'La sauvegarde est-elle automatique ?',
    'faq.a3': 'Oui, chaque saisie est enregistrée immédiatement dans le localStorage.',
    'faq.q4': 'Comment fonctionne l\'export PDF ?',
    'faq.a4': 'Il génère des PDF au format standard A4 avec pagination automatique.',
    'faq.q5': 'Puis-je l\'utiliser sans connexion internet ?',
    'faq.a5': 'Oui, le bloc-notes fonctionne parfaitement hors ligne une fois chargé.',

    // Footer
    'footer.privacyNote': '100% côté client • Aucune collecte de données • Tout reste dans votre navigateur',
    'footer.rights': 'Tous droits réservés.',
  },

  ja: {
    // Site & Meta
    'site.title': '無料オンラインメモ帳 | プライベート・自動保存・PDF出力',
    'site.description': '完全クライアントサイドで動作する、シンプルで邪魔のないオンラインメモ帳。localStorageへのリアルタイム自動保存、ダークモード対応、ワンクリックでのPDF書き出し機能を備えています。',
    'site.tagline': '邪魔のない、プライベートで高速なオンラインメモ帳',
    'site.name': 'Online Note',
    'site.keywords': 'オンラインメモ帳, 無料メモ帳, ブラウザメモ, テキストエディタ, リアルタイム保存, PDF書き出し, プライベートメモ, ダークモード対応',

    // Header & Navigation
    'nav.language': '言語',
    'nav.theme': 'テーマの切り替え',
    'nav.github': 'GitHubリポジトリ',
    'nav.support': '開発者を支援',
    'nav.supportShort': '支援',

    // Editor Status & Placeholders
    'editor.placeholder': 'ここにメモを入力してください...\n\n• 入力内容はすべてリアルタイムでブラウザに自動保存されます。\n• 100%プライベート — メモが外部サーバーに送信されることはありません。\n• いつでもきれいにフォーマットされたPDFやテキストファイルとして保存できます。',
    'editor.status.saved': 'ブラウザに保存済み',
    'editor.status.saving': '保存中...',
    'editor.status.empty': '準備完了',

    // Stats & Counters
    'stats.words': '単語',
    'stats.word': '単語',
    'stats.characters': '文字',
    'stats.character': '文字',
    'stats.lines': '行',
    'stats.line': '行',
    'stats.readingTime': '分で読了',

    // Action Buttons
    'actions.exportPdf': 'PDF出力',
    'actions.exportingPdf': 'PDF生成中...',
    'actions.downloadTxt': 'TXT保存',
    'actions.copy': 'テキストをコピー',
    'actions.copied': 'クリップボードにコピーしました！',
    'actions.clear': 'メモを消去',
    'actions.clearConfirm': 'メモを消去してもよろしいですか？この操作は元に戻せません。',
    'actions.fontSans': 'ゴシック体',
    'actions.fontMono': '等幅フォント',
    'actions.fontSize': '文字サイズ',
    'actions.fullscreen': '全画面表示',
    'actions.exitFullscreen': '全画面表示を終了',

    // Theme Toggle
    'theme.toggle': '配色テーマを切り替える',
    'theme.dark': 'ダークモード',
    'theme.light': 'ライトモード',

    // How-to Section
    'howto.title': 'Online Note の使い方',
    'howto.subtitle': '3つのステップで素早く安全にメモを作成・保存できます。',
    'howto.step1.title': '1. 自由にメモを入力',
    'howto.step1.desc': '邪魔のないシンプルな画面で、アイデアやテキストをすぐに入力できます。',
    'howto.step2.title': '2. リアルタイム自動保存',
    'howto.step2.desc': 'キーを入力するたびにお使いのブラウザのローカルストレージへ即時保存されます。',
    'howto.step3.title': '3. ワンクリックで保存・出力',
    'howto.step3.desc': '整形されたA4判PDFドキュメントやテキストファイル（TXT）として書き出せます。',

    // Features Section
    'features.title': 'Online Note が選ばれる理由',
    'features.subtitle': 'スピードとプライバシーを重視するライター、エンジニア、学生、クリエイターのために設計されました。',
    'features.privacy.title': '100% プライベート & クライアント動作',
    'features.privacy.desc': 'アカウント登録やCookieは不要。サーバーへのデータ送信は一切なく、ブラウザのローカルストレージのみに保管されます。',
    'features.autosave.title': 'リアルタイム自動保存',
    'features.autosave.desc': 'キーを入力するたびに即時保存。誤ってタブを閉じたりリロードしてもデータは失われません。',
    'features.pdf.title': 'スマートなPDF出力',
    'features.pdf.desc': '適切な余白、日時、ページ番号（ページ X / Y）を備えた美しいA4判PDFドキュメントを生成します。',
    'features.offline.title': 'オフラインでも動作',
    'features.offline.desc': '一度ページを読み込めば、インターネット接続がなくてもすべてのメモ機能が利用可能です。',
    'features.responsive.title': '集中を妨げないミニマルデザイン',
    'features.responsive.desc': 'PC、タブレット、スマートフォンなどあらゆる画面サイズに最適化された清潔感のあるUIです。',
    'features.darkmode.title': '目に優しいダークモード & ライトモード',
    'features.darkmode.desc': '夜間の作業でも目が疲れにくいダークモードを完備。選択した設定は自動で記憶されます。',

    // FAQ Section
    'faq.title': 'よくあるご質問 (FAQ)',
    'faq.subtitle': '安全性や保存仕様についてのご案内。',
    'faq.q1': '本当に無料で利用できますか？',
    'faq.a1': 'はい。完全無料でアカウント登録や課金は一切必要ありません。',
    'faq.q2': 'メモの内容が外部に漏れる心配はありませんか？',
    'faq.a2': '外部サーバーとの通信は行わず、すべてお使いの端末（ブラウザ）内でのみ保管されるため安全です。',
    'faq.q3': '自動保存されますか？',
    'faq.a3': 'はい。文字を入力するたびにリアルタイムでlocalStorageへ自動保存されます。',
    'faq.q4': 'PDF出力の特徴は何ですか？',
    'faq.a4': 'A4サイズに合わせた自動改ページやヘッダー・フッター番号をきれいに付加して保存できます。',
    'faq.q5': 'オフラインでも使えますか？',
    'faq.a5': 'はい。一度ページを開けば、通信圏外でもすべての機能がそのまま使えます。',

    // Footer
    'footer.privacyNote': '100% クライアントサイド動作 • サーバー通信なし • すべてのデータはお使いの端末に保存されます',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];
