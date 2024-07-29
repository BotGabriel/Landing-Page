import '../style.css';
import {useState} from 'react';

function Header() {

  /* StickyNavbar */
  window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  /* Status ToggleMenu*/
  const [stateMenu, setStateMenu] = useState(true);
  const changeStateMenu = ()=>{setStateMenu(!stateMenu)};
    

  return (
    <>
    <a href="#" className="logo">Gamber</a> 
    {stateMenu 
    ? 
    <ul className="nav" id="nav">
    <li><a href="#banner">Inicio</a></li>
    <li><a href="#sobre">Sobre</a></li>
    <li><a href="#jogos">Jogos</a></li>
    <li><a href="#contato">Contato</a></li>
    </ul>
    : 
    <ul className="nav active" id="nav">
    <li><a href="#banner">Inicio</a></li>
    <li><a href="#sobre">Sobre</a></li>
    <li><a href="#jogos">Jogos</a></li>
    <li><a href="#contato">Contato</a></li>
    </ul>
    }
    {stateMenu ?  <div className= "toggleMenu" onClick={changeStateMenu}></div> 
    : <div className='toggleMenu active' onClick={changeStateMenu}></div>}
  </>
  )
}

export default Header