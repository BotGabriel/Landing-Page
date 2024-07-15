import './style.css';
import miguel from './assets/Miguel.png';
import dcomp from './assets/Dcomp.png';
import capa from './assets/capajogo.png';
import './NavBar.jsx';

function App() {
  
  /* StickyNavbar */
  window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });


  function toggleMenu(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const nav = document.querySelector('.nav');
    toggleMenu.classList.toggle('active')
    nav.classList.toggle('active')
  }
      

  /* Filterable cards */
  let list = document.querySelectorAll('.list');
  let card = document.querySelectorAll('.card');


  for(let i = 0; i < list.length ; i++){
    list[i].addEventListener('click', function(){
      for(let j = 0; j < list.length; j++){
        list[j].classList.remove('active');
      }
      this.classList.add('active');

      let dataFilter = this.getAttribute('data-filter');

      for (let k=0; k < card.length; k++){
        card[k].classList.remove('active');
        card[k].classList.add('hide');

        if(card[k].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
          card[k].classList.remove('hide');
          card[k].classList.add('active');
        }
      }
    })
  }

  return (
    <>
      {/*Cabeçalho*/}
      <header>
        <a href="#" className="logo">Ludii.co</a> 
        <ul className="nav">
          <li><a href="#banner">Inicio</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#jogos">Jogos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        <div className="toggleMenu" onClick= {toggleMenu()} ></div>

      </header>

      {/*-- Home Banner --*/}
      <div className="banner" id="banner">
        <div className="bg">
          <div className="content">
            <h6>#1 Jogo</h6>
            <h3>Distribuidora</h3>
            <h2>Wonder Little Mess</h2>
            <p>Pequeno texto para vender o jogo</p>
            <a href="#" className="btn">Jogar Agora</a>
          </div>
          <img src={miguel}/>
        </div>
      </div>

      {/*-- About --*/}
      <div className="about" id="sobre">
        <div className="bg">
          <div className="bgimage">
            <div className="bloco"></div>
            <div className="contentBx">
              <h2>Sobre Nós</h2>
              <p>O Departamento de Computação (DComp) da Universidade Federal de Sergipe surgiu em 2009. A área de Informática foi implementada na UFS inicialmente com o curso de graduação em Informática, criado em 1990, junto ao Departamento de Estatística e Informática (DEI) – Resolução nº. 02/90/CONSU. Em 1999, o DEI passou a ser denominado de Departamento de Ciência da Computação e Estatística (DCCE) – Resolução nº. 07/99/CONSU – até o ano de 2009, quando criado o Departamento de Estatística e Ciências Atuariais e alterada a denominação do DCCE para Departamento de Computação – Resolução nº. 018/2009/CONSU. O DComp dá suporte primordialmente aos cursos de Bacharelado em Ciência da Computação, Bacharelado em Sistemas de Informação e Bacharelado em Engenharia de Computação, além da oferta de disciplinas na área de computação a diversos cursos da Universidade.</p>
              <a href="https://www.sigaa.ufs.br/sigaa/public/departamento/portal.jsf?id=83">Ler Mais</a>
            </div>
            <img src={dcomp}/>
          </div>
        </div>
      </div>

      {/*-- Games --*/}

      <div className= "games" id="jogos">
        <h2>Jogos Populares</h2>
        <ul>
          <li className="list active" data-filter="all">Todos</li>
          <li className="list" data-filter="pc">Jogos PC</li>
          <li className="list" data-filter="mobile">Jogos Mobile</li>
        </ul>

        <div className="card8x">
          <div className="card" data-item="pc">
            <img src={capa}/>
            <div className="content">
              <h4>Wonder Little Mess</h4>
              <div className="progress-line"><span></span></div>
              <div className="info">
                <p>Preço<br/><span>$10</span></p>
                <a href="#">Jogar Agora</a>
              </div>
            </div>
          </div>

          <div className="card" data-item="pc">
            <img src={capa}/>
            <div className="content">
              <h4>Teste 1 pc</h4>
              <div className="progress-line"><span></span></div>
              <div className="info">
                <p>Preço<br/><span>$10</span></p>
                <a href="#">Jogar Agora</a>
              </div>
            </div>
          </div>

          <div className="card" data-item="mobile">
            <img src={capa}/>
            <div className="content">
              <h4>Teste 2 mobile</h4>
              <div className="progress-line"><span></span></div>
              <div className="info">
                <p>Preço<br/><span>$10</span></p>
                <a href="#">Jogar Agora</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Torneios */}


      {/* Contatos */}

      <div className="contato" id="contato">
        <div className="bg">
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
              <a href="#" className="logo">Ludii.co</a>
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
    </>
  )
}

export default App