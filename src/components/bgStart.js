import { useState,useEffect } from "react"
import { hideBg ,delay,short} from "../func";

const {start} = window.txt;

export const BgGrn = (props)=>{
    
    const {set} = props;
    const [show, setShow] = useState(false)
    const [load,setLoad] = useState(false)

    useEffect(() => {
        setTimeout(async()=>{
            await short();
            setShow(true)
            await delay();
            set(true)
        },1000)
    }, [])

    return <div className="h-vh pos-rel flx flx-jc-ce flx-ai-ce startBg over-hide">

        {show?
            <div className="flx flx-col flx-jc-ce flx-ai-ce w-100 h-100 fade z-top strt fade">
                <h2 className="mont txt-wht w-30 txt-al-ce fade brd-ln m-b-2">{window.txt.load}</h2>
                <img src="./imgSa/travel.png" alt="intro" className="w-20 gift fade"/>
                <h2 className="mont txt-wht w-30 txt-al-ce fade">{window.txt.loadMes}</h2>
            </div>
            :
            <div className="flx flx-col h-100 flx-jc-ce flx-ai-ce">
                <img src="./imgSa/img1.png" alt="cnd1" className="fade-r"/>
                <img src="./imgSa/img2.png" alt="cnd2" className="fade-l m-t-2 m-b-2"/>
                <img src="./imgSa/img3.png" alt="cnd3" className="fade-r"/>
            </div>
        }



    </div>
}