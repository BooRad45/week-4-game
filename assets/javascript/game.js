$(document).ready(function(){


//YOUR CHARACTER functions (Need functions for situations where main character is chosen)

    // CHARACTER #1 = OBI-WAN ---  main character functions
    ///////////////////////////////////////////////////////////////////////
   $("#obiWan").click(function(){  //Obi-Wan event listener
        $("#lukeSkywalker, #darthSidious, #darthMaul").hide();//hide unpicked main characters
        console.log("hello"); //just checking things 
        $("#obiWanEnemy").css({"visibility": "hidden"});//hide main character in enemy section
        $( "#enemiesAvailable" ).css({ "visibility": "visible"});//make unpicked characters visible in enemy section
        $("#lukeSkywalkerEnemy, #darthSidiousEnemy, #darthMaulEnemy").css({"border":"red 10px solid"}); //place red border around enemy characters     
   }); // close of Obi-Wan main character functions

   // CHARACTER #2 = LUKE SKYWALKER --- main character functions
   //!! Need function to slide enemy characters together and float left
   $("#lukeSkywalker").click(function(){ // Luke Skywalker event listener
        $("#obiWan, #darthSidious, #darthMaul").hide(); //hide unpicked main characters 
        $("#lukeSkywalkerEnemy").css({"visibility": "hidden"});//hide main character in enemy section
        $( "#enemiesAvailable" ).css({ "visibility": "visible"});//make unpicked characters visible in enemy section
        $("#obiWanEnemy, #darthSidiousEnemy, #darthMaulEnemy").css({"border":"red 10px solid"}); //place red border around enemy characters     
   }); // close of Luke Skywalker main character functions
     
   // CHARACTER #3 = DARTH SIDIOUS --- main character functions
   //!! Need function to slide enemy characters together and float left
    $("#darthSidious").click(function(){
        $("#obiWan, #lukeSkywalker, #darthMaul").hide();
        $("#darthSidious").animate({"right":"170px"}, "slow");
    
});
    

    $("#darthMaul").click(function(){
        $("#obiWan, #darthSidious, #lukeSkywalker").hide();
        $("#darthMaul").animate({"right":"320px"}, "slow");
 

  });
});
