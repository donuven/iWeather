$(document).ready(function(){

var lat;
var long;
var fTemp;
var cTemp;
$.getJSON("http://ip-api.com/json",function(data2){
  lat = data2.lat;
  long = data2.lon;
  
  var API_KEY='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID=e92158c058539c9090d3372e8ba82c47'
  $.getJSON(API_KEY,function(data){
    //JSON calling weather app
    // alert(data.coord.lat);
    var weatherType =data.weather[0].description;
      kTemp = data.main.temp;
    var city = data.name;
    var tempSwap = true;
    // Temperature in Kelvin
    fTemp = (kTemp*(9/5)-459.67).toFixed(1);
    // Temperature in Farenheight
    // City name
    
    if(fTemp > 80){
  $('body').css('background-image','url(http://7-themes.com/data_images/out/45/6924970-sunny-nature-pictures.jpg)');
}
 else if(fTemp > 40) {
    $('body').css('background-image','url(http://tipping-the-scales.com/wp-content/uploads/2015/02/reflected-sky.jpg)');
 }
   else if(fTemp < 30) {
      $('body').css('background-image','url(https://outlawmama.files.wordpress.com/2013/12/snow-tunnel-wallpaper-pintaw-hd-wallpapers-for-your-desktop-txilikxs.jpg)');
   }
   else if(fTemp >60){
     $('body').css('background-image','url(https://www.allabouthappylife.com/wallpaper/widescreen/beach/beach_life-dsc04511.jpg)');
   } 
    
    
    cTemp = (kTemp - 273).toFixed(1);
    $("#city").html(city)
    $("#weatherType").html(weatherType)
    $("#fTemp").html(fTemp+" &#8457;")
    $("#fTemp").click(function(){
      
      if (tempSwap===false){
        $("#fTemp").html(cTemp + "&#8451;");
        tempSwap = true;
        
      }
        else {
          $("#fTemp").html(fTemp+" &#8457;");
          tempSwap = false;
        }
    })
  

});

    
  });
  
});
  
});
