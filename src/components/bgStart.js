import { useState,useEffect } from "react"
import { hideBg ,delay} from "../func";

const {start} = window.txt;

export const BgGrn = (props)=>{
    
    const {set} = props;
    const [show, setShow] = useState(false)
    const [load,setLoad] = useState(false)

    useEffect(() => {
        setTimeout(async()=>{
            setShow(true)
            await delay();
            setShow(false)
            setLoad(true)
            await delay();
            await hideBg();
            set(true)
        },1000)
    }, [])

    return <div className="h-vh pos-rel bg-img2 flx flx-jc-ce flx-ai-ce startBg over-hide">
        <img src="./img/topHide.png" alt="top" className="pos-abs top fade-t"/>
            {show&&<h1 className="mas txt-wht w-30 txt-al-ce fade">{start}</h1>}
            {load&&
                <div className="flx flx-col flx-jc-ce flx-ai-ce w-100 h-100 fade z-top">
                    <img src="./img/christ7.png" alt="gift" className="w-5 gift"/>
                    <h4 className="mas txt-wht w-30 txt-al-ce fade">{window.txt.load}</h4>
                </div>
            }
        <img src="./img/hideMe.png" alt="bot" className="pos-abs bot fade-b"/>
    </div>
}