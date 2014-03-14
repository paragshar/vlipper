var PressReviewSection = function() {
	this.init();
};

PressReviewSection.prototype = {
	init: function() {
		//	this.renderSection();
	},

	renderSection: function() {
		var $width = $(window).width(),
			$height = $(window).height(),
			$originHeight = 1137,
			$originWidth = 2570,
			$originContentWidth = 1200,
			$originTitleFontSize = 54,
			$originDescFontSize = 40,
			$originLogoHeight = 85,
			$sectionHeight = $height - $($('div').filter('#header')[0]).height() - 10,
			$curSectionRatio = $sectionHeight / $originHeight;

		$($('section').filter('#pressReviews')[0]).css({
				'height': $sectionHeight + 'px',
				'padding-top': ($sectionHeight - $($('#pressReviews .content')[0]).height()) / 2 + 'px'
			});

		$($('#pressReviews .content .title')[0]).css({
			'font-size': $originTitleFontSize * $curSectionRatio + 'px'
		});

		$($('#main #pressReviews .content img')[0]).css({
				'height': $originLogoHeight * $curSectionRatio + 'px'
			});
		$($('#main #pressReviews .content img')[1]).css({
				'height': $originLogoHeight * $curSectionRatio + 'px'
			});
		$($('#main #pressReviews .content img')[2]).css({
				'height': $originLogoHeight * $curSectionRatio + 'px'
			});
		$($('#main #pressReviews .content img')[3]).css({
				'height': $originLogoHeight * $curSectionRatio + 'px'
			});

		$($('#main #pressReviews .content .description')[0]).css({
				'padding-left': 40 * $curSectionRatio + 'px'
			});
		$($('#main #pressReviews .content .description')[1]).css({
				'padding-left': 40 * $curSectionRatio + 'px'
			});
		$($('#main #pressReviews .content .description')[2]).css({
				'padding-left': 40 * $curSectionRatio + 'px'
			});
		$($('#main #pressReviews .content .description')[3]).css({
				'padding-left': 40 * $curSectionRatio + 'px'
			});

		// $($('#pressReviews .content')[0]).css({
		// 	'width': $originContentWidth * $curSectionRatio + 'px'
		// })
	}
}