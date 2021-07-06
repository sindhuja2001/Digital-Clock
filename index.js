function digitalClock(){
    var date= new Date();
    var h= date.getHours();    //0 to 23
    var m= date.getMinutes();  //0 to 59
    var s= date.getSeconds();  // 0 to 59

    var session= "AM";

    h= (h< 10)? "0" + h : h;
    m= (m< 10)? "0" + m : m;
    s= (s< 10)? "0" + s : s;

    if(h== 0){
        h= 12;
    }
    if(h > 12){
        //h= h- 12;
        session= "PM";
    }


    var time= h+ ":" + m + ":" + s+ " "+ session;
   document.getElementById("digital__clock").innerHTML= time;  //Won't work in firefox
    document.getElementById("digital__clock").textContent= time;  //Won't work in IE

    //starts as soon it run if we use setTimeout()
    setTimeout(digitalClock, 1000);
}

//Start after 1000 milli seconds if we use setInterval()
//setInterval(digitalClock, 1000);
digitalClock();