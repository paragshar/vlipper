var SpeedSection = function() {
	this.init();
}

SpeedSection.prototype = {
	init: function() {
		//	this.renderSection();
	},

	renderSection: function() {
		var $width = $(window).width(),
			$height = $(window).height(),
			$originHeight = 806,
			$originWidth = 2570,
			$originContentWidth = 1030,
			$originTitleMarginTop = 88,
			$originTitleHeight = 268,
			$originTitleFontSize = 36,
			$originDescFontSize = 18,
			$originTesterContainerWidth = 330,
			$originTesterWidth = 460,
			$originTesterHeight = 303,
			$sectionHeight = $height - $($('div').filter('#header')[0]).height() - 10,
			$curSectionRatio = $sectionHeight / $originHeight;

		$($('section').filter('#speed')[0]).css({
				'height': $sectionHeight + 'px',
				'background-size': 'cover'
			});

		$($('#speed .content')[0]).css({
				'padding-top': $originTitleMarginTop * $curSectionRatio + 'px',
				'max-width': $originContentWidth * $curSectionRatio + 'px'
			});

		$($('#speed .content .speed-text')[0]).css({
				'height': $originTitleHeight * $curSectionRatio + 'px'
			});

		$($('#speed .content .speed-text .title')[0]).css({
			'font-size': $originTitleFontSize * $curSectionRatio + 'px'
		});

		$($('#speed .content .speed-text .description')[0]).css({
			'font-size': $originDescFontSize * $curSectionRatio + 'px'
		});

		$($('#speed .content .speed-tester')[0]).css({
				'height': $originTesterContainerWidth * $curSectionRatio + 'px'
			});

		$($('#speed .content .speed-tester .unotelly')[0]).css({
				'width': $originTesterWidth * $curSectionRatio + 'px',
				'float': 'left',
				'max-width': ($width - 20) / 2 + 'px'
			});

		$($('#speed .content .speed-tester .competitor')[0]).css({
				'width': $originTesterWidth * $curSectionRatio + 'px',
				'float': 'right',
				'max-width': ($width - 20) / 2 + 'px'
			});
	}
}