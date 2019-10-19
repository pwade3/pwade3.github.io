$().ready(function(){
    $.getJSON("data.json",function(data){
        console.log(data);
        for(i in data.Kits)
        {
            var num = i;
            num = parseInt(num)+parseInt(2);
            $("#kits").append('<h2>'+data.Kits[i].kitname+'</h2>');
            $("#kits").append('<img class="kitRender hover-shadow" onclick="openModal();currentSlide('+num+')" src="images/renders/'+data.Kits[i].image.name+'" alt="'+data.Kits[i].image.alt+'">');
            $("#kits").append('<p>'+data.Kits[i].text+'</p>');
            $("#kits").append('<br>');
        }

        $("#renderGallery").append("<table><tr>");
        for(i in data.Renders)
        {
            var num = i;
            num = parseInt(num)+parseInt(7);
            $("#renderGallery").append("<td>");
            $("#renderGallery").append('<img class="boardRender hover-shadow" onclick="openModal();currentSlide('+num+')" src="images/renders/'+data.Renders[i].name+'" alt="'+data.Renders[i].alt+'">');
            $("#renderGallery").append("</td>");
            if(parseInt(i)%3 == 0)
            {
                $("#renderGallery").append("</tr>");
            }
        }
        $("#renderGallery").append("</tr></table>");

    });
});