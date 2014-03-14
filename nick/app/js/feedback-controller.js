var FeedbackSection = function() {
	this.init();
};

FeedbackSection.prototype = {
	init: function() {
		//	this.renderSection();
	},

	renderSection: function() {
		var $width = $(window).width(),
			$height = $(window).height(),
			$originHeight = 750,
			$originTitleFontSize = 40,
			$curRatio = ($height < $width) ? ($height / $originHeight) : ($width / $originHeight),
			index = 0;

		for( ;index < 2; index++ )
		{
			$($('section').filter('#feedback')[index]).css({
					'height': 'auto',
					'padding-bottom': '20px'
				});

			$($('#main #feedback .feedback-title')[index]).css({
					'max-width': $width + 'px'
				});

			$($('#main #feedback .feedback-title h3')[index]).css({
				'font-size': $originTitleFontSize * $curRatio + 'px',
				'text-align': 'right'
			});
			$($('#main #feedback .feedback-title h3')[index]).css({
				'font-size': $originTitleFontSize * $curRatio + 'px'
			});
		}
	}
}