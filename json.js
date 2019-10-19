$().ready(function(){
    $.getJSON("data.json",function(data){
        console.log(data);
        $("#img").html(data[Renders[0].name]);
    });
});