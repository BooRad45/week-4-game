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
        $('#lukeSkywalker').on('click change', function() {
        $(this).data('clicked', true);
});

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

    ////////////////////////////////////////////////////////////////////////////////////////
    // ENEMIES AVAILABLE TO ATTACK functions (set up all scenarios when defender is chosen)
    ////////////////////////////////////////////////////////////////////////////////////////
      //ObiWan YourCharacter and LukeSkywalker Defender
    $("#lukeSkywalkerEnemy").click(function(){
        $("#lukeSkywalkerEnemy").css({"display": "none"});//hide main character in enemy section
        $("#lukeSkywalkerDef").css({ "visibility": "visible", "border": "black 10px solid"});//make Luke visible in defender section
        $("#lukeSkywalkerDef").animate({"right":"95%"}, "slow"); // align Luke left
        $("#darthSidiousEnemy").animate({"right":"91%"}, "slow");
        $("#darthMaulEnemy").animate({"right":"91%"}, "slow");
    }); //close of Luke Skywalker enemy functions

    //ObiWan YourCharacter and Darth Sidious Defender
    $("#darthSidiousEnemy").click(function(){
        $("#darthSidiousEnemy").css({"display": "none"});//hide main character in enemy section
        $("#darthSidiousDef").css({ "visibility": "visible", "border": "black 10px solid"});//make D. Sidious visible in defender section
        $("#darthSidiousDef").animate({"right":"195%"}, "slow"); // align Darth Sidious left
        // $("#lukeSkywalkerEnemy").animate({"right":"10%"}, "slow");
        $("#darthMaulEnemy").animate({"right":"95%"}, "slow");
    }); //close of Darth Sidious enemy functions

    //ObiWan YourCharacter and Darth Maul Defender
    $("#darthMaulEnemy").click(function(){
        $("#darthMaulEnemy").css({"display": "none"});//hide main character in enemy section
        $("#darthMaulDef").css({ "visibility": "visible", "border": "black 10px solid"});//make Darth Maul visible in defender section
        $("#darthMaulDef").animate({"right":"292%"}, "slow"); // align Darth Sidious left
        // $("#lukeSkywalkerEnemy").animate({"right":"10%"}, "slow");
        // $("#lukeSkywalkerEnemy").animate({"right":"95%"}, "slow");
    }); //close of Darth Maul enemy functions

    //Luke Skywalker YourCharacter and Obi-Wan Defender
    $("#obiWanEnemy").click(function(){
        $("#obiWanEnemy").css({"display": "none"});//hide main character in enemy section
        $("#obiWanDef").css({ "visibility": "visible", "border": "black 10px solid"});//make ObiWan visible in defender section
        $("#darthSidiousEnemy").animate({"right":"200%"}, "slow"); 
        $("#darthMaulEnemy").animate({"right":"200%"}, "slow");
        // $("#lukeSkywalkerEnemy").animate({"right":"95%"}, "slow");
    }); //close of ObiWan enemy functions

    //Luke Skywalker YourCharacter and Darth Sidious Defender
    $("#darthSidiousEnemy").click(function(){
        $("#darthSidiousEnemy").css({"display": "none"});//hide main character in enemy section
        $("#darthSidiousDef").css({ "visibility": "visible", "border": "black 10px solid"});//make ObiWan visible in defender section
        // $("#darthSidiousEnemy").animate({"right":"200%"}, "slow"); 
        if ($("#lukeSkywalkerEnemy").css("display") == "none") { 
            $("#darthMaulEnemy").animate({"right":"197%"}, "slow");

        // $("#lukeSkywalkerEnemy").animate({"right":"95%"}, "slow");
    } //close of Darth Sidious enemy functions
  });










        
 

  }); //document.ready function close

