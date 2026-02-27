import {data} from "./API.js"


var objet=data();



function liste(Wheaterdata) {


    var hours = Wheaterdata.hourly.time;
    var listhours = [];

    for (let i = 0; i < 24; i++) {
        listhours.push(hours[i]);
    }

    return listhours;
}

function Wheatercode(Wheaterdata){
   

    var code = Wheaterdata.hourly.weather_code;

    var xeta= Wheaterdata.hourly.precipitation_probability;

    var listcode = [];
    var listxeta =[];

    for (let i = 0; i < 24; i++) {
        listcode.push(code[i]);
        listxeta.push(xeta[i])
    }

    return {listcode,listxeta};
}

function temperature(Wheaterdata){
    

    var code = Wheaterdata.hourly.temperature_2m;
    var listtemp = [];

    for (let i = 0; i < 24; i++) {
        listtemp.push(code[i]);
    }

    return listtemp;
}

function Sunset_Sunrise(Wheaterdata){
    var sunset=Wheaterdata.daily.sunset;
    var sunrise=Wheaterdata.daily.sunrise;
    return  [sunset,sunrise];
}


function jours(Wheaterdata){
      var listDays=[] 
      
    for(let i=0;i<7;i++){
        let dateObj=new Date(Wheaterdata.daily.time[i])
        listDays.push(dateObj.toLocaleDateString('fr-FR',{weekday:'long'}));
    }
    return listDays
      

}


function third_div(Wheaterdata){

    var temmax = Wheaterdata.daily.temperature_2m_max;
    var temmin = Wheaterdata.daily.temperature_2m_min;

 


    return {temmax,temmin};
}



export {liste,Wheatercode,temperature,Sunset_Sunrise,jours,third_div}