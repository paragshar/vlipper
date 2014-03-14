var OndemanSection = function() {
	this.init();
};

OndemanSection.prototype = {
	init: function() {
		//renderSection();
	},

	renderSection: function() {
		var $width = $(window).width(),
			$height = $(window).height(),
			$originHeight = 1017,
			$originWidth = 2570,
			$originTitleMarginTop = 210,
			$originTitleFontSize = 42,
			$originDescH6FontSize = 20,
			$originDescLiFontSize = 18,
			$originSloganFontSize = 24,
			$originSloganMarginBottom = 25,
			$sectionHeight = $height - $($('div').filter('#header')[0]).height() - 10,
			$curSectionRatio = $sectionHeight / $originHeight;

		$($('section').filter('#onDemand')[0]).css({
				'height': $sectionHeight + 'px',
				'background-size': 'cover',
				'margin-bottom': '-20px'
			});

		$($('#onDemand .container')[0]).css({
				'padding-top': $originTitleMarginTop * $curSectionRatio + 'px',
				'text-align': 'center'
			});

		$($('#onDemand .container .row')[0]).css({
				'padding-top': '0'
			});

		$($('#onDemand .container .row div')[0]).css({
				'padding-top': '0'
			});

		$($('#onDemand .container .row div .title')[0]).css({
				'font-size': $originTitleFontSize * $curSectionRatio + 'px'
			});

		$($('#onDemand .container .row div h6')[0]).css({
				'font-size': $originDescH6FontSize * $curSectionRatio + 'px',
				'margin-top': 20 * $curSectionRatio + 'px',
				'line-height': 26 * $curSectionRatio  + 'px'
			});

		$($('#onDemand .container .row div .onDemands-items')[0]).css({
				'padding-top': 20 * $curSectionRatio + 'px',
				'padding-bottom': 5 * $curSectionRatio + 'px'
			});

		$($('#onDemand .container .row div .onDemands-items li')[0]).css({
				'font-size': $originDescLiFontSize * $curSectionRatio + 'px',
				'background-size': $originDescLiFontSize * $curSectionRatio + 'px',
				'background-position': '0 center'
			});

		$($('#onDemand .container .row div .onDemands-items li')[1]).css({
				'font-size': $originDescLiFontSize * $curSectionRatio + 'px',
				'background-size': $originDescLiFontSize * $curSectionRatio + 'px',
				'background-position': '0 center'
			});

		$($('#onDemand .container .row div .onDemands-items li')[2]).css({
				'font-size': $originDescLiFontSize * $curSectionRatio + 'px',
				'background-size': $originDescLiFontSize * $curSectionRatio + 'px',
				'background-position': '0 center'
			});

		$($('#onDemand .container .row div .slogan')[0]).css({
				'font-size': $originSloganFontSize * $curSectionRatio + 'px',
				'margin-bottom': $originSloganMarginBottom * $curSectionRatio + 'px'
			});

		$($('#onDemand .container .row .learn-more-orange-button')[0]).css({
			'margin-top': '0',
			'margin-bottom': 30 * $curSectionRatio + 'px'
		})
	}
}