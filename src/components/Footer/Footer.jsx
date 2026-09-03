function Footer() {
  const links = [
    'Audiodescrição', 'Central de Ajuda', 'Cartão Pré-pago',
    'Imprensa', 'Relações com Investidores', 'Carreiras',
    'Termos de Uso', 'Privacidade', 'Avisos Legais',
    'Preferências de Cookies', 'Informações Corporativas',
    'Entre em Contato', 'Teste de Velocidade',
    'Avisos de Aviso Legal', 'Somente no Netflix'
  ];

  const cols = Math.ceil(links.length / 4);

  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="#">📘</a>
        <a href="#">📸</a>
        <a href="#">🐦</a>
        <a href="#">📺</a>
      </div>
      <div className="footer-links">
        {links.map((link, i) => {
          const colIndex = Math.floor(i / cols);
          const colStart = colIndex * cols;
          return (
            <a href="#" key={link} className="footer-link">
              {link}
            </a>
          );
        })}
      </div>
      <p className="footer-copy">© 2024 Netflix Clone — Feito por diversão</p>
    </footer>
  );
}

export default Footer;
