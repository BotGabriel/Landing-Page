import '../style.css';
import {useState} from 'react';
import capa from '../assets/imagens/capajogo.png';

function Games() {

  /* Filterable cards */

    /* Status Games */
    const[stateAll, setStateAll] = useState(true);
    const[statePC, setStatePC] = useState(true);
    const[stateMobile, setStateMobile] = useState(true);
    const[stateCardPC, setStateCardPC] = useState(true);
    const[stateCardMobile, setStateCardMobile] = useState(true);
  
      /* Handleclicks */
    function clickStateAll() {
      
      setStateAll(true);
      setStatePC(true);
      setStateMobile(true);
      setStateCardPC(true);
      setStateCardMobile(true);
  
    }
  
    function clickStatePC(){
  
      setStateAll(false); 
      setStatePC(false);
      setStateMobile(true);
      setStateCardPC(true);
      setStateCardMobile(false); 
  
    }
  
    function clickStateMobile(){
  
      setStateAll(false); 
      setStatePC(true);
      setStateMobile(false);
      setStateCardPC(false);
      setStateCardMobile(true); 
       
    }

  return (
    <div className= "games" id="jogos">
      <h2>Jogos Populares</h2>
      <ul>
        {stateAll ? <li className="list active" data-filter="all" onClick={clickStateAll}>Todos</li>
        : <li className="list" data-filter="all" onClick={clickStateAll}>Todos</li>}

        {statePC ? <li className="list" data-filter="pc" onClick={clickStatePC}>Jogos PC</li>
        : <li className="list active" data-filter="pc"onClick={clickStatePC}>Jogos PC</li>}

       {stateMobile ? <li className="list" data-filter="mobile" onClick={clickStateMobile}>Jogos Mobile</li>
        : <li className="list active" data-filter="mobile" onClick={clickStateMobile}>Jogos Mobile</li>}
      </ul>

      <div className="card8x">
        {stateCardPC ?
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
        : null}
          
        {stateCardPC ? 
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
        : null}
          
        {stateCardMobile ?
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
        : null}
      </div>
    </div>
  )
}

export default Games
