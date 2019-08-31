// Check Off Specific Todos By Clicking
$("li").click(function(){
    $(this).css({
        color: "gray",
        textDecoration: "line-through"
    });

});