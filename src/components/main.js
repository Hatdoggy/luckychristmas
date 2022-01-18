import { Greet } from "./greet"
import { Svg } from "./svg"
import { useState,useEffect} from "react"
// import { three } from "../three";

const Terms = ()=>{

    const {terms} = window.txt;

    return <small className="lato w-80 txt-al-ce txt-wht">
        {terms}
    </small>
}

const Main = (props)=>{

    const {stat,set,mobile,mob,setCom} = props;

    // useEffect(() => {
    //     three();
    // }, [])

    const showCom = ()=>{
        setCom(true);
    }

    return mobile?
        mob?
        <Greet stat={stat} set={set}/>    
        :
        <div className="flx flx-col flx-jc-sa flx-ai-ce h-100">
            <div className="w-80 flx flx-jc-strt flx-ai-ce fade-t">
                <img src="./brand/comments.svg" alt="comments" className="w-10 cursor com fade-l" onClick={showCom}/>
            </div>
            <Svg stat={stat} set={set}/>
            <Terms/>
        </div>
    :
    <main className="w-100 h-100 flx flx-jc-ce flx-ai-ce">
        <div className="flx flx-col flx-jc-ce flx-ai-ce h-100 w-50">
            <div className="w-80 flx flx-jc-strt flx-ai-ce">
                <img src="./brand/comments.svg" alt="comments" className="w-10 cursor com fade-l" onClick={showCom}/>
            </div>
            <Svg stat={stat} set={set}/>
            <Terms/>
        </div>
        <Greet stat={stat} set={set}/>
    </main>
}

export {Main}