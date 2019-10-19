$().ready(function(){
    $.getJSON("data.json",function(data){
        console.log(data);
        for(i in data.Kits)
        {
            $("#kits").html('<p>'+data.Kits[i].text+'</p>');
        }
        $("#img").html('<img class="kitRender hover-shadow" src="images/renders/'+data.Renders[0].name+'" >');
    });
});