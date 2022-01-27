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
        <div className="p-20 bg-grn flx flx-jc-ce flx-ai-ce fade-t brd w-50 headCom pos-rel">
            <h4 className="txt-wht txt-al-ce mont">{head}</h4>
            <Exit click={click}/>
        </div>
        <div className="w-80 flx flx-jc-sa flx-ai-ce flx-wrp fade-t comCont">
            {comments.map((elem,ndx)=>(
                <div key={ndx} className={`comment w-30 h-50 m-t-2 m-b-2 flx flx-jc-ce flx-ai-ce p-20 brd ${ndx%2 === 0? "m-r-2 m-l-2 bg-wht":" bg-grn"}`}>
                    <img src={elem.src} alt={elem.alt} className="w-30"/>
                    <div className="flx flx-col flx-jc-sa w-70 m-l-5">
                        <p className={`mont txt-al-l ${ndx%2 === 0 ?"txt-grn":"txt-wht"}`}>{elem.name}</p>
                        <small className={`lato txt-al-l ${ndx%2 === 0 ?"txt-grn":"txt-wht"}`}>{elem.time}</small>
                        <p className={`lato txt-al-l ${ndx%2 === 0 ?"txt-grn":"txt-wht"}`}>{elem.mes}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export {Comments}