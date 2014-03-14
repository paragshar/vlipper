var FooterSection = function() {
	this.init();
};

FooterSection.prototype = {
	init: function() {
		///	this.renderSection();
	},

	renderSection: function() {
		var $width = $(window).width(),
			$height = $(window).height(),
			$originHeight = 1225,
			$originWidth = 2570,
			$originContentWidth = 1200,
			$originNewsletterHeight = 650,
			$originNewsletterTitleMarginTop = 220,
			$originNewsletterTitleWidth = 650,
			$originNewsletterTitleHeight = 37,
			$originNewsletterTitleFontSize = 37,
			$originNewsletterTitleMarginBottom = 60,
			$originSocialLinkHeight = 453,
			$originSocialLinkMarginTop = 66,
			$originSocialLinkItemHeight = 86,
			$originSocialLinkItemsMarginTop = 115,
			$originFooterBody = 122,
			$originTitleMarginTop = 70,
			$originTextHeight = 415,
			$originMapWidth = 1680,
			$originMapHeight = 800,
			$sectionHeight = $height - $($('div').filter('#header')[0]).height() - 15,
			$curSectionRatio = $sectionHeight / $originHeight;

		$($('section').filter('#footer')[0]).css({
				'height': $sectionHeight + 'px'
			});

		$($('#footer .newsLetter')[0]).css({
				'height': $originNewsletterHeight * $curSectionRatio + 'px',
				'padding-top': $originNewsletterTitleMarginTop * $curSectionRatio + 'px'
			});

		$($('#footer .newsLetter .title')[0]).css({
				'width': $originNewsletterTitleWidth * $curSectionRatio + 'px',
				'font-size': $originNewsletterTitleFontSize * $curSectionRatio + 'px',
				'height': $originNewsletterTitleHeight * $curSectionRatio + 'px',
				'background-position': '0 bottom',
				'background-size': $originNewsletterTitleHeight * $curSectionRatio + 'px',
				'margin': '0 auto ' +
							$originNewsletterTitleMarginBottom * $curSectionRatio + 'px auto',
				'padding-left': 10 * $curSectionRatio + 'px'
			});

		$($('#footer .socialLink')[0]).css({
				'height': $originSocialLinkHeight * $curSectionRatio + 'px',
				'padding-top': $originSocialLinkMarginTop * $curSectionRatio + 'px'
			});

		$($('#footer .socialLink .social-list')[0]).css({
				'height': $originSocialLinkItemHeight * $curSectionRatio + 'px'
			});

		$($('#footer .socialLink .link-list')[0]).css({
				'margin-top': $originSocialLinkItemsMarginTop * $curSectionRatio + 'px'
			});

		$($('#footer .footerBody')[0]).css({
				'height': $originFooterBody * $curSectionRatio + 'px'
			});

		$($('#footer .footerBody .content')[0]).css({
				'width': ($width > 1200) ? '1200px' : ($width + 'px')
			});
	}
}