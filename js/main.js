(function() {

  if($('#menu-affix').parent().outerHeight() < $(window).outerHeight()) {

    $('#menu-affix').affix({
      offset: {
        top: 0,
        bottom: 80
      }
    });

    $(window).on('scroll', function(e) {
      if (($('body').scrollTop() + $(window).height()) - $('body').height() < -150)
        $('.affix-bottom').removeClass('affix-bottom');
    });

  }

})();
