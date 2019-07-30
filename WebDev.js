https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today
function NA(){
  var q1 = "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today";
  p1 = new XMLHttpRequest();
  p1.open('GET', query, true);
  p1.onload = processNA;
  p1.send();
}

function processNA(){
  if (p1.readyState != 4){
    return;
  }
  if (p1.readyState === 200 || p1.responseText === ""){
    alert("ERROR");
    return;
  }

  var p1info = JSON.parse(p1.responseText);

  var rise = p1info[0].latlng[0];
  var set = p1info[0].latlng[1];
  );
}

window.onload.init
