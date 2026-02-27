import { data } from "./API.js";

import {liste,Wheatercode,temperature,Sunset_Sunrise,jours,third_div} from "./traiter.js";


var objet=data()


//____________________________________API ville__________________________________________________________

objet[0].onload=()=> {
var Wheaterdata=JSON.parse(objet[0].response)


  var date=new Date()
    
    

    var lis=liste(Wheaterdata);
    var code=Wheatercode(Wheaterdata);
    var tem=temperature(Wheaterdata);
    var [sunsetTime,sunriseTime]=Sunset_Sunrise(Wheaterdata)
    var {temmax,temmin}=third_div(Wheaterdata);
    var jr=jours(Wheaterdata)



    //****************Header*************** */
    var data=JSON.parse(objet[1].response)
    var city=data.address.city||data.address.town||data.address.village|| "lien inconnue"
    document.getElementById("ville").textContent=city
    // h1 f header
    document.querySelector("#temp").textContent=Wheaterdata.current.temperature_2m+"°C"
    // h3 f header 
    document.querySelector("#Feels").innerHTML = `${Wheaterdata.current.temperature_2m}°  Ressenti comme ${Wheaterdata.current.apparent_temperature}°<br>${new Date(Wheaterdata.current.time).toLocaleString('fr-FR', { weekday: 'long'}).toUpperCase()} ${date.getHours()}:${date.getMinutes()}`;
    //verifier is day or not
    if(Wheaterdata.current.is_day==0){
                document.querySelector("body").style.background="linear-gradient(to top, #0f2027, #203a43, #2c5364)";
               var star=document.querySelectorAll("i")[0]
               var star1=document.querySelectorAll("i")[1]
               star.className="fa-solid fa-star"
               star.style.color="white"
               star.style.textShadow="3px 3px 10px black"
               star1.className="fa-solid fa-star"
               star1.style.color="white"
               star1.style.textShadow="3px 3px 10px black"
    }
    //*************************************** */



    //*****************First partie********************** */
   var hours=[];
   
    const codes = { 
        0: { icon: "fa-solid fa-sun", color: "#FFD700" }, 
        1: { icon: "fa-solid fa-cloud-sun", color: "#FFC300" }, 
        2: { icon: "fa-solid fa-cloud-sun", color: "#FFB347" }, 
        3: { icon: "fa-solid fa-cloud", color: "#B0C4DE" }, 
        45:{ icon: "fa-solid fa-smog", color: "#A9A9A9" }, 
        61:{ icon: "fa-solid fa-cloud-rain", color: "#1E90FF" }
     }
  

    var column=document.querySelector(".column");
    for(let i=0;i<lis.length;i++){
        hours=lis[i].split("T")
        column.innerHTML+=` <div class="KOLXY"> <p><b>${hours[1]}</b></p>${codes[code.listcode[i]]?`<i class="${codes[code.listcode[i]].icon}" style="color:${codes[code.listcode[i]].color}"></i>`:``}<p>${tem[i]}°C</p><div><i class="fa-solid fa-droplet" id="xeta"></i><br>  <span>${code.listxeta[i]}%</span> </div></div>  `
        
    }
    //***************************************************** */


    //*****************second partie********************** */

        for(let i=0;i<7;i++){
            
             document.querySelector(".jrs").innerHTML+=`<p><b>${jr[i]}</b> </p>`
            document.querySelector(".temax").innerHTML+=`<p>Max :<span>${temmax[i].toFixed(2)} </span> ° C</p>`
            document.querySelector(".temin").innerHTML+=`<p>Min  :<span>${temmin[i].toFixed(2)} </span>° C</p>`
        }
        
       



    //*************************************************** */


    //*****************third partie********************** */
        var sun= sunsetTime[0].split("T")
        var sunr=sunriseTime[0].split("T")
        document.querySelector("#Sunrise").textContent=sunr[1];
        document.querySelector("#Sunset").textContent=sun[1];


     //************************************************** */



    
    // console.log(Wheaterdata)



  

}

objet[0].onerror= ()=> {
     console.log("Error api !!!!")
}

objet[0].onloadstart = () => {
    const loaderContainer = document.querySelector('.load');
    
    
    Object.assign(loaderContainer.style, {
        display: "flex",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        zIndex: "9999",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    });

    loaderContainer.innerHTML = `
        <div id="loading-screen" style="text-align: center;">
            <dotlottie-wc 
                src="https://lottie.host/814b3a7f-4cab-43b4-bc64-0700c4f93e6d/ETQz7UXjtL.lottie" 
                style="width: 250px; height: 250px;" 
                autoplay 
                loop>
            </dotlottie-wc>
            <p style="font-family: sans-serif; font-weight: bold; font-size: 1.2rem; color: #333;">
                Loading ...
            </p>
        </div>
    `;
};

objet[0].onloadend = () => {
    document.querySelector(".load").style.display = "none";
};

