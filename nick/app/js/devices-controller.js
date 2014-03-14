var DevicesAndPlatformsSection = function() {
	this.width = 0;
	this.height = 0;
	this.initSection();
};

DevicesAndPlatformsSection.prototype = {
	initSection: function() {
		this.renderDevicesSection();
	},

	renderDevicesSection: function() {

		var $width = $(window).width(),
			$height = $(window).height(),
			$sectionHeight = $height - $($('div').filter('#header')[0]).height() - 10,
			$topOriginHeight = 410,
			$contentOriginHeight = 204,
			$downOriginHeight = 333,
			$curSectionFactor = $sectionHeight / 947,
			$devicesSectionContentHeight = $($('div').filter('.devices-wrapper .content')[0]).height(),
			$devicesTopHeight = parseInt($topOriginHeight * $curSectionFactor),
			$devicesContentHeight = parseInt($contentOriginHeight * $curSectionFactor),
			$devicesDownHeight = $sectionHeight - $devicesTopHeight - $devicesContentHeight,
			$devicesContentRatio = 1658 / 947,
			$topMargin0 = 163,
			$appleTVRatio = 344 / 294,
			$topMargin1 = 30,
			$applePlayerRatio = 684 / 214,
			$topMargin2 = 54,
			$applePhoneRatio = 382 / 320,
			$appleGameStationRatio = 616 / 432,
			$downMargin1 = 88,
			$applePadRatio = 355 / 226,
			$downMargin2 = 161,
			$appleJoystickRatio = 432 / 372,
			$devicesTopWidth = $($('div').filter('.devices-top')[0]).width(),
			$totalContainerWidth = 400 + 690 + 400;

		// alert($devicesTopHeight + " : " + $devicesSectionContentHeight + " : " + $devicesDownHeight);
		var appleTvContainer = $('div').filter('.apple-tv-container')[0],
			applePlayerContainer = $('div').filter('.apple-player-container')[0],
			applePhoneContainer = $('div').filter('.apple-phone-container')[0],
			appleGameStationContainer = $('div').filter('.apple-game-station-container')[0],
			applePadContainer = $('div').filter('.apple-pad-container')[0],
			appleJoystickContainer = $('div').filter('.apple-joystick-container')[0];

		$($('section').filter('.devicesAndPlatforms')[0]).height($sectionHeight);
		$($('div').filter('.devices-wrapper')[0]).css({'height':$sectionHeight + 'px', 'overflow':'hidden'});
		$($('div').filter('.devices-top')[0]).css({
													'height': $devicesTopHeight + 'px',
													'width': 1658 * $curSectionFactor + 'px',
													'margin': '0 auto'
												});
		$($('div').filter('.devices-down')[0]).css({
													'height': $devicesDownHeight + 'px',
													'width': 1658 * $curSectionFactor + 'px',
													'margin': '0 auto',
													'padding-top': '10px'
												});

		$(appleTvContainer).css({
									'width': 344 * $curSectionFactor + 'px',
									'height': 294 * $curSectionFactor + 'px',
									'margin-left': $topMargin0 * $curSectionFactor + 'px',
									'margin-right': $topMargin1 * $curSectionFactor + 'px'
								});
		$(applePlayerContainer).css({
									'width': 684 * $curSectionFactor + 'px',
									'height': 214 * $curSectionFactor + 'px',
									'margin-right': $topMargin2 * $curSectionFactor + 'px'
								});
		$(applePhoneContainer).css({
									'width': 382 * $curSectionFactor + 'px',
									'height': 320 * $curSectionFactor + 'px'
								});

		$(appleGameStationContainer).css({
											'width': 616 * $curSectionFactor + 'px',
											'height': 432 * $curSectionFactor + 'px',
											'margin-top': $devicesDownHeight - 432 * $curSectionFactor + 'px',
											'margin-right': $downMargin1 * $curSectionFactor + 'px'
										});
		$(applePadContainer).css({
									'width': 355 * $curSectionFactor + 'px',
									'height': 226 * $curSectionFactor + 'px',
									'margin-top': $devicesDownHeight - 226 * $curSectionFactor + 'px',
									'margin-right': $downMargin2 * $curSectionFactor + 'px'
								});
		$(appleJoystickContainer).css({
									'width': 432 * $curSectionFactor + 'px',
									'height': 372 * $curSectionFactor + 'px',
									'margin-top': $devicesDownHeight - 372 * $curSectionFactor + 'px',
								});
		
		// $($('section').filter('#devicesAndPlatforms')[0]).css('min-height', $width / 2.714 + 'px');
		$($('div').filter('.devices-top')[0])
			.css('height', $($('section').filter('#devicesAndPlatforms')[0]).height() / 2 - 55 + 'px');

	}
}