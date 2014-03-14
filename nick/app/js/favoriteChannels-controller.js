var FavoriteChannelsSection = function() {
	this.renderSection();
};

FavoriteChannelsSection.prototype = {
	init: function() {
		//this.renderSection();
	},

	renderSection: function() {
		var $width = $(window).width(),
			$height = $(window).height(),
			$sectionOriginHeight = 1016,
			$sectionOriginWidth = 2570,
			$sectionTitleOriginMarginTop = 74,
			$sectionTitleOriginMarginBottom = 20,
			$sectionButtonOriginMarginTop = 40,
			$sectionTitleOriginFontSize = 56,
			$sectionDescOriginFontSize = 25,
			$sectionChannelsContainerWidth = 1200,
			$sectionChannelsContainerHeight = 500,
			$sectionChannelsItemDescFontSize = 25,
			$sectionChannelsDesc = 20,
			$sectionHeight = $height - $($('div').filter('#header')[0]).height() - 10,
			$curSectionRatio = $sectionHeight / $sectionOriginHeight;

		$($('section').filter('#favoriteChannels')[0]).css({
				'height': $sectionHeight + 'px',
				'margin': '0 auto 0 auto',
				'padding-top': $sectionTitleOriginMarginTop * $curSectionRatio + 'px'
			});

		$($('#favoriteChannels span .title')[0]).css({
				// 'margin-top': $sectionTitleOriginMarginTop * $curSectionRatio + 'px',
				'margin-bottom': $sectionTitleOriginMarginBottom * $curSectionRatio + 'px',
				'font-size': $sectionTitleOriginFontSize * $curSectionRatio + 'px'
			});

		$($('#favoriteChannels span .description-first')[0]).css({
				'margin-bottom': $sectionTitleOriginMarginBottom * $curSectionRatio + 'px',
				'font-size': $sectionDescOriginFontSize * $curSectionRatio + 'px'
			});

		$($('#favoriteChannels .favorite-channels-list')[0]).css({
				'width': $sectionChannelsContainerWidth * $curSectionRatio + 'px',
				'height': $sectionChannelsContainerHeight * $curSectionRatio + 'px'
			});

		$($('#favoriteChannels .container .row')[0]).css({
				'height': $sectionChannelsContainerHeight * $curSectionRatio + 'px'
			});

		$($('#main #favoriteChannels .favorite-channels-list')[0]).css({
				'width': $width + 'px'
			});

		for(var i = 0; i < 8; i++)
		{
			$($('#favoriteChannels .container .row .favorite-channel-list-container span p')[i]).css({
					'font-size': $sectionChannelsItemDescFontSize * $curSectionRatio + 'px'
				});	
		}

		$($('#favoriteChannels .container .description-second')[0]).css({
				'font-size': $sectionChannelsDesc * $curSectionRatio + 'px',
				'padding-top': '0'
			});

		$($('#favoriteChannels .learn-more-orange-button')[0]).css({
				'margin-top': '0'//$sectionButtonOriginMarginTop * $curSectionRatio + 'px'
			});
	}
};