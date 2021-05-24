// Instantiate MixItUp:
// Check parent container exists
var initMixItUp = document.getElementById("carwash-menu-container");

if (initMixItUp) {
    var MixItUpContainer = document.querySelector('.carwash-menu');
    var mixer = mixitup(MixItUpContainer, {
        animation: {
            effects: 'fade scale stagger(50ms)' // Set a 'stagger' effect for the loading animation
        },
        load: {
            filter: 'none' // Ensure all targets start from hidden (i.e. display: none;)
        },
        controls: {
            toggleLogic: 'and'
        }
    });

    // Add a class to the container to remove 'visibility: hidden;' from targets. This
    // prevents any flickr of content before the page's JavaScript has loaded.
    MixItUpContainer.classList.add('mixitup-ready');
    // Show all targets in the container
    mixer.show()
        .then(function () {
            // Remove the stagger effect for any subsequent operations
            mixer.configure({
                animation: {
                    effects: 'fade scale'
                }
            });
        });
}
// Scroll to Container
(function ($) {
    // Same height column content
    $('.package-content').matchHeight();
    $('.package-card').matchHeight();
    $('.package-logo').matchHeight();
    //$('.package-one-time-price').matchHeight();
    $('.carwash_services_main').matchHeight();
    
    var timeout = null;
    
    if($(".carwash-menu").length) {
        $("button.control").on('click', function () {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                // Scroll to menu container minus 240px offset
                $('html,body').animate({
                        scrollTop: $(".carwash-menu").offset().top - 240
                    },
                    'slow');
            }, 250);
        });
    }
    
    $.fn.matchHeight._update();
    
    // Set Package Details Name
    $('.package-details-button button').click(function() {
        var targetParent = $(this).attr('data-filter');
        
        var currentPackageTitle = $(targetParent).find('h4.package-title').text();

        $('.carwash-menu-title span').remove();
        $('.carwash-menu-title').prepend('<span>' + currentPackageTitle + ' </span>');
    });
}(jQuery));
