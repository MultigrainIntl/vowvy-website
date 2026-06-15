/* ============================================
   VOWVY — main.js
   ============================================ */

// ---- I18N ----
(function () {
  var LANG_KEY = 'vowvy-lang';

  var dict = {
    en: {
      'nav.tagline':   'A SEARCHABLE MEMORY FOR PHYSICAL THINGS',
      'nav.cta':       'Get Started',

      'hero.headline': 'Finally know what you have,<br />where it is, and what you\'re<br /><em>ready to do with it.</em>',
      'hero.sub':      'VOWVY helps people and teams photograph, organize, find, share, document, move, and sell the things they own — without trying to remember everything themselves.',
      'hero.cta1':     'Get Started →',
      'hero.cta2':     'See how it works',

      'problem.eyebrow':  'THE REALITY',
      'problem.h2':       'Life doesn\'t organize itself<br /><em>before you need to find something.</em>',
      'problem.sub':      'The junk drawer. The storage unit from three moves ago. Your parents\' garage. The boxes labeled "misc." We\'ve all been there — and the chaos is exhausting.',
      'problem.card1.h3': '"Where did I put that?"',
      'problem.card1.p':  'The question that costs hours.',
      'problem.card2.h3': 'Boxes labeled "misc."',
      'problem.card2.p':  'Thousands of forgotten decisions.',
      'problem.card3.h3': 'Moving again.',
      'problem.card3.p':  'Starting from zero, again.',

      'how.eyebrow':       'HOW IT WORKS',
      'how.h2':            'Three steps.<br /><em>Endless clarity.</em>',
      'how.step1.h3':      'Snap a photo',
      'how.step1.p':       'Point your phone at any box, drawer, shelf, or room. Don\'t organize first — just capture.',
      'how.step2.h3':      'AI catalogs everything',
      'how.step2.p':       'Vowvy reads the photo and generates descriptive tags for every visible item — instantly.',
      'how.step3.h3':      'Find anything, forever',
      'how.step3.p':       'Search by item, category, or keyword. Vowvy tells you exactly which box and where that box lives.',
      'how.search.eyebrow':'SEARCH RESULT',

      'uses.eyebrow':    'MADE FOR REAL LIFE',
      'uses.h2':         'Useful at home,<br /><em>at school, and at work.</em>',
      'uses.row1.strong':'Home & storage',
      'uses.row1.span':  'Remember what\'s in boxes, closets, garages, basements, and storage areas.',
      'uses.row2.strong':'Moving & dorms',
      'uses.row2.span':  'Track belongings before, during, and after a move.',
      'uses.row3.strong':'Families & estates',
      'uses.row3.span':  'Organize keepsakes, valuables, donations, and items to sell.',
      'uses.row4.strong':'Collections & valuables',
      'uses.row4.span':  'Document books, art, memorabilia, antiques, and personal collections.',
      'uses.row5.strong':'Work & shared spaces',
      'uses.row5.span':  'Keep track of supplies, equipment, samples, and shared storage.',
      'uses.row6.strong':'Insurance documentation',
      'uses.row6.span':  'Create a photo-based record that may help when preparing an inventory for insurance purposes.',

      'why.eyebrow': 'WHY VOWVY?',
      'why.h2':      'Value Only What<br /><em>Values You.</em>',
      'why.body1':   'VOWVY stands for <em>Value Only What Values You</em> — a reminder that organizing your things isn\'t about keeping everything. It\'s about gaining clarity on what matters.',
      'why.body2':   'Most people aren\'t trying to create a permanent archive. They\'re deciding: what do I keep? What\'s worth protecting? What\'s ready to be shared, sold, donated, or let go? VOWVY gives you the photo-based inventory to make those decisions with confidence.',
      'why.callout': 'Keep what matters. Let go of what doesn\'t.',

      'together.eyebrow':          'TOGETHER',
      'together.h2':               'Large tasks become<br /><em class="terra">lighter, together.</em>',
      'together.p':                'Invite family or friends to contribute photos from their own phones. A garage that takes one person a weekend takes a family an afternoon.',
      'together.avatarLabel':      'organizing together',
      'together.activity.eyebrow': 'ACTIVITY',

      'philosophy.quote': '"Capture first.<br />Organize later."',
      'philosophy.p':     'Vowvy is built around a simple truth: life doesn\'t pause while you get organized. The app works the way you do — messy, moving, imperfect. You capture. Vowvy brings clarity.',

      'cta.h2':  'Feel capable again.',
      'cta.sub': 'Vowvy is live. Snap a photo of any box, drawer, or shelf — AI catalogs everything inside. Find anything, later.',
      'cta.btn': 'Get Started Free →',
      'cta.note':'Free to start. No credit card.',

      'footer.copy':    '© 2026 Vowvy · A searchable memory for physical things.',
      'footer.privacy': 'Privacy Policy',
    },

    es: {
      'nav.tagline':   'UNA MEMORIA BUSCABLE PARA COSAS FÍSICAS',
      'nav.cta':       'Comenzar',

      'hero.headline': 'Por fin sabes qué tienes,<br />dónde está y qué<br /><em>puedes hacer con ello.</em>',
      'hero.sub':      'VOWVY ayuda a personas y equipos a fotografiar, organizar, encontrar, compartir, documentar, mover y vender las cosas que poseen — sin tener que recordarlo todo.',
      'hero.cta1':     'Comenzar →',
      'hero.cta2':     'Ver cómo funciona',

      'problem.eyebrow':  'LA REALIDAD',
      'problem.h2':       'La vida no se organiza sola<br /><em>antes de que necesites encontrar algo.</em>',
      'problem.sub':      'El cajón del desorden. La bodega de la mudanza de hace tres años. El garaje de tus padres. Las cajas rotuladas "misc." Todos hemos estado ahí — y el caos agota.',
      'problem.card1.h3': '"¿Dónde lo puse?"',
      'problem.card1.p':  'La pregunta que cuesta horas.',
      'problem.card2.h3': 'Cajas rotuladas "misc."',
      'problem.card2.p':  'Miles de decisiones olvidadas.',
      'problem.card3.h3': 'Otra mudanza.',
      'problem.card3.p':  'Empezar de cero, otra vez.',

      'how.eyebrow':       'CÓMO FUNCIONA',
      'how.h2':            'Tres pasos.<br /><em>Claridad sin fin.</em>',
      'how.step1.h3':      'Toma una foto',
      'how.step1.p':       'Apunta tu teléfono a cualquier caja, cajón, estante o habitación. No organices primero — solo captura.',
      'how.step2.h3':      'La IA cataloga todo',
      'how.step2.p':       'Vowvy analiza la foto y genera etiquetas descriptivas para cada objeto visible — al instante.',
      'how.step3.h3':      'Encuentra cualquier cosa, para siempre',
      'how.step3.p':       'Busca por objeto, categoría o palabra clave. Vowvy te dice en qué caja está exactamente y dónde se encuentra esa caja.',
      'how.search.eyebrow':'RESULTADO DE BÚSQUEDA',

      'uses.eyebrow':    'HECHO PARA LA VIDA REAL',
      'uses.h2':         'Útil en casa,<br /><em>en la escuela y en el trabajo.</em>',
      'uses.row1.strong':'Hogar y almacenamiento',
      'uses.row1.span':  'Recuerda qué hay en cajas, armarios, garajes, sótanos y áreas de almacenamiento.',
      'uses.row2.strong':'Mudanzas y dormitorios',
      'uses.row2.span':  'Haz seguimiento de tus pertenencias antes, durante y después de una mudanza.',
      'uses.row3.strong':'Familias y herencias',
      'uses.row3.span':  'Organiza recuerdos, objetos de valor, donaciones y artículos para vender.',
      'uses.row4.strong':'Colecciones y objetos de valor',
      'uses.row4.span':  'Documenta libros, arte, recuerdos, antigüedades y colecciones personales.',
      'uses.row5.strong':'Trabajo y espacios compartidos',
      'uses.row5.span':  'Lleva el control de suministros, equipos, muestras y almacenamiento compartido.',
      'uses.row6.strong':'Documentación para seguros',
      'uses.row6.span':  'Crea un registro fotográfico que puede ayudar al preparar un inventario para fines de seguros.',

      'why.eyebrow': '¿POR QUÉ VOWVY?',
      'why.h2':      'Valora Solo Lo Que<br /><em>Te Valora.</em>',
      'why.body1':   'VOWVY significa <em>Value Only What Values You</em> — un recordatorio de que organizar tus cosas no se trata de conservarlo todo. Se trata de ganar claridad sobre lo que importa.',
      'why.body2':   'La mayoría de las personas no busca crear un archivo permanente. Están decidiendo: ¿qué conservo? ¿Qué vale la pena proteger? ¿Qué está listo para compartir, vender, donar o dejar ir? VOWVY te da el inventario fotográfico para tomar esas decisiones con confianza.',
      'why.callout': 'Conserva lo que importa. Suelta lo que no.',

      'together.eyebrow':          'JUNTOS',
      'together.h2':               'Las grandes tareas se vuelven<br /><em class="terra">más ligeras, juntos.</em>',
      'together.p':                'Invita a familiares o amigos a contribuir con fotos desde sus propios teléfonos. Un garaje que le toma a una persona un fin de semana, le toma a una familia una tarde.',
      'together.avatarLabel':      'organizando juntos',
      'together.activity.eyebrow': 'ACTIVIDAD',

      'philosophy.quote': '"Primero captura.<br />Organiza después."',
      'philosophy.p':     'Vowvy está construido en torno a una verdad simple: la vida no se detiene mientras te organizas. La app funciona como tú — desordenada, en movimiento, imperfecta. Tú capturas. Vowvy trae la claridad.',

      'cta.h2':  'Vuelve a sentirte capaz.',
      'cta.sub': 'Vowvy ya está disponible. Toma una foto de cualquier caja, cajón o estante — la IA cataloga todo lo que hay dentro. Encuentra cualquier cosa, cuando quieras.',
      'cta.btn': 'Comenzar Gratis →',
      'cta.note':'Gratis para empezar. Sin tarjeta de crédito.',

      'footer.copy':    '© 2026 Vowvy · Una memoria buscable para cosas físicas.',
      'footer.privacy': 'Política de Privacidad',
    },

    pt: {
      'nav.tagline':   'UMA MEMÓRIA PESQUISÁVEL PARA COISAS FÍSICAS',
      'nav.cta':       'Começar',

      'hero.headline': 'Finalmente saiba o que você tem,<br />onde está e o que<br /><em>pode fazer com isso.</em>',
      'hero.sub':      'VOWVY ajuda pessoas e equipes a fotografar, organizar, encontrar, compartilhar, documentar, mover e vender as coisas que possuem — sem precisar se lembrar de tudo.',
      'hero.cta1':     'Começar →',
      'hero.cta2':     'Ver como funciona',

      'problem.eyebrow':  'A REALIDADE',
      'problem.h2':       'A vida não se organiza sozinha<br /><em>antes de você precisar encontrar algo.</em>',
      'problem.sub':      'A gaveta bagunçada. O depósito da mudança de três anos atrás. A garagem dos seus pais. As caixas marcadas como "misc." Todo mundo já esteve aí — e o caos é esgotante.',
      'problem.card1.h3': '"Onde eu coloquei isso?"',
      'problem.card1.p':  'A pergunta que custa horas.',
      'problem.card2.h3': 'Caixas marcadas como "misc."',
      'problem.card2.p':  'Milhares de decisões esquecidas.',
      'problem.card3.h3': 'Mais uma mudança.',
      'problem.card3.p':  'Começar do zero, de novo.',

      'how.eyebrow':       'COMO FUNCIONA',
      'how.h2':            'Três passos.<br /><em>Clareza infinita.</em>',
      'how.step1.h3':      'Tire uma foto',
      'how.step1.p':       'Aponte o celular para qualquer caixa, gaveta, prateleira ou cômodo. Não organize antes — apenas registre.',
      'how.step2.h3':      'A IA cataloga tudo',
      'how.step2.p':       'Vowvy analisa a foto e gera etiquetas descritivas para cada item visível — na hora.',
      'how.step3.h3':      'Encontre qualquer coisa, para sempre',
      'how.step3.p':       'Busque por item, categoria ou palavra-chave. Vowvy indica exatamente em qual caixa está e onde essa caixa fica.',
      'how.search.eyebrow':'RESULTADO DA BUSCA',

      'uses.eyebrow':    'FEITO PARA A VIDA REAL',
      'uses.h2':         'Útil em casa,<br /><em>na escola e no trabalho.</em>',
      'uses.row1.strong':'Casa e armazenamento',
      'uses.row1.span':  'Lembre o que há em caixas, armários, garagens, porões e áreas de armazenamento.',
      'uses.row2.strong':'Mudanças e repúblicas',
      'uses.row2.span':  'Acompanhe seus pertences antes, durante e depois de uma mudança.',
      'uses.row3.strong':'Famílias e espólios',
      'uses.row3.span':  'Organize lembranças, objetos de valor, doações e itens para vender.',
      'uses.row4.strong':'Coleções e objetos de valor',
      'uses.row4.span':  'Documente livros, arte, memorabília, antiguidades e coleções pessoais.',
      'uses.row5.strong':'Trabalho e espaços compartilhados',
      'uses.row5.span':  'Controle suprimentos, equipamentos, amostras e armazenamento compartilhado.',
      'uses.row6.strong':'Documentação para seguros',
      'uses.row6.span':  'Crie um registro fotográfico que pode ajudar na elaboração de um inventário para fins de seguro.',

      'why.eyebrow': 'POR QUE VOWVY?',
      'why.h2':      'Valorize Apenas o Que<br /><em>Te Valoriza.</em>',
      'why.body1':   'VOWVY significa <em>Value Only What Values You</em> — um lembrete de que organizar suas coisas não é sobre guardar tudo. É sobre ter clareza sobre o que importa.',
      'why.body2':   'A maioria das pessoas não está tentando criar um arquivo permanente. Elas estão decidindo: o que eu guardo? O que vale a pena proteger? O que está pronto para ser compartilhado, vendido, doado ou descartado? VOWVY te dá o inventário fotográfico para tomar essas decisões com confiança.',
      'why.callout': 'Guarde o que importa. Deixe ir o que não importa.',

      'together.eyebrow':          'JUNTOS',
      'together.h2':               'Grandes tarefas ficam<br /><em class="terra">mais leves, juntos.</em>',
      'together.p':                'Convide familiares ou amigos para contribuir com fotos dos próprios celulares. Uma garagem que leva um fim de semana para uma pessoa, leva uma tarde para uma família.',
      'together.avatarLabel':      'organizando juntos',
      'together.activity.eyebrow': 'ATIVIDADE',

      'philosophy.quote': '"Registre primeiro.<br />Organize depois."',
      'philosophy.p':     'Vowvy é construído em torno de uma verdade simples: a vida não pausa enquanto você se organiza. O app funciona do jeito que você funciona — bagunçado, em movimento, imperfeito. Você registra. Vowvy traz a clareza.',

      'cta.h2':  'Sinta-se capaz de novo.',
      'cta.sub': 'Vowvy já está disponível. Tire uma foto de qualquer caixa, gaveta ou prateleira — a IA cataloga tudo que está dentro. Encontre qualquer coisa, depois.',
      'cta.btn': 'Começar de Graça →',
      'cta.note':'Grátis para começar. Sem cartão de crédito.',

      'footer.copy':    '© 2026 Vowvy · Uma memória pesquisável para coisas físicas.',
      'footer.privacy': 'Política de Privacidade',
    },
  };

  function storedToInternal(stored) {
    if (stored === 'es') return 'es';
    if (stored === 'pt' || stored === 'pt-BR') return 'pt';
    return 'en';
  }

  function applyLang(lang) {
    var translations = dict[lang] || dict.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[key] !== undefined) {
        el.innerHTML = translations[key];
      }
    });
    var sel = document.getElementById('langSelect');
    if (sel) sel.value = lang;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  }

  var stored = localStorage.getItem(LANG_KEY);
  var lang = storedToInternal(stored);
  applyLang(lang);

  var sel = document.getElementById('langSelect');
  if (sel) {
    sel.addEventListener('change', function () {
      var chosen = this.value;
      // Store pt-BR to match the app's localStorage convention
      localStorage.setItem(LANG_KEY, chosen === 'pt' ? 'pt-BR' : chosen);
      applyLang(chosen);
    });
  }
})();


// ---- NAV: add scrolled class ----
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


// ---- REVEAL on scroll ----
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  els.forEach(el => observer.observe(el));
})();


// ---- PHONE: cycle active tag ----
(function () {
  const tags = document.querySelectorAll('#phoneTags .tag');
  if (!tags.length) return;
  let current = 0;

  setInterval(() => {
    tags[current].classList.remove('active');
    current = (current + 1) % tags.length;
    tags[current].classList.add('active');
  }, 1500);
})();



// ---- SMOOTH scroll for anchor links ----
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = 80; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
