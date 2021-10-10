function myFunction() {
        
        document.getElementById("home").hidden=false;
       

      var d = new Date();
      var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
      var c= (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
      document.getElementById("demo").innerHTML ="Time in IST: " + d + " || Visitor TimeZone:GMT " + c;
    }

    function myFunction1(a) {
        if(a==1) {
            document.getElementById("home").hidden=false;
        document.getElementById("area_1").hidden=true;
        document.getElementById("area_2").hidden=true;
        document.getElementById("area_3").hidden=true;
      
        }
    
    if(a==2) {
     
        document.getElementById("home").hidden=true;
        document.getElementById("area_1").hidden=false;
        document.getElementById("area_2").hidden=true;
        document.getElementById("area_3").hidden=true;
    }
    if(a==3) {
     
     document.getElementById("home").hidden=true;
     document.getElementById("area_1").hidden=true;
     document.getElementById("area_2").hidden=false;
     document.getElementById("area_3").hidden=true;
 }
 if(a==4) {
     
     document.getElementById("home").hidden=true;
     document.getElementById("area_1").hidden=true;
     document.getElementById("area_2").hidden=true;
     document.getElementById("area_3").hidden=false;
 }
         

        

      
    
    }


