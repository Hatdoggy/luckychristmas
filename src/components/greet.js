const {head,greet,mes,congrats} = window.txt.main;

const PopUp = () => {
    return <div className="flx flx-jc-ce flx-ai-ce p-20 bg-grad w-80 h-10">
        <p className="mont txt-wht txt-al-ce">{head}</p>
    </div>
}

const Body = (props)=>{

    return <div className="flx flx-col flx-jc-sa flx-ai-ce p-20 bg-grad h-80 w-80">
        <img src="./imgClove/greet.png" alt="jackpot" className="w-80"/>
        <h4 className="mont txt-wht txt-al-ce">{greet}</h4>
        <p className="lato txt-wht txt-al-ce">{mes}</p>
        <p className="mont txt-wht txt-al-ce">{congrats}</p>
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