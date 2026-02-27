
function data(){
                    var xhr=new XMLHttpRequest();
                    var xhr2=new XMLHttpRequest();
                    var lat;
                    var lon;

                    const showPosition = (position) => {
                        lat = position.coords.latitude;
                        lon = position.coords.longitude;

                        xhr2.open('GET',`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
                        xhr2.send();

                        xhr.open('GET',`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability,weather_code,uv_index,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=auto`)
                        xhr.send();
                    }

                    navigator.geolocation.getCurrentPosition(showPosition);
                    
                    return [xhr,xhr2];

}
export {data};

