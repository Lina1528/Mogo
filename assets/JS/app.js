$(function(){

    let header = $("#header"),
        introH =$("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();



        /*Fixed HEADER*/
    checkScroll(scrollOffset)

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    })


    function checkScroll(scrollOffset){
        if(scrollOffset >= introH){
            header.addClass("header-fixed");
        } else{
            header.removeClass(" header-fixed");
        }
    }

        /*Smooth scroll*/
        $("[data-scroll]").on("click", function(event){
            event.preventDefault();
            let $this = $(this),
                blockID = $this.data("scroll"),
                blockOffset = $(blockID).offset().top;
            $("nav a").removeClass("active");
            $this.addClass("active");

            $("html, body").animate({
                scrollTop: blockOffset
            }, 500)
        });


        /*NAV Toggle*/
        $("#nav-toggle").on("click", function(event){
            event.preventDefault();
            $(this).toggleClass("active");
            $("#nav").toggleClass("active");
        });


        /*Collapse*/
        $("[data-collapse]").on("click", function(event){
            event.preventDefault();
            let $this = $(this),
                blockID = $this.data("collapse");
                $this.toggleClass("active")
        })


        /*Slider*/
        $("[data-slider]").slick({
            Infinity: true,
            fade: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        })

});