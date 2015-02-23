(function( $ ){ 
    $(document).ready(function(){
        $('.lightbox').click(function(e) { 
            $('body').css('overflow-y', 'hidden'); 
            
            $('<div id="overlay"></div>')
                .css('top', $(document).scrollTop())
                .css('opacity', '0')
                .animate({'opacity': '0.5'}, 'slow')
                .appendTo('body');
              
            $('<div id="lightbox"></div>')
                .hide()
                .appendTo('body');

            $('<img src="images/lightbox.jpg" />')
                .load(function() {
                    positionLightboxImage();
                })
                .click(function() {
                    removeLightbox();
                })
                .appendTo('#lightbox');

           
            
            /*if (($('a').hasClass('lightbox')).length>0 ) {//if img exist
                
                $('<img>',{
                    src:$(this).attr('href'),
                    load:function(){
                        positionLightboxImage();
                    },
                    click:function(){
                        removeLightbox();
                    }

                }).appendTo('#lightbox');

            }
            else{

                $('<img src="images/lightbox.jpg" />')
                .load(function() {
                    positionLightboxImage();
                })
                .click(function() {
                        removeLightbox();
                })
                .appendTo('#lightbox');
            };*/

          
            return false;
        });
    });

    function positionLightboxImage() {
        var top = ($(window).height() - $('#lightbox').height()) / 2;
        var left = ($(window).width() - $('#lightbox').width()) / 2;
        $('#lightbox')
            .css({
                'top': top,
                'left': left
            })
            .fadeIn();
    }

    function removeLightbox() {
        
            $('#overlay, #lightbox')
            .fadeOut('slow', function() {
                    $(this).remove();
                    $('body').css('overflow-y', 'auto'); 
               
            });
        
    }

 })( jQuery );
