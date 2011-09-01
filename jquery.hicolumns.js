(function($){
	$.fn.hiColumns = function(options){
		var defaults = {
			select: 'th',
			klass: 'highlighted'
		},
		options = $.extend({}, defaults, options);

		return this.each(function(){
			var elem = $(this);

			$(options.select, this).hover(
				function(){
					var i = $(this).index();

					elem.find('td').filter(function(){
						return $(this).index() == i;
					}).addClass(options.klass);
				},
				function(){
					elem.find('.' + options.klass).removeClass(options.klass);
				}
			)
		})
	}
})(jQuery);