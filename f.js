  function updateLanguageOptions() {

    if (window.innerWidth<600)
      kt=0;
    else
      kt=1;
  }

  window.addEventListener("resize", updateLanguageOptions);


  var n10=1;
  var kt=window.innerWidth<600 ? 0 : 1;
  var v="foto";


  function nextfoto(){
    console.log('mira');
    if(kt==0){
      if(v=='foto'){
      n10++;
      if (n10>8){
        v='video';
          document.getElementsByTagName("video")[0].style.display="block";
          document.getElementById("q1").style.display="none";
        n10=1;
      }
      document.getElementById("q1").src=`${n10}.jpg`;
    }
    else{
      v='foto';
      n10=1;
       document.getElementsByTagName("video")[0].style.display="none";
          document.getElementById("q1").style.display="block";
              document.getElementById("q1").src=`${n10}.jpg`;
    }
  }
    else{
      if (v=="foto")
      {
        n10+=2;
        if(n10>8){
          document.getElementsByTagName("video")[0].style.display="block";
           document.getElementById("q1").style.display="none";
           document.getElementById("q2").style.display="none";           
            v="video";

        }
         document.getElementById("q1").src=`${n10}.jpg`;
          document.getElementById("q2").src=`${n10+1}.jpg`;
      }
      else{
        v="foto";
        n10=1;
          document.getElementsByTagName("video")[0].style.display="none";
           document.getElementById("q1").style.display="block";
           document.getElementById("q2").style.display="block"; 
                    document.getElementById("q1").src=`${n10}.jpg`;
          document.getElementById("q2").src=`${n10+1}.jpg`;  
      }
    }
  }
    function prevfoto(){
    console.log('mira');
       if(kt==0){
  if(v=='foto'){
      n10--;
      if (n10<1){
        v='video';
          document.getElementsByTagName("video")[0].style.display="block";
          document.getElementById("q1").style.display="none";
        n10=8;
      }
      document.getElementById("q1").src=`${n10}.jpg`;
    }
    else{
      v='foto';
      n10=8;
       document.getElementsByTagName("video")[0].style.display="none";
          document.getElementById("q1").style.display="block";
              document.getElementById("q1").src=`${n10}.jpg`;
    }
  }
    else{
       v="foto";
        n10=7;
          document.getElementsByTagName("video")[0].style.display="none";
           document.getElementById("q1").style.display="block";
           document.getElementById("q2").style.display="block"; 
                    document.getElementById("q1").src=`${n10}.jpg`;
          document.getElementById("q2").src=`${n10+1}.jpg`;  
    }
  }
   