(function($) {
  $.fn.jqqr = function(options) {
    options = $.extend({
      needle:   'default',
      haystack: 'default'
    }, options);

    $(this).each(function() {
      alert('buttfor')
    });
  }
})(jQuery);

