$().ready(function(){
    $.getJSON("data.json",function(data){
        console.log(data);
        $("#img").html('<img src="images/renders/'+data.Renders[0].name+'" >');
    });
});