import { spin ,ActionRedirect} from "../func";

const {start,loss,win} = window.txt.pop;
const {bal,spins} = start;

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

    return <div className="bg-grad w-30 h-80 flx flx-col flx-jc-sa flx-ai-ce txt-wht p-20 fade-t targ pop">
        <h4 className="mas txt-al-ce">{head}</h4>

        <img src="./img/greet.png" alt="welcome"/>

        <p className="lato w-80 txt-al-ce">{mes}</p>

        <div className="flx flx-jc-ce flx-ai-ce w-80">
            <p className="mas txt-wht">{bal.label}</p>
            <p className="lato txt-wht m-l-auto">{window.txt.currency}{stat.bal}</p>
        </div>

        <div className="flx flx-jc-ce flx-ai-ce w-80">
            <p className="mas txt-wht">{spins.label}</p>
            <p className="lato txt-wht m-l-auto">{stat.ctr}</p>
        </div>

        <button className="btn btn-red mas" onClick={click}>{btn}</button>

    </div>
}

const Win = (props)=>{

    const {stat,set} =props;
    const {head,mes,btn} = win;

    return <div className="bg-grad w-30 h-80 flx flx-col flx-jc-sa flx-ai-ce txt-wht p-20 fade-t pop">
        <h4 className="mas txt-al-ce">{head}</h4>

        <img src="./img/winImg.png" alt="win" className="w-70"/>
        <p className="lato w-80 txt-al-ce">{mes}</p>

        <div className="flx flx-jc-ce flx-ai-ce w-80">
            <p className="mas txt-wht">{bal.label}</p>
            <p className="lato txt-wht m-l-auto">{window.txt.currency}{stat.bal}</p>
        </div>

        <div className="flx flx-jc-ce flx-ai-ce w-80">
            <p className="mas txt-wht">{spins.label}</p>
            <p className="lato txt-wht m-l-auto">{stat.ctr}</p>
        </div>
        
        {/* Data product button  */}
        <button className="mas btn btn-ylw product-button"
          data-product-id="1"
          onClick={(elem) => ActionRedirect(elem.target.dataset.productId)}>{btn}</button>
    </div>
}

const Lose = (props)=>{

    const {stat,set} =props;
    const {head,mes,btn} = loss;
    
    const click =async()=>{

        
        const {ctr,bal} = stat;

        if(ctr >1){
            set({
                ...stat,
                ctr:ctr-1,
                bal:bal-50,
                show:false,
            })

            await spin();

            setTimeout(()=>{
                set({
                    ...stat,
                    ctr:ctr-1,
                    bal:bal-50,
                    show:true,
                })
            },1000)
        }else{
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
    }

    return <div className="bg-grad w-30 h-80 flx flx-col flx-jc-sa flx-ai-ce txt-wht p-20 fade-t pop">
        <h4 className="mas txt-al-ce">{head}</h4>

        <img src="./img/loseImg.png" alt="lose"/>
        <p className="lato w-80 txt-al-ce">{mes}</p>

        <div className="flx flx-jc-ce flx-ai-ce w-80">
            <p className="mas txt-wht">{bal.label}</p>
            <p className="lato txt-wht m-l-auto">{window.txt.currency}{stat.bal}</p>
        </div>

        <div className="flx flx-jc-ce flx-ai-ce w-80">
            <p className="mas txt-wht">{spins.label}</p>
            <p className="lato txt-wht m-l-auto">{stat.ctr}</p>
        </div>        

        <button className="mas btn btn-red" onClick={click}>{btn}</button>
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