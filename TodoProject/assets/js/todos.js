// Check Off Specific Todos By Clicking
$("li").click(function(){
   $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){ // ($this) = span .parent() = li remove span with parent element
        $(this).remove(); // ($this) = li
    }); 
    event.stopPropagation(); // stop bubbeling algorithm for parent elements(tags ul, div, body..)
    
});
//Add new todo
$("input[type='text']").keypress(function(event){

   if(event.which === 13)
   {
       //grabbing new todo text from input
      var todoText = $(this).val();
        $(this).val("");
      // create new li and add to ul
     
     $("ul").append("<li><span>X</span> " + todoText + "</li>");
   }

});