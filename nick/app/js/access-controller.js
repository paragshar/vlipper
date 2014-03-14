var UnlimitedAccessAndBandWidthSection = function() {
	this.width = 0;
	this.height = 0;
	this.initSection();
};

UnlimitedAccessAndBandWidthSection.prototype = {
	initSection: function() {
		this.renderSection();
	},

	renderSection: function() {

		var $width = $(window).width(),
			$height = $(window).height(),
			$sectionOriginHeight = 1169,
			$sectionOriginWidth = 2570,
			$containerOriginWidth = 1320,
			$sectionOriginInfoHeight = 294,
			$imageOriginHeight = 690,
			$imageOriginWidth = 920,
			$scrollDownButtonContainerOriginHeight = 140,
			$sectionTitleOriginMarginTop = 53,
			$sectionTitleOriginFontSize = 46,
			$sectionDescOriginFontSize = 16,
			$sectionHeight = $height - $($('div').filter('#header')[0]).height() - 10,
			$curSectionRatio = $sectionHeight / 1169;

		$($('section').filter('#unlimitedAccess')[0]).css({
				'height': $sectionHeight + 'px',
				'background-size': 'cover'
			});

		$($('div').filter('.access-container')[0]).css({
				'width': $containerOriginWidth * $curSectionRatio + 'px',
				'max-width': $width + 'px',
				'margin': $sectionTitleOriginMarginTop * $curSectionRatio + 'px auto 0 auto'
			});

		$($('div').filter('.access-info')[0]).css({
				'height': $sectionOriginInfoHeight * $curSectionRatio + 'px',
				'overflow': 'hidden'
			});

		$($('#main #unlimitedAccess .flow-chart')[0]).css({
				'max-width': $width + 'px'
			});

		$($('#unlimitedAccess .access-container .title')[0]).css({
				'font-size': $sectionTitleOriginFontSize * $curSectionRatio + 'px'
			});

		$($('#unlimitedAccess .access-container .description')[0]).css({
				'width': '100%',
				'font-size': $sectionDescOriginFontSize * $curSectionRatio + 'px'
			});

		// $($(''))
		$($('#unlimitedAccess .access-container .flow-chart')).css({
				'height': $imageOriginHeight * $curSectionRatio + 'px',
				'width' : $imageOriginWidth * $curSectionRatio + 'px',
				'margin': '0 auto'
			});

		$($('#unlimitedAccess .access-container .flow-chart img')).css({
				'height': '100%',
				'width' : '100%'
			});

		// $scrollDownButtonMarginTop = $sectionHeight -
		// 		$($('section').filter('#unlimitedAccess')[0]).css('padding-top').toString().substr(0, $($('section').filter('#unlimitedAccess')[0]).css('padding-top').length()) -
		$($('#unlimitedAccess .access-container .trans-scroll-down-button')[0]).css({
				'margin-top': 40 * $curSectionRatio + 'px' //($scrollDownButtonContainerOriginHeight - 30) / 2 + 'px'
			});
	}
}