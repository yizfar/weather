window.onload = function(){
  doApi("tel aviv");
  declareEvents();
  declareEvents2();
}
let flag = true;
const declareEvents = function(){
  let search_btn = document.querySelector("#search_btn");
  search_btn.addEventListener("click", function(){
    let input_val = document.querySelector("#id_input").value;
    flag=true;
    doApi(input_val)
  })
}

const declareEvents2 = function(){
  let  change_btn = document.querySelector("#dgree_change");
  change_btn.addEventListener("click", function(){
    let change_val = document.querySelector("#dgree_change").innerHTML;
    dgreeChange(change_val)
  })
}


const doApi =  function(_place){

  let url =  `https://api.openweathermap.org/data/2.5/weather?q=${_place}&appid=3069ae2718e40f8dc1998b7250e16f10&units=metric
  `
  let xhr = new XMLHttpRequest();
  xhr.open("GET",url);
  xhr.send();

  xhr.addEventListener("readystatechange", function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      let json_obj = JSON.parse(xhr.response);
      console.log(json_obj)
   
     showInfo(json_obj)                
      
      
    }

    else if (xhr.status == 404){
      if(flag==true){
        alert("plz enter correct name")
        flag=false;
      }
     
    }
   
  })
}

const showInfo = function(item){
  document.querySelector("#id_city").innerHTML = item.name;
  document.querySelector("#id_temp1").innerHTML = item.main.temp ;
  if(item.main.temp>20){}
  
  document.querySelector("#id_temp2").innerHTML =  " °C";
  document.querySelector("#id_wind").innerHTML = item.wind.speed + " kmh";
  document.querySelector("#id_condition").innerHTML = item.weather[0].description;

  document.querySelector("#id_img").src = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
}


const dgreeChange = function(change_val){
  if (change_val == "°F"){
    let cel = document.querySelector("#id_temp1").innerHTML;
    console.log(cel);
   let farnet= ( (cel * 9/5) + 32 )
  //  let farnet =farnet1.toFixt(2)
   document.querySelector("#id_temp1").innerHTML = farnet.toFixed(2);
   document.querySelector("#id_temp2").innerHTML =  "°F ";
   document.querySelector("#dgree_change").innerHTML= "°C";
  }else{
        let farnet = document.querySelector("#id_temp1").innerHTML;
       let cel=  (farnet  - 32 ) * 5/9 ;
       document.querySelector("#id_temp1").innerHTML = cel.toFixed(2);;
       document.querySelector("#id_temp2").innerHTML =  "°C";
       document.querySelector("#dgree_change").innerHTML= "°F";
  }
}


const pic = function(){

}
