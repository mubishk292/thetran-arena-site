import './App.css';
import {useEffect} from 'react'
import Home from './components/home/home';
import Form from './components/adressForm/form';
import GamePlay from './components/gameplay/gamePlay';
import NetsItem from './components/netsItem/netsItem';
import CoreTeam from './components/coreTeam/coreTeam';
import RoadMap from './components/roadMap/roadmap';
import Developer from './components/developer/developer';
import Scroll from './components/scroll/scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    })
  }, [])
  
  return (
    <>
      <div id='home'>
        <Home />
      </div>
      <Form />
      <div id='game'>
        <GamePlay />
      </div>
      <div id='nfts'>
        <NetsItem />
      </div>
      <div id='team'>
        <CoreTeam />
      </div>
      <div id='roadmap'>
        <RoadMap />
      </div>
      <div id='partner'>
        <Developer />
      </div>
      <Scroll />
    </>
  );
}

export default App;
