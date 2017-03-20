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
    
});
    

    $("#darthMaul").click(function(){
        $("#obiWan, #darthSidious, #lukeSkywalker").hide();
 

  });
});
