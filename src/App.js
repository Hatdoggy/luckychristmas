import { useState,useEffect } from "react";
import { BgGrn } from "./components/bgStart";
import { Main } from "./components/main";
import { Pop } from "./components/pop";
import { useMediaQuery } from 'react-responsive'
import { Comments } from "./components/comments";

const {bal,spins} = window.txt.pop.start;

function App() {

  
  const mobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })
  const [start, setStart] = useState(false)
  const [mob,setMob] = useState(true);
  const [showCom, setCom] = useState(false);

  const [stat,setStat] = useState({
    show:false,
    start:true,
    win:false,
    lose:false,
    bal:bal.val,
    ctr:spins.val,
  })

  useEffect(() => {
    setTimeout(()=>{
      setStat({
        ...stat,
        show:true
      })
    },7000)
  }, [])

  return (
    start?
    <div className="App w-100 h-100 pos-rel">
      <canvas className="webgl"></canvas>
      {stat.show&&<Pop stat={stat} set={setStat} mobile={mobile}  setMob={setMob}/>}
      {showCom&&<Comments set={setCom}/>}
      <Main stat={stat} set={setStat} mobile={mobile} mob={mob} setCom={setCom}/>
    </div>
    :
    <BgGrn set={setStart}/>
  );
}

export default App;
