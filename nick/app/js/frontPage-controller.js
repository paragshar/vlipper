var FrontPageSection = function() {
	this.init();
};

FrontPageSection.prototype = {
	init: function() {
		//	this.renderSection();
	},

	renderSection: function() {
		var $width = $(window).width(),
			$height = $(window).height();
			$($('section').filter('#geoBlocks')[0]).css({
					'height': $height + 'px',
					'background-size': 'cover'
				});

		$($('div').filter('.geoContent')[0])
			.css(
				'margin', 
				($($('section').filter('#geoBlocks')[0]).height() -//$height - 
					$($('input').filter('.trans-scroll-down-button')[0]).height() * 1.5 - 
					$($('div').filter('.geoContent')[0]).height()) / 2 + 'px 0');
	}
};