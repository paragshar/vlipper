var PricePlaningSection = function() {
	this.init();
};

PricePlaningSection.prototype = {
	init: function() {
		//	this.renderSection();
	},

	renderSection: function() {
		var $width = $(window).width(),
			$height = $(window).height(),
			$originHeight = 970,
			$originWidth = 2570,
			$originContentWidth = $originRibbonWidth = 1200,
			$originTitleMarginTop = 50,
			$originTitleFontSize = 50,
			$originTitleMarginBottom = 38,
			$originContentHeight = 770,
			$originRibbonHeight = 85,
			$originFontSize = 22,
			$originRibbonMarginBottom = 40,
			$originPlanWidth = 442,
			$originPlanHeight = 472,
			$originPlanPriceFontSize = 32,
			$originPlanPricePeriodFontSize = 62,
			$originPlanDescFontSize = 13,
			$originTrustHeight = 200,
			$sectionHeight = $height - $($('div').filter('#header')[0]).height() - 10,
			$curSectionRatio = $sectionHeight / $originHeight;

		$($('section').filter('#pricingPlanes')[0]).css({
				'height': $sectionHeight + 'px',
				'background-size': 'cover',
				'background-position': '50% 50%'
			});

		$($('#pricingPlanes .content')[0]).css({
				'font-size': $originTitleFontSize * $curSectionRatio + 'px',
				'margin-bottom': $originTitleMarginBottom * $curSectionRatio + 'px',
				'width': $originContentWidth * $curSectionRatio + 'px',
				'height': $originContentHeight * $curSectionRatio + 'px',
				'max-width': $width + 'px',
				'overflow': 'hidden'
			});

		$($('#pricingPlanes .content .title')[0]).css({
				'margin-top': 0,
				'font-size': $originTitleFontSize * $curSectionRatio + 'px',
				'padding-top': $originTitleMarginTop * $curSectionRatio + 'px'
			});

		$($('#pricingPlanes .content .ribbon')[0]).css({
				'background-size': '100%',
				'width': $originRibbonWidth * $curSectionRatio + 'px',//($width > 1200) ? '1200px' : (1200 * $width / 1200 + 'px'),
				'height': $originRibbonHeight * $curSectionRatio + 'px', // ($width > 1200) ? '85px' : (1200 * $width / 1200 + 'px'),
				'max-width': $width + 'px',
				'padding-top': '1%',
				'margin-right': 'auto',
				'margin-left': 'auto',
				'font-size': $originFontSize * $curSectionRatio + 'px',
				'margin-bottom': $originRibbonMarginBottom * $curSectionRatio + 'px'
			});

		var $boxMargin = ($($('#pricingPlanes .content')[0]).width() - $originPlanWidth * $curSectionRatio * 2- 30) / 2;

		$($('#pricingPlanes .content .pricing-container .box .premium')[0]).css({
				'width': $originPlanWidth * $curSectionRatio + 'px',
				'height': $originPlanHeight * $curSectionRatio + 'px',
				'margin-left': $boxMargin + 'px',
				'margin-right': '40px'
			});

		$($('#pricingPlanes .content .pricing-container .box .premium .premium-title')[0]).css({
				'font-size': 20 * $curSectionRatio + 'px'
			});

		$($('#pricingPlanes .content .pricing-container .box .premium .price')[0]).css({
				'font-size': $originPlanPriceFontSize * $curSectionRatio + 'px'
			});

		$($('#pricingPlanes .content .pricing-container .box .premium .description')[0]).css({
				'font-size': $originPlanDescFontSize * $curSectionRatio + 'px'
			});

		$($('#pricingPlanes .content .pricing-container .box .premium .price strong')[0]).css({
				'font-size': $originPlanPricePeriodFontSize * $curSectionRatio + 'px'
			});

		$($('#pricingPlanes .content .pricing-container .box .gold')[0]).css({
					'width': $originPlanWidth * $curSectionRatio + 'px',
					'height': $originPlanHeight * $curSectionRatio + 'px'
				});

		$($('#pricingPlanes .content .pricing-container .box .gold .gold-title')[0]).css({
				'font-size': 20 * $curSectionRatio + 'px'
			});

		$($('#pricingPlanes .content .pricing-container .box .gold .price')[0]).css({
				'font-size': $originPlanPriceFontSize * $curSectionRatio + 'px'
			});

		$($('#pricingPlanes .content .pricing-container .box .gold .description')[0]).css({
				'font-size': $originPlanDescFontSize * $curSectionRatio + 'px'
			});

		$($('#pricingPlanes .content .pricing-container .box .gold .price strong')[0]).css({
				'font-size': $originPlanPricePeriodFontSize * $curSectionRatio + 'px'
			});

		$($('div').filter('.trust')[0]).css({
				'height': $originTrustHeight * $curSectionRatio + 'px',
				'opacity': '0.9',
				'overflow': 'hidden'
			});
	}
}