var content="",error="",xhr=new XMLHttpRequest,buildQuote=function(e){content+=_.sample(e.salutation)+" ",content+=_.sample(e.bastards)+" of the ",content+=_.sample(e.internet)+"."};xhr.open("GET","data/vocabulary.json",!0),xhr.onload=function(){if(xhr.status>=200&&xhr.status<400){buildQuote(JSON.parse(xhr.responseText)),document.getElementById("quote").innerHTML=content}else error="Whoops! Something went wrong. Please try again.",document.getElementById("datelist-error").innerHTML=error},xhr.onerror=function(){error="Whoops! We couldn't reach the server. Please try again.",document.getElementById("datelist-error").innerHTML=error},xhr.send();