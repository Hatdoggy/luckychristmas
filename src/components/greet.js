import { useEffect,useState} from "react";
import CountUp,{useCountUp } from 'react-countup';

const {head,greet,mes,congrats} = window.txt.main;
const {mes1,mes2,max} = congrats;

const PopUp = () => {
    return <div className="flx flx-jc-ce flx-ai-ce p-20 bg-grad w-80 h-10">
        <p className="mas txt-drk txt-al-ce">{head}</p>
    </div>
}

const Body = (props)=>{

    return <div className="flx flx-col flx-jc-sa flx-ai-ce p-20 bg-grad h-80 w-80">
        <img src="./imgEaster/mainGreet.png" alt="mainGreet" className="w-50"/>
        <h4 className="mas txt-drk txt-al-ce">{greet}</h4>
        <p className="lato txt-drk txt-al-ce">{mes}</p>
    </div>
}

const Greet = (props)=>{

    const {stat,set} =props;

    return <section className="flx flx-col flx-jc-sa flx-ai-ce h-100 w-50 fade-t">
        <PopUp/>
        <Body stat={stat} set={set}/>
    </section>
}

export {Greet}