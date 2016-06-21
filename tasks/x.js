(function ($) {
    Drupal.behaviors.fixupHeight = {
        attach: function () {
            $(document).ready(function () {
                // Fix column heights on page load


                // Fix sidebar height on page load

                if ($(window).width() > 767) {
                    $("#sidebar-wrapper").outerHeight($("#content-wrapper").outerHeight());
                } else {
                    $("#sidebar-wrapper").height('auto');
                }

            });
            $(window).resize(function () {
                // Fix column heights on window resize

                // Fix sidebar height on window resize

                if ($(window).width() > 767) {
                    $("#sidebar-wrapper").outerHeight($("#content-wrapper").outerHeight());
                } else {
                    $("#sidebar-wrapper").height('auto');
                }

                // Fix sidebar height on AJAX completion

                $(document).ajaxComplete(function () {
                    if ($(window).width() > 767) {
                        $("#sidebar-wrapper").outerHeight($("#content-wrapper").outerHeight());
                    } else {
                        $("#sidebar-wrapper").height('auto');
                    }
                });

            });
        }
    };
    Drupal.behaviors.defaultMisc = {
        attach: function () {

            var slideshowOffset;

            function resetSlideshowSize(slideshowElements) {
                slideshowElements.forEach(function (slideshowElement) {
                    windowWidth = $(window).width();
                    windowHeight = $(window).height();
                    slideshowOffset = $(slideshowElement).offset().top;
                    windowHeight = windowHeight - slideshowOffset;
                    $(slideshowElement).css({
                        'width': windowWidth,
                        'min-width': windowWidth,
                        'max-width': windowWidth,
                        'height': windowHeight,
                        'min-height': windowHeight,
                        'max-height': windowHeight
                    });
                });
            }

            $(document).ready(function () {

                //
                // Using visible and animate, we'll automate the whole
                // system to get items in motion. Presently works for one
                // specific target for infinite times.
                //
                // This is dependent on animate.css being installed,
                // and having the visible jquery plugin available.
                //
                // For further instructions and implementation, see
                // the AISC website which contains everything you need.
                //

                var enableAnimation = false;
                var wiggleElement = '#sidebar-promo .header';
                var wiggleCount = 0;
                var triggerInfinite = false;
                var animatedClass = 'animated';
                var infiniteClass = 'infinite';
                var animationClass = 'rubberBand';
                var animateDelay = 5000;
                if (enableAnimation === true) {
                    setInterval(function () {
                        if ($(wiggleElement).visible(true)) {
                            $(wiggleElement).each(function () {
                                $(this).addClass(animatedClass);
                                $(this).addClass(animationClass);
                                if (triggerInfinite === true) {
                                    $(this).addClass(infiniteClass);
                                }
                            });
                            wiggleCount += 1;
                            setTimeout(function () {
                                $(wiggleElement).removeClass(animationClass);
                                $(wiggleElement).removeClass(animatedClass);
                                if (triggerInfinite === true) {
                                    $(wiggleElement).removeClass(infiniteClass);
                                }
                            }, 1000);
                        }
                        else {
                            $(this).removeClass(animatedClass);
                            $(this).removeClass(animationClass);
                            if (triggerInfinite === true) {
                                $(this).removeClass(infiniteClass);
                            }
                        }
                    }, animateDelay);
                }

            });

            //
            // Full page slider, still working out the nuts and bolts...
            //
            // Sets any targetable item $(slideshowElement) to take up the same space as the document viewport.
            // This will work for any item, but logic still needs to come...
            //

            $(".field-slideshow-image-rendered-background").each(function () {
                if ($(this).data("image")) {
                    var background = "url('" + $(this).data('image') + "')";
                    $(slideshowElement).css({
                        "background-image": background
                    });
                }
            });

            var windowWidth = $(window).width();
            var windowHeight = $(window).height();
            var slideshowElements = [
                $(".field-slideshow-image-rendered-background"),
                $(".views_slideshow_cycle_slide"),
                $(".top-bar-container")
            ];

            // $(document).ready()
            resetSlideshowSize(slideshowElements);

            $(window).resize(function () {
                resetSlideshowSize(slideshowElements);
            });
        }
    }
}(jQuery));