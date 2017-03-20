$(document).ready(function(){

   $("#obiWan").click(function(){
        $("#lukeSkywalker, #darthSidious, #darthMaul").hide();
        console.log("hello");
   });
    
   

    $("#lukeSkywalker").click(function(){
        $("#obiWan, #darthSidious, #darthMaul").hide();
   
      });
    

    $("#darthSidious").click(function(){
        $("#obiWan, #lukeSkywalker, #darthMaul").hide();
        $("#darthSidious").animate({"right":"170px"}, "slow");
    
});
    

    $("#darthMaul").click(function(){
        $("#obiWan, #darthSidious, #lukeSkywalker").hide();
        $("#darthMaul").animate({"right":"320px"}, "slow");
 

  });
});
