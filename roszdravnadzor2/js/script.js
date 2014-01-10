$( document ).ready(function() {

    $(".fontsize").click(function(){                
        $("body").css("font-size", $(this).attr("proc")+"%");
    });

    function hide_show_img(what) {
        $('img').each(function(){            
            $(this).css("display", (what == 0?"none":"inline") );
        });
    }

    $(".sb_change").click(function(){        
        $("#sv_link").remove();
        if ($(this).attr("theme") == 'orig') {
            $("body").css("font-size", "14px");
            hide_show_img(1);
        } else {
            $("body").css("font-size", "150%");
            $('head').append('<link id="sv_link" href="css/style_' + $(this).attr("theme") + '.css" rel="stylesheet">');
            hide_show_img(0);
        }                
    });        

});