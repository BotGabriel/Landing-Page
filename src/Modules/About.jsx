import '../style.css';
import ludii_co_white from '../assets/imagens/ludii-co_white.png';
import dcomp from '../assets/imagens/Dcomp.png';

function About() {
  return (
    <div className="about" id="sobre">
      <div className="bg">
        <div className="bgimage">
          <div className="brightness">
            <div className="bloco"></div>
            <div className="contentBx">
              <h2>Sobre Nós</h2>
              <p>O Departamento de Computação (DComp) da Universidade Federal de Sergipe surgiu em 2009. A área de Informática foi implementada na UFS inicialmente com o curso de graduação em Informática, criado em 1990, junto ao Departamento de Estatística e Informática (DEI) – Resolução nº. 02/90/CONSU. Em 1999, o DEI passou a ser denominado de Departamento de Ciência da Computação e Estatística (DCCE) – Resolução nº. 07/99/CONSU – até o ano de 2009, quando criado o Departamento de Estatística e Ciências Atuariais e alterada a denominação do DCCE para Departamento de Computação – Resolução nº. 018/2009/CONSU. O DComp dá suporte primordialmente aos cursos de Bacharelado em Ciência da Computação, Bacharelado em Sistemas de Informação e Bacharelado em Engenharia de Computação, além da oferta de disciplinas na área de computação a diversos cursos da Universidade.</p>
              <a href="https://www.sigaa.ufs.br/sigaa/public/departamento/portal.jsf?id=83">Ler Mais</a>
            </div>
            <div className='imagens'>
              <img src={ludii_co_white}/>
              <img src={dcomp}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
