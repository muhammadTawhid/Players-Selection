import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import playerData from './fakeData/Data.json'
import Player from './components/Player/Player';
import Added from './components/Player/Player added/Added';

function App() {

  const [players, setPlayer] = useState([])
  const [plyr, setPlyr] = useState([]);
  
  useEffect(()=>{
    setPlayer(playerData)
    const names = playerData.map (player=> player.Name)
  },[])

  const [dataRecived , setDataRecived] = useState([]);
  const handleClick = (datRecived) => {
      const newCart = [...dataRecived, datRecived]
      setDataRecived(newCart);
  }
  return (
    
    <div className="App d-flex ">
            <div className="h-75 w-75 ">
            <ul className='row row-cols-2 row-cols-lg-5 shadow-sm p-3 mb-5 bg-body rounded'>
        {
          players.map(player => <Player player={player}  datapass = {handleClick}></Player> )
        }
      </ul>

            </div>
          <div className=''>
      <h4 className='mt-4'>Player added: {players.length}</h4>
      <Added  datapassed ={dataRecived} ></Added>
          </div>

    </div>
  );
}

export default App;
