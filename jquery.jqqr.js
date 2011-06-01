(function($){
    $.fn.jqqr = function(options) {
        return this.each(function(){
          
          var ch1 = $(this).html();
          $(this).html('');
          
          var dimensions = $(this).attr('rel').split('x');
          
          $(this).append('<img src="http://chart.apis.google.com/chart?cht=qr&chs='+dimensions[0]+'x'+dimensions[1]+'&chl='+ch1+'">')
        });
    };
}(jQuery));