const submitBtn=document.getElementById('submitBtn')
const cityname=document.getElementById('cityName')
const city_name=document.getElementById('city_name')
const temp_status=document.getElementById('temp_status')
const temp=document.getElementById('temp')
const datahide=document.querySelector('.middle_layer')


const getInfo= async(event)=>{
    event.preventDefault();
    let cityVal=cityname.value
    if(cityVal===""){
        city_name.innerText= `please enter the city name`
        datahide.classList.add('data_hide')
    }
    else{
        try{
            let Url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=f73f09118eb630e4a2c13f1aa93625c1`
            const response= await fetch(Url)
            const data = await response.json()
            const arrData=[data]
            console.log(arrData) 

            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
            temp.innerText= arrData[0].main.temp/10  
            // temp_status.innerText=arrData[0].weather[0].main

            const tempMood = arrData[0].weather[0].main

            if (tempMood === "Clear") {

                temp_status.innerHTML ="<i class='fas fa-sun' style='color: #eccc68;'></i>";
                
                } else if (tempMood === "Clouds") {
                
                temp_status.innerHTML ="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
                
                } else if (tempMood === "Rain") {
                
                    temp_status.innerHTML =  "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
               
                
                } else {
            temp_status.innerHTML ="<i class='fas fa-cloud' style='color:#eccc68;'></i>";
                
                }
                datahide.classList.remove('data_hide')
             
        }
        catch{
            city_name.innerText= `please enter valid city name`
            datahide.classList.add('data_hide')
        }
    }
}
submitBtn.addEventListener('click',getInfo)



