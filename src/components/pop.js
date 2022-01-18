import { useEffect,useState } from "react";
import { spin ,ActionRedirect} from "../func";

const {start,loss,win} = window.txt.pop;
const {bal,spins} = start;
let ndx = window.ndx;

const Start = (props)=>{

    const {stat,set,mob,setMob} =props;
    const {head,mes,btn} = start;

    const click = async()=>{

        let hide = document.querySelector('.targ');

        set({
            ...stat,
            show:false,
            start:false,
            lose:true
        })
            setTimeout(()=>{
                setMob(false)
            },1250)
    }

    return <div className="bg-red w-30 h-80 flx flx-col flx-jc-sa flx-ai-ce txt-wht p-20 fade-t targ pop">
        <h4 className="mont txt-al-ce">{head}</h4>

        <img src="./imgCnd/start.png" alt="welcome" className="w-50"/>

        <p className="lato w-80 txt-al-ce">{mes}</p>
        
        <div className="flx flx-jc-ce flx-ai-ce w-80">
            <p className="mont txt-wht">{spins.label}</p>
            <p className="lato txt-wht m-l-auto">{stat.ctr}</p>
        </div>

        <button className="btn btn-wht mont" onClick={click}>{btn}</button>

    </div>
}

const Win = (props)=>{

    const {stat,set} =props;
    const {ctr} = stat;
    const {head,mes,btn,fin} = win;
    const current = window.count;
    

    useEffect(() => {
        if(current !== 5){
            set({
                ...stat,
                bal:bal-50, 
                lose:false,
                win:true,
                show:true,
            })  

            setTimeout(()=>{
                set({
                    ...stat,
                    ctr:ctr+1, 
                })  
            },500)
        }else{
            set({
                ...stat,
                ctr:0,
                bal:bal-50, 
                lose:false,
                win:true,
                show:true,
            })  
        }
    }, [])

    const click =async()=>{ 

            if(current === 3){
                set({
                    ...stat,
                    ctr:ctr-1,
                    bal:bal-50, 
                    lose:false,
                    win:true,
                    show:false,
                })
    
                await spin();
    
                setTimeout(()=>{
                    set({
                        ...stat,
                        ctr:ctr-1,
                        bal:bal-50,
                        lose:false,
                        win:true,
                        show:true,
                    })
                },1000)
            }
            //gift card + free spin
            else{
                 set({
                    ...stat,
                    ctr:ctr-1,
                    bal:bal-50, 
                    lose:false,
                    win:true,
                    show:false,
                })
    
                await spin();
    
                setTimeout(()=>{
                    set({
                        ...stat,
                        ctr:ctr-1,
                        bal:bal-50,
                        lose:false,
                        win:true,
                        show:true,
                    })
                },1000)               
            }

            ndx = ndx+1;
    }   

    return <div className="bg-red w-30 h-80 flx flx-col flx-jc-sa flx-ai-ce txt-wht p-20 fade-t pop">
        <h4 className="mont txt-al-ce">{current!==5?window.img[ndx].head:head}</h4>

        {current!==5?
            <img src={`${window.img[ndx].src}`} alt={`${window.img[ndx].alt}`} className="w-30"/>
            :
            <div className="flx flx-jc-ce flx-ai-ce w-100"> 
                <img src="./brand/prize1.png" alt="gift card" className="w-30"/>
                <img src="./brand/prize3.png" alt="free spins" className="w-15 m-l-5 m-r-5"/>
                <img src="./brand/prize2.png" alt="iphone 13" className="w-30"/>
            </div>
        }
        <p className="lato w-80 txt-al-ce">{current!==5?window.img[ndx].mes:mes}</p>

        <div className="flx flx-jc-ce flx-ai-ce w-80">
            <p className="mont txt-wht">{spins.label}</p>
            <p className="lato txt-wht m-l-auto">{stat.ctr}</p>
        </div>
        
        {/* Data product button  */}
        <button className="mont btn btn-wht exit-button"
          data-product-id="1"
          onClick={(elem) => ActionRedirect(elem.target.dataset.productId)}>{btn}</button>
    </div>
}

const Lose = (props)=>{

    const {stat,set} =props;
    const {head,mes,btn} = loss;
    const current = window.count;
    
    const click =async()=>{

        
        const {ctr,bal} = stat;

        set({
            ...stat,
            ctr:ctr-1,
            bal:2500,
            lose:false,
            win:true,
            show:false
        })

        await spin();

        setTimeout(()=>{
            set({
                ...stat,
                ctr:ctr-1,
                bal:2500,
                show:true,
                lose:false,
                win:true
            })
        },1000)
    }

    return <div className="bg-red w-30 h-80 flx flx-col flx-jc-sa flx-ai-ce txt-wht p-20 fade-t pop">
        <h4 className="mont txt-al-ce">{head}</h4>

        <img src="./imgCnd/lose.png" alt="lose"/>
        <p className="lato w-80 txt-al-ce">{mes}</p>

        <div className="flx flx-jc-ce flx-ai-ce w-80">
            <p className="mont txt-wht">{spins.label}</p>
            <p className="lato txt-wht m-l-auto">{stat.ctr}</p>
        </div>        

        <button className="mont btn btn-wht" onClick={click}>{btn}</button>
    </div>
}

const Pop = (props)=>{

    const {stat,set,mobile,setMob} =props;
    const {start,win,lose} = stat;

    return <div className="w-100 h-100 flx flx-jc-ce flx-ai-ce bg-pop fade pos-abs z-top">
        {win&&<Win stat={stat} set={set}/>}
        {start&&<Start stat={stat} set={set} mob={mobile} setMob={setMob}/>}
        {lose&&<Lose stat={stat} set={set}/>}
    </div>
}

export {Pop}