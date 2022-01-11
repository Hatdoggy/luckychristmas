import { useState,useEffect } from "react"
import { hideBg ,delay} from "../func";

const {start} = window.txt;

export const BgGrn = (props)=>{
    
    const {set} = props;
    const [show, setShow] = useState(false)
    const [load,setLoad] = useState(false)

    useEffect(() => {
        setTimeout(async()=>{
            await delay();
            set(true)
        },1000)
    }, [])

    return <div className="h-vh pos-rel bg-red flx flx-jc-ce flx-ai-ce startBg over-hide">
        <img src="./brand/intro-coles.png" alt="coles-t" className="top pos-abs fade-r"/>
        <img src="./brand/intro-coles.png" alt="coles-b" className="bot pos-abs fade-l"/>

        <div className="flx flx-col flx-jc-ce flx-ai-ce w-100 h-100 fade z-top strt">
            <img src="./brand/intro.png" alt="intro" className="w-50 gift fade"/>
            <h4 className="mont txt-wht w-30 txt-al-ce fade">{window.txt.load}</h4>
        </div>

    </div>
}