$(".upvote").click(function(){
    event.preventDefault();
    $(this).closest('.trackwrap').removeClass("down");
    $(this).closest('.trackwrap').addClass("up");
    $(this).delay(700).queue(function(){
        $(this).closest('.trackwrap').removeClass("up");
        $(this).dequeue();
    });
});
$(".downvote").click(function(){
    event.preventDefault();
    $(this).closest('.trackwrap').removeClass("up");
    $(this).closest('.trackwrap').addClass("down");
    $(this).delay(700).queue(function(){
        $(this).closest('.trackwrap').removeClass("down");
        $(this).dequeue();
    });
});