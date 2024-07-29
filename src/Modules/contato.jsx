import '../style.css';

function Contato() {
  return (
    <div className="contato" id="contato">
      <div className="bg">
        <div className='brightness'>
          <div className="form">
            <h1>Fale Conosco</h1>
            <div className="input8x">
              <p>Nome Completo:</p>
              <input type="text" placeholder="seu nome" />
            </div>
            <div className="input8x">
              <p>E-mail:</p>
              <input type="text" placeholder="seu email" />
            </div>
            <div className="input8x">
              <p>Sua Mensagem:</p>
              <textarea name="" id="" placeholder="escreva aqui..."></textarea>
            </div>
            <div className="input8x">
              <input type="submit" name="Submit"/>
            </div>
          </div>
        <div className="bloco"></div>
          <footer>
            <div className="info">
              <a href="#" className="logo">Gamber</a>
              <p><i className="fa-regular fa-copyright"></i> 2024 All Rigths Reserved</p>
              <ul>
                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-discord"></i></a></li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Contato