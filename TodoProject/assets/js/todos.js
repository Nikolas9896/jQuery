// Check Off Specific Todos By Clicking
$("li").click(function(){
    if($(this).css("color") === "rgb(128, 128, 128)")
    {
        $(this).css({
            color: "rgb(0, 0, 0)",
            textDecoration: "none"
        });
    }
    else
    {
        $(this).css({
            color: "rgb(128, 128, 128)",
            textDecoration: "line-through"
        });
    }

});