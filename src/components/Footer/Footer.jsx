function Footer() {
  const columns = [
    ['Audiodescrição', 'Central de Ajuda', 'Cartão Presente', 'Imprensa'],
    ['Relações com Investidores', 'Carreiras', 'Avisos Legais', 'Preferências de Cookies'],
    ['Cartão Pré-pago', 'Termos de Uso', 'Privacidade', 'Informações Corporativas'],
    ['Entre em Contato', 'Teste de Velocidade', 'Somente no Netflix'],
  ];

  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="#" aria-label="Facebook">f</a>
        <a href="#" aria-label="Instagram">i</a>
        <a href="#" aria-label="Twitter">t</a>
        <a href="#" aria-label="YouTube">y</a>
      </div>
      <div className="footer-grid">
        {columns.map((col, ci) => (
          <div key={ci} className="footer-column">
            {col.map(link => (
              <a key={link} href="#" className="footer-link">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <p className="footer-copy">© 2024 Netflix Clone</p>
    </footer>
  );
}

export default Footer;
