function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + "=" + "(.+?)(&|$)").exec(window.location.search) || [
      ,
      null,
    ])[1] || ""
  );
}

let subid = getURLParameter("subid");
let subid2 = getURLParameter("subid2");
let firstname = getURLParameter("firstname");
let surname = getURLParameter("surname");
let city = getURLParameter("city");
let zipcode = getURLParameter("zipcode");
let address = getURLParameter("address");
let phone = getURLParameter("phone");
let mobile = getURLParameter("mobile");
let pid = getURLParameter("pid");
let nrp = getURLParameter("nrp");

let ffdomain = "https://" + getURLParameter("ffdomain");
let session = getURLParameter("session");
let fluxf = getURLParameter("fluxf");
let fluxffn = getURLParameter("fluxffn");

function ActionRedirect(action) {
  window.location.replace(
    ffdomain +
      "/?flux_action=" +
      action +
      "&flux_f=" +
      fluxf +
      "&flux_ffn=" +
      fluxffn +
      "&flux_sess=" +
      session
  );
}

const hideBg = ()=>{
    let bg = document.querySelector('.startBg');

    bg.style.opacity = "0";
    bg.classList.remove('fade')
    bg.classList.add('fade-out')
    
    return new Promise (res=>{
        setTimeout(res,500)
    })
}

const delay = ()=>{
  return new Promise(res=>{
    setTimeout(res,2000)
  })
}


function spin() {
  let wheel = document.querySelector("#spinner");
  let ret = undefined;

  switch (window.count) {
    case 1:
      console.log("Here")
      wheel.classList.add("spinAround");
      ret = new Promise((res) => {
        setTimeout(res, 7000);
      });
      break;
    case 2:
      wheel.classList.add("spinAround2");
      ret = new Promise((res) => {
        setTimeout(res, 7000);
      });
      break;
    case 3:
      wheel.classList.add("spinAround3");
      ret = new Promise((res) => {
        setTimeout(res, 7000);
      });
      break;      
    default:
      wheel.classList.add("spinAround4");
      ret = new Promise((res) => {
        setTimeout(res, 7000);
      });
      break;  
  }
  window.count++;
  return ret;
}

export {ActionRedirect,hideBg,spin,delay}