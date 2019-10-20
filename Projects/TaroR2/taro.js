$().ready(function(){
    $.getJSON("tarodata.json",function(data){
        console.log(data);
        
        //Bulding all the Kit listings
        for(i in data.Kits)
        {
            var num = i;
            num = parseInt(num)+parseInt(2);
            $("#kits").append('<h2>'+data.Kits[i].kitname+'</h2>');
            $("#kits").append('<img class="kitRender hover-shadow" onclick="openModal();currentSlide('+num+')" src="/Projects/TaroR2/images/renders/'+data.Kits[i].image.name+'" alt="'+data.Kits[i].image.alt+'">');
            $("#kits").append('<br>');
            $("#kits").append('<p>'+data.Kits[i].text+'</p>');
            $("#kits").append('<br>');
        }

        //Building the table of renders
        var table = "<table><tr>"
        for(i = 1; i < data.Renders.length; i++)
        {
            var num = i;
            num = parseInt(num)+parseInt(6);
            table+="<td>";
            table+='<img class="boardRender hover-shadow" onclick="openModal();currentSlide('+num+')" src="/Projects/TaroR2/images/renders/'+data.Renders[i].name+'" alt="'+data.Renders[i].alt+'">';
            table+="</td>";
            if(parseInt(i)%3 == 0)
            {
                table+="</tr>";
            }
        }
        table+="</tr></table>";
        $("#renderGallery").append(table);


        //Building the gallery
        var modalContent='<span class="close cursor" onclick="closeModal()">&times;</span><div class="modal-content">';
        var slideCount = data.Renders.length+data.Kits.length;

        modalContent+='<div class="mySlides">';
        modalContent+='<div class="numbertext"> 1 / ' + slideCount + '</div>';
        modalContent+='<img src="/Projects/TaroR2/images/renders/'+data.Renders[0].name+'" style="width:100%">';
        modalContent+='</div>';

        console.log(slideCount)
        for(i in data.Kits)
        {
            modalContent+='<div class="mySlides">';
            var slideNum = i;
            slideNum = parseInt(slideNum)+parseInt(2);
            modalContent+='<div class="numbertext">'+ slideNum + ' / ' + slideCount + '</div>';
            modalContent+='<img src="/Projects/TaroR2/images/renders/'+data.Kits[i].image.name+'" style="width:100%">';
            modalContent+='</div>';
        }
        for(i = 1; i < data.Renders.length; i++)
        {
            modalContent+='<div class="mySlides">';
            var slideNum = i;
            slideNum = parseInt(slideNum)+parseInt(6);
            modalContent+='<div class="numbertext">'+ slideNum + ' / ' + slideCount + '</div>';
            modalContent+='<img src="/Projects/TaroR2/images/renders/'+data.Renders[i].name+'" style="width:100%">';
            modalContent+='</div>';
        }

        //prev/next controls
        modalContent+='<a class="prev" onclick="plusSlides(-1)">&#10094;</a> <a class="next" onclick="plusSlides(1)">&#10095;</a>';
        
        //caption text
        modalContent+='<div class="caption-container"> <p id="caption"></p> </div>';

        //thumbnail image controls
        modalContent+='<div class="column">';
        modalContent+='<img class="demo" src="/Projects/TaroR2/images/renders/thumbs/'+data.Renders[0].thumbnail+'" onclick="currentSlide(1)" alt = "'+data.Renders[0].desc+'">';
        modalContent+='</div>';

        for(i in data.Kits)
        {
            modalContent+='<div class="column">';
            var slideNum = i;
            slideNum = parseInt(slideNum)+parseInt(2);
            modalContent+='<img class="demo" src="/Projects/TaroR2/images/renders/thumbs/'+data.Kits[i].image.thumbnail+'" onclick="currentSlide('+slideNum+')" alt="'+data.Kits[i].image.desc+'">';
            modalContent+='</div>';
        }
        for(i = 1; i < data.Renders.length; i++)
        {
            modalContent+='<div class="column">';
            var slideNum = i;
            slideNum = parseInt(slideNum)+parseInt(6);
            modalContent+='<img class="demo" src="/Projects/TaroR2/images/renders/thumbs/'+data.Renders[i].thumbnail+'" onclick="currentSlide('+slideNum+')" alt="'+data.Renders[i].desc+'">';
            modalContent+='</div>';
        }
        modalContent+='</div>';

        console.log(modalContent);
        $("#myModal").append(modalContent);

    });
});



