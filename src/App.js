import { useState,useEffect } from "react";
import { BgGrn } from "./components/bgStart";
import { Main } from "./components/main";
import { Pop } from "./components/pop";
import { useMediaQuery } from 'react-responsive'
import { Comments } from "./components/comments";

const {bal,spins} = window.txt.pop.start;
const {congrats} = window.txt.main;
const {max} = congrats;

function App() {

  
  const mobile = useMediaQuery({
    query: '(max-width: 1000px)'
  })
  const [start, setStart] = useState(false)
  const [mob,setMob] = useState(true);
  const [showCom, setCom] = useState(false);
  const [tot, setTot] = useState(37);
  const [strt, setStrt] = useState(0);

  const [stat,setStat] = useState({
    show:false,
    start:true,
    win:false,
    lose:false,
    bal:bal.val,
    ctr:spins.val,
    clk:false,
  })

    const upd = async(e)=>{
        let newTot = 0;
        setTimeout(async()=>{
            newTot = tot + 37;
            if(newTot < max){
                setStrt(tot);
                await setTot(newTot)
                e.update.newEnd = tot;
                e.start();
            }else{
                newTot = max;
                setStrt(tot);
                await setTot(newTot)
                e.update.newEnd = max;
                e.pauseResume();
            }
        },3000)
    }

  useEffect(() => {
    setTimeout(()=>{
      setStat({
        ...stat,
        clk:true,
        show:true
      })
    },7000)
  }, [])

  return (
    start?
    <div className="App w-100 h-100 pos-rel">
      <canvas className="webgl"></canvas>
      {stat.show&&<Pop stat={stat} set={setStat} mobile={mobile}  setMob={setMob} tot={tot} setT={setTot} strt={strt} setStrt={setStrt} upd={upd}/>}
      {showCom&&<Comments set={setCom}/>}
      <Main stat={stat} set={setStat} mobile={mobile} mob={mob} setCom={setCom}/>
    </div>
    :
    <BgGrn set={setStart}/>
  );
}

export default App;
