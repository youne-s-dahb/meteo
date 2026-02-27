
function data(){
                    var xhr=new XMLHttpRequest();

                    var lat;
                    var lon;

                    const showPosition = (position) => {
                        lat = position.coords.latitude;
                        lon = position.coords.longitude;

                        xhr.open('GET',`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
                        xhr.send();
                    }

                    navigator.geolocation.getCurrentPosition(showPosition);
                    
                    return xhr;

}
export {data};