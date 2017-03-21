$(document).ready(function(){


//YOUR CHARACTER functions (Need functions for situations where main character is chosen)

    // CHARACTER #1 = OBI-WAN ---  main character functions
   $("#obiWan").click(function(){  //Obi-Wan event listener
        $("#lukeSkywalker, #darthSidious, #darthMaul").hide();//hide unpicked main characters
        console.log("hello"); //just checking things 
        $("#obiWanEnemy").css({"display": "none"});//hide main character in enemy section
        $("#enemiesAvailable").css({ "visibility": "visible", "margin-left": "-10%"});//make unpicked characters visible in enemy section
        $("#lukeSkywalkerEnemy, #darthSidiousEnemy, #darthMaulEnemy").css({"border":"red 10px solid"}); //place red border around enemy characters     

   }); // close of Obi-Wan main character functions

   // CHARACTER #2 = LUKE SKYWALKER --- main character functions
   $("#lukeSkywalker").click(function(){ // Luke Skywalker event listener
        $("#obiWan, #darthSidious, #darthMaul").hide(); //hide unpicked main characters 
        $("#lukeSkywalkerEnemy").css({"display": "none"});//hide main character in enemy section
        $("#enemiesAvailable").css({ "visibility": "visible"});//make unpicked characters visible in enemy section
        $("#obiWanEnemy, #darthSidiousEnemy, #darthMaulEnemy").css({"border":"red 10px solid"}); //place red border around enemy characters     
        $("#darthSidiousEnemy").animate({"right":"170px"}, "slow");
        $("#darthMaulEnemy").animate({"right":"175px"}, "slow");
   }); // close of Luke Skywalker main character functions
     
   // CHARACTER #3 = DARTH SIDIOUS --- main character functions
    $("#darthSidious").click(function(){
        $("#obiWan, #lukeSkywalker, #darthMaul").hide(); //hide unpicked main characters
        $("#darthSidiousEnemy").css({"visibility": "hidden"});//hide main character in enemy section
        $("#enemiesAvailable").css({ "visibility": "visible"});//make unpicked characters visible in enemy section
        $("#obiWanEnemy, #lukeSkywalkerEnemy, #darthMaulEnemy").css({"border":"red 10px solid"}); //place red border around enemy characters     
        $("#darthMaulEnemy").animate({"right":"175px"}, "slow");
        $("#lukeSkywalkerEnemy").animate({"right":"6px"}, "slow");
        $("#darthSidious").animate({"right":"166px"}, "slow");
   }); // close of Darth Sidious main character functions
  

   // CHARACTER #4 = DARTH MAUL --- main character functions             
    $("#darthMaul").click(function(){
        $("#obiWan, #darthSidious, #lukeSkywalker").hide();
        $("#darthMaulEnemy").css({"visibility": "hidden"});//hide main character in enemy section
        $("#enemiesAvailable").css({ "visibility": "visible"});//make unpicked characters visible in enemy section
        $("#obiWanEnemy, #lukeSkywalkerEnemy, #darthSidiousEnemy").css({"border":"red 10px solid"}); //place red border around enemy characters     
        $("#lukeSkywalkerEnemy").animate({"right":"4px"}, "slow");
        $("#darthSidiousEnemy").animate({"right":"7px"}, "slow");
        $("#darthMaul").animate({"right":"321px"}, "slow");
   }); // close of Darth Maul main character functions

    ///////////////////////////////////////////////////////////////////////////////////
    // ENEMIES AVAILABLE TO ATTACK functions (set up all scenarios when defender is chosen)
    $("")





        
 

  }); //document.ready function close

