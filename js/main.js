(function() {

  if($('#menu-affix').outerHeight() < $(window).outerHeight()) {

    $('#menu-affix').affix({
      offset: {
        top: 10,
        bottom: 150
      }
    })

  }

})();
