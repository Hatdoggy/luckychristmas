import { spin } from "../func";

export const Svg = (props)=>{

    const {stat,set} = props;
    const {ctr,bal} = stat;

    const click = async()=>{
        
        await spin()
        setTimeout(()=>{
            set({
                ...stat,
                show:true,
                bal:bal-50,
                ctr:ctr-1,
                clk:false
            })
            let btn = document.querySelector('#spinBtn');
            btn.classList.remove('pulse');
            btn.style.transform = "scale(1)";
        },1000)
    }

    return (
<div className="pos-rel w-80 fade-l h-100 flx flx-jc-ce flx-ai-ce">
    <img src="./imgAus/spinner.png" alt="wheel" id="spinner" className="w-100 pos-abs z-bg"/>
    <img src="./imgAus/btn.png" alt="wheel" id="spinBtn" className="cursor pulse" onClick={stat.clk?click:undefined}/>
</div>
    )
}