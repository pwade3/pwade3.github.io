$().ready(function(){
    $.getJSON("data.json",function(data){
        console.log(data);
        for(i in data.Kits)
        {
            $("#kits").append('<h2>'+data.Kits[i].name+'</h2>');
            $("#kits").append('<img class="kitRender hover-shadow" onclick="openModal();currentSlide('+i+1+')" src="image/renders/'+data.Kits[i].image.name+'">');
            $("#kits").append('<p>'+data.Kits[i].text+'</p>');
        }
    });
});