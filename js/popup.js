$(document).ready(function () {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "http://art-nouveau-studio.ru/blog", true);
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) 
        {
            if (xhr.responseText) 
            {
                var data = xhr.responseText;

                var last_video = $('.blog-item-title-wrapper', data).children('.blog-item');
                var title = last_video.children('.blog-item-title-wrapper').children('.blog-item-title').html();
                var par = last_video.children('.blog-item-title-wrapper').children('.blog-item-body').html();
                var dat =  $('.col-sm-10:first', data).children('a').html();
          		 var img = $('.parallax-img ', data).attr('src');
                var href = $('a.btn-blog-more', data).attr('href');
         		var link = '<a href="http://art-nouveau-studio.ru/' + href + '" target="_blank"> Подробнее</a>'
                // var imgg = '<img src="'+img'"/>';
                var imgg = '<img  src="http://art-nouveau-studio.ru/'  + img + '"/>';
                $('#link').html(link);
                $('#title').html(title);
                $('#par').html(par);
                $('#dat').html(dat);
                $('#img').html(imgg);

            }
        }
    }
});

$(window).load(function() {
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});
 console.log(dat)

 