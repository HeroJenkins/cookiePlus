/*!
 * jQuery cookiePlus Plugin
 * https://github.com/herojenkins/cookieplus
 * https://gametastic.eu/cookiePlus
 *
 * Copyright 2015, HeroJenkins
 */
$(document).ready(function() {
  
  if(getCookie("cookiePlus") == "true"){
         $('.cookiePBar').toggle();		
  }
  
});

$(function() {
      $(".cookiePBtn").click( function()
      {
        disablePBar();
      }
      );
});

function disablePBar(){
   $('.cookiePBar').fadeOut();	
   setCookie();	
}

function cookieTime(days, hour) { 
    var now = new Date();  
    var time = now.getTime(); 
    var future = time + (((days * 24) + hour)
                        * 3600 * 1000);   
    now.setTime(future); 
    var haltbarkeit = now.toUTCString();  
    return haltbarkeit; 
  } 
  
function setCookie(){
	document.cookie = "cookiePlus = true; expires=" 
                    + cookieTime(365, 0);
};

function getCookie(name){
  var data    = document.cookie.split(";");
    var cookies = {};
    for(var i = 0; i < data.length; ++i) {
      var tmp = data[i].split("=");
      cookies[tmp[0]] = tmp[1];
    }
   
    if (name) {
      return (cookies[name] || null);
    } else {
      return cookies;
    }
  };
