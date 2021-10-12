$(document).ready(function(){
    $(".more").hide();
    $(".show_hide").click(function(){
        event.stopImmediatePropagation();
        var index = $(".show_hide").index(this);
        $(this).text($(this).text() == 'Read More' ? 'Read Less' : 'Read More'); 
        $(".more").eq(index).toggle();
    });
  });