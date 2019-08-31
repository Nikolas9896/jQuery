// Check Off Specific Todos By Clicking
$("ul").on("click","li",function(){
   $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500, function(){ // ($this) = span .parent() = li remove span with parent element
        $(this).remove(); // ($this) = li
    }); 
    event.stopPropagation(); // stop bubbeling algorithm for parent elements(tags ul, div, body..)
    
});
//Add new todo
$("input[type='text']").keypress(function(event){

   if(event.which === 13)// 13 - it's code of ENTER key
   {
       //grabbing new todo text from input
      var todoText = $(this).val();
      // clear input  
      $(this).val("");
      // create new li and add to ul
     
     $("ul").append("<li><span>X</span> " + todoText + "</li>");
   }

});