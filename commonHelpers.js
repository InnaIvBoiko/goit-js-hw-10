import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-77e16229.js";const f="/goit-js-hw-10/assets/error-abf165dd.svg",s=document.querySelector("input#datetime-picker"),t=document.querySelector("button[data-start]");t.disabled=!0;l("input#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const o=Date.now();new Date(e).getTime()-o>0?t.disabled=!1:(t.disabled=!0,m.show({message:"Please choose a date in the future",messageColor:"#fff",messageSize:"18",backgroundColor:"#ef4040",iconUrl:f,position:"topRight",close:!1,timeout:3e3}))}});t.addEventListener("click",()=>{const e=setInterval(()=>{const o=Date.now(),n=new Date(s.value).getTime()-o;n<0?(clearInterval(e),s.disabled=!1):h(n)},1e3);t.disabled=!0,s.disabled=!0});function h(e){const c=a(Math.floor(e/864e5)),d=a(Math.floor(e%864e5/36e5)),i=a(Math.floor(e%864e5%36e5/6e4)),u=a(Math.floor(e%864e5%36e5%6e4/1e3));document.querySelector("span[data-days]").innerHTML=c,document.querySelector("span[data-hours]").innerHTML=d,document.querySelector("span[data-minutes]").innerHTML=i,document.querySelector("span[data-seconds]").innerHTML=u}function a(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
