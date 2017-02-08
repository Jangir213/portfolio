(function ($) {

  $(window).on('load', function () {
    navChanged();
    scrollSmooth();
    particlesJS.load('promo', './js/particleconfig.json');
    typewriter.type(function () {
      typewriter2.type(function () {
        showSocials();
      });
    });
  });

  function navChanged() {
    var $navLinks = $('.nav__link');

    $navLinks.each(function () {
      var $this = $(this);
      var id = $this.attr('href');
      var $section = $(id);

      $section.scrollex({
        mode: 'middle',
        top: '10vh',
        bottom: '-10vh',

        enter: function () {
          $this.addClass('active');
        },

        leave: function () {
          $this.removeClass('active');
        }
      });

    });

  }

  function scrollSmooth() {
    $('.nav__items').on('click', 'a', click);
    $('.promo').on('click', 'a', click);

    function click(event) {
      var id = $(this).attr('href');
      var top = $(id).offset().top;

      event.preventDefault();
      $('body,html').animate({ scrollTop: top }, 1500);
    }
  }

  function showSocials() {
    $('.promo__socials').css({
      'opacity': '1'
    });
  }

  var typewriter = new Typewriter('.promo__name', {
    text: 'Jahangir Hussain',
    interval: 100
  });

  var typewriter2 = new Typewriter('.promo__description', {
    text: 'Front-end developer',
    interval: 100
  });


})(jQuery);