$().ready(function(){
    $.getJSON("data.json",function(data){
        console.log(data);
        $("#img").html('<img src="'+data.Renders[0].name+'" >');
    });
});