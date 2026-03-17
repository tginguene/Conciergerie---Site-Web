/* ============================================
   OPTIMISTIC CONCIERGERIE — Header & Footer
   ============================================ */

function getActivePage() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

function renderHeader() {
  const page = getActivePage();

  const navLinks = [
    { href: 'index.html',        label: 'Accueil' },
    { href: 'nos-services.html', label: 'Nos services' },
    { href: 'nos-tarifs.html',   label: 'Nos tarifs' },
    { href: 'nos-secteurs.html', label: 'Nos secteurs' },
    { href: 'a-propos.html',     label: 'À propos' },
  ];

  const navItems = navLinks.map(link =>
    `<li><a href="${link.href}"${page === link.href ? ' class="active"' : ''}>${link.label}</a></li>`
  ).join('\n        ');

  const contactClass = page === 'contact.html' ? 'btn-nav active' : 'btn-nav';

  return `<header>
    <a href="index.html" class="logo">
      <img src="images/Abeille jaune.png" alt="Abeille Optimistic Conciergerie" class="logo-icon">
      <div class="logo-text">
        Optimistic Conciergerie
        <span>Gestion locative premium</span>
      </div>
    </a>
    <button class="menu-toggle" aria-label="Ouvrir le menu" onclick="this.closest('header').classList.toggle('nav-open')">
      <span></span><span></span><span></span>
    </button>
    <nav>
      <ul>
        ${navItems}
        <li><a href="contact.html" class="${contactClass}">Nous contacter</a></li>
      </ul>
    </nav>
  </header>`;
}

function renderFooter() {
  return `<footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="logo" style="margin-bottom:0.75rem;">
            <img src="images/Abeille jaune.png" alt="Abeille Optimistic Conciergerie" class="logo-icon">
            <div class="logo-text">Optimistic Conciergerie<span>Gestion locative premium</span></div>
          </a>
          <p class="footer-desc">Votre partenaire de confiance pour la gestion de location courte durée en Île-de-France.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>📞 <a href="tel:0666011234">06.66.01.xx.xx</a></li>
            <li style="display:flex; align-items:baseline; gap:0.4rem;">✉️ <a href="mailto:conciergerie.optimistic@gmail.com">conciergerie.optimistic@gmail.com</a></li>
            <li>📍 Île-de-France</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">© 2026 Optimistic Conciergerie — Tous droits réservés</div>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', function () {
  const headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.outerHTML = renderHeader();

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.outerHTML = renderFooter();
});
