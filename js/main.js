(function() {

  if($('#menu-affix').outerHeight() < $(window).outerHeight()) {

    $('#menu-affix').affix({
      offset: {
        top: 10,
        bottom: 150
      }
    });

    $(window).on('scroll', function(e) {
      if (($('body').scrollTop() + $(window).height()) - $('body').height() < -150)
        $('.affix-bottom').removeClass('affix-bottom');
    });

  }

})();
