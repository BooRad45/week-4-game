$(document).ready(function(){


//YOUR CHARACTER functions (Need functions for situations where main character is chosen)

    // CHARACTER #1 = OBI-WAN ---  main character functions
    ///////////////////////////////////////////////////////////////////////
   $("#obiWan").click(function(){  //Obi-Wan event listener
        $("#lukeSkywalker, #darthSidious, #darthMaul").hide();//hide unpicked main characters
        console.log("hello"); //just checking things 
        $("#obiWanEnemy").css({"display": "none"});//hide main character in enemy section
        $("#enemiesAvailable").css({ "visibility": "visible", "margin-left": "-12%"});//make unpicked characters visible in enemy section
        $("#lukeSkywalkerEnemy, #darthSidiousEnemy, #darthMaulEnemy").css({"border":"red 10px solid"}); //place red border around enemy characters     

   }); // close of Obi-Wan main character functions

   // CHARACTER #2 = LUKE SKYWALKER --- main character functions
   //!! Need function to slide enemy characters together and float left
   $("#lukeSkywalker").click(function(){ // Luke Skywalker event listener
        $("#obiWan, #darthSidious, #darthMaul").hide(); //hide unpicked main characters 
        $("#lukeSkywalkerEnemy").css({"display": "none"});//hide main character in enemy section
        $("#enemiesAvailable").css({ "visibility": "visible"});//make unpicked characters visible in enemy section
        $("#obiWanEnemy, #darthSidiousEnemy, #darthMaulEnemy").css({"border":"red 10px solid"}); //place red border around enemy characters     
        $("#darthSidiousEnemy").animate({"right":"170px"}, "slow");
        $("#darthMaulEnemy").animate({"right":"175px"}, "slow");
   }); // close of Luke Skywalker main character functions
     
   // CHARACTER #3 = DARTH SIDIOUS --- main character functions
   //!! Need function to slide enemy characters together and float left
    $("#darthSidious").click(function(){
        $("#obiWan, #lukeSkywalker, #darthMaul").hide(); //hide unpicked main characters
        $("#darthSidiousEnemy").css({"visibility": "hidden"});//hide main character in enemy section
        $("#enemiesAvailable").css({ "visibility": "visible"});//make unpicked characters visible in enemy section
        $("#obiWanEnemy, #lukeSkywalkerEnemy, #darthMaulEnemy").css({"border":"red 10px solid"}); //place red border around enemy characters     
       
   }); // close of Darth Sidious main character functions
          
      
    $("#darthMaul").click(function(){
        $("#obiWan, #darthSidious, #lukeSkywalker").hide();
        $("#darthMaulEnemy").css({"visibility": "hidden"});//hide main character in enemy section
        $("#enemiesAvailable").css({ "visibility": "visible"});//make unpicked characters visible in enemy section
        $("#obiWanEnemy, #lukeSkywalkerEnemy, #darthSidiousEnemy").css({"border":"red 10px solid"}); //place red border around enemy characters     
   }); // close of Darth Maul main character functions





        
 

  }); //document.ready function close

