import { Exit } from "./exit";

const {comment} = window.txt

const Comments = (props)=>{

    const {set} = props;
    const {comments,head} = comment;

    const click = ()=>{
        let com = document.querySelector('.comments');
        com.classList.add("fade-out")
        setTimeout(() => {
            set(false)
        }, 300);
    }

    return <div className="comments flx flx-jc-ce flx-ai-ce flx-col bg-pop fade pos-abs z-top h-100">
        <div className="p-20 bg-red flx flx-jc-ce flx-ai-ce fade-t brd w-50 headCom pos-rel">
            <h2 className="txt-wht txt-al-ce mas">{head}</h2>
            <Exit click={click}/>
        </div>
        <div className="w-80 flx flx-jc-sa flx-ai-ce flx-wrp fade-t comCont">
            {comments.map((elem,ndx)=>(
                <div key={ndx} className={`comment w-30 h-50 m-t-2 m-b-2 flx flx-jc-ce flx-ai-ce brd ${ndx%2 === 0? "m-r-2 m-l-2 bg-red":" bg-grn"}`}>
                    <img src={elem.src} alt={elem.alt} className="w-10"/>
                    <div className="flx flx-col flx-jc-sa w-70 m-l-5">
                        <p className="mas txt-wht txt-al-l">{elem.name}</p>
                        <small className="lato txt-wht txt-al-l">{elem.time}</small>
                        <p className="lato txt-wht txt-al-l">{elem.mes}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export {Comments}