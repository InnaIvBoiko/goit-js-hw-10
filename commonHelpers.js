import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as t,i as o}from"./assets/vendor-77e16229.js";const i=document.querySelector("input#datetime-picker"),s=document.querySelector("button[data-start]"),a={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0])}};t("input#datetime-picker",{options:a});s.addEventListener("click",()=>{const e=Date.now();new Date(i.value).getTime()>e?console.log('Hello, it"s all ok'):o.show({message:"Please choose a date in the future",messageColor:"#fff",messageSize:"18px",backgroundColor:"#ef4040",iconUrl:"../img/error.svg",position:"topRight",close:!1,timeout:3e3})});
//# sourceMappingURL=commonHelpers.js.map
