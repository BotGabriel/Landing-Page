import './style.css';
import Header from './Modules/Header';
import Banner from './Modules/Banner';
import About from './Modules/About';
import Games from './Modules/Games';
import Contato from './Modules/Contato';

function App() {

  return (
    <>
      {/*Cabeçalho*/}
      <header>
        <Header/>
      </header>

      {/*-- Home Banner --*/}
      <Banner/>

      {/*-- About --*/}
      <About/>

      {/*-- Games --*/}
      <Games/>

      {/* Torneios */}


      {/* Contatos */}
      <Contato/>
      
    </>
  )
}

export default App