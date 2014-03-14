var MapSection = function() {
	this.init();
}

MapSection.prototype = {
	init: function() {
		//	this.renderSection();
	},

	renderSection: function() {
		var $width = $(window).width(),
			$height = $(window).height(),
			$originHeight = 1229,
			$originWidth = 2570,
			$originContentWidth = 1672,
			$originTitleMarginTop = 70,
			$originTitleFontSize = 50,
			$originTextHeight = 400,
			$originDescFontSize = 18,
			$originMapWidth = 1680,
			$originMapHeight = 800,
			$sectionHeight = $height - $($('div').filter('#header')[0]).height() - 10,
			$curSectionRatio = $sectionHeight / $originHeight;

		$($('section').filter('#map')[0]).css({
				'height': $sectionHeight + 'px',
				'background-size': 'cover'
			});

		$($('#map .map-text')[0]).css({
			'padding-top': $originTitleMarginTop * $curSectionRatio + 'px',
			'height': $originTextHeight * $curSectionRatio
		});

		$($('#map .map-text .title')[0]).css({
			'font-size': $originTitleFontSize * $curSectionRatio + 'px'
		});

		$($('#map .map-text .description')[0]).css({
			'font-size': $originDescFontSize * $curSectionRatio + 'px'
		});

		$($('#map .map-img')[0]).css({
			'width': $originMapWidth * $curSectionRatio + 'px',
			'height': $originMapHeight * $curSectionRatio + 'px',
			'margin': '0 auto',
			'max-width': $width + 'px',
			'background-size': '100%'
		})
	}
}