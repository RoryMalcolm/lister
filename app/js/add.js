$("#addlink").click(function(){ 
    $("#add").toggleClass("active");
    if ($("#add").hasClass("active")){
        $("#addlink").text("close");
        $("#linkin").focus();
    }
    else{
        $("#addlink").text("add");
    }
});
$("#editlink").click(function(){ 
    $("#login").toggleClass("active");
    if ($("#login").hasClass("active")){
        $("#editlink").text("close");
        $("#keyin").focus();
    }
    else{
        $("#editlink").text("edit");
    }
});
$("#clearbutt").click(function(){
    clearform();
    loadPosts();
});

function clearform(){
    $('#thumbnail').css('background-image', 'none');
    $(".cc").show();
    $("#linkin").val("");
    $("#titlein").val("");
}