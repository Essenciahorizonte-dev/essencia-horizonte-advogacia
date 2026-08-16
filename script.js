// ===== Essência Horizonte — Advocacia & Consultoria =====

// Garante que a página abre sempre do topo (inclui navegação avançar/recuar)
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.addEventListener('pageshow', () => window.scrollTo(0, 0));

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });

  // Close menu when a link is tapped
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });
}

// WhatsApp number (fictício — substituir pelo número real do cliente)
const WHATSAPP_NUMBER = '258840000000';

// Booking form -> WhatsApp message
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const contacto = document.getElementById('contacto').value.trim();
    const area = document.getElementById('area').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const mensagem = document.getElementById('mensagem').value.trim();

    const linhas = [
      'Olá, Essência Horizonte!',
      '',
      `Nome: ${nome}`,
      `Contacto: ${contacto}`,
      `Área jurídica: ${area}`,
      `Data: ${data || 'a combinar'}`,
      `Hora: ${hora || 'a combinar'}`,
      `Mensagem: ${mensagem || '—'}`
    ];

    const texto = encodeURIComponent(linhas.join('\n'));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`;

    window.open(url, '_blank', 'noopener');
  });
}
