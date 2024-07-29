import '../style.css';
import miguel from '../assets/imagens/Miguel.png';

function Banner() {
  return (
    <div className="banner" id="banner">
      <div className="bg">
        <div className="brightness">
          <div className="content">
            <h6>#1 Jogo</h6>
            <h3>Distribuidora</h3>
            <h2>Wonder Little Mess</h2>
            <p>Um jogo Rogue-like Cardgame em dupla para se divertir no conforto da sua casa!
              Venha se divertir com Miguel e Mike e suas pequenas e maravilhosas bagunças </p>
            <a href="#" className="btn">Jogar Agora</a>
          </div>
          <img src={miguel}/>
        </div>
      </div>
    </div>
  )
}

export default Banner