var CountlessChannelsToLove = function() {
	this.width = 0;
};

CountlessChannelsToLove.prototype = {
	initSection: function() {
		this.renderSection();
	},

	renderSection : function() {

		var $width = $(window).width(),
			$height = $(window).height(),
			$channelsSectionHeight = $height - $($('div').filter('#header')[0]).height(),
			$sectionHeight = $height - $($('div').filter('#header')[0]).height() - 20,
			$sectionPadding = parseInt($($('section').filter('#channels')[0]).css('padding-top').toString().substr(0, $($('section').filter('#channels')[0]).css('padding-top').length - 2))  +
							  parseInt($($('section').filter('#channels')[0]).css('padding-bottom').toString().substr(0, $($('section').filter('#channels')[0]).css('padding-bottom').length - 2)),
			$sectionTitleHeight = $($('#channels p')[0]).outerHeight() + 
									$($('#channels p')[1]).outerHeight() +
									parseInt($($('#channels p')[1]).css('margin-bottom').toString().substr(0, $($('#channels p')[1]).css('margin-bottom').toString().length - 2)),
			$sectionButtonContainerHeight = $($('#channels .channels-button')[0]).outerHeight(),
			$sectionScrollDownButtonHeight = $($('#channels input[type="button"]')[0]).outerHeight(),
			//	Height of container that has lists of channels.
			$containerHeight = $sectionHeight -
									$sectionPadding -
									$sectionTitleHeight -
									$sectionButtonContainerHeight -
									$sectionScrollDownButtonHeight -
									10,
			$containerWidth = $($('div').filter('#container')[0]).width(),
			$containerMargin = $($('div').filter('.channels-list-container')[0]).css('margin-top').toString().substr(0, $($('div').filter('.channels-list-container')[0]).css('padding-top').length - 2) +
								$($('div').filter('.channels-list-container')[0]).css('margin-bottom').toString().substr(0, $($('div').filter('.channels-list-container')[0]).css('padding-bottom').length - 2);
			$containerItemMargin = $($('li').filter('.item')[0]).css('margin-top').toString().substr(0, $($('li').filter('.item')[0]).css('margin-top').length - 2),
			$containerItemOriginHeight = $($('li').filter('.item')[0]).height(),
			$containerItemOriginWidth = $($('li').filter('.item')[0]).width(),
			$containerItemRatio = $($('img').filter('.channel-item-img')[0]).width() / $($('img').filter('.channel-item-img')[0]).height(),
			$container3RowItemHeight = ($containerHeight - $containerMargin) / 3 - $containerItemMargin * 2- 25,
			$container2RowItemHeight = ($containerHeight - $containerMargin) / 2 - $containerItemMargin * 2- 25,
			$container1RowItemHeight = ($containerHeight - $containerMargin) / 1 - $containerItemMargin * 2- 25,
			$items = $('li').filter('.item'),
			$lists = $('ul').filter('.lists'),
			//$itemWidth = $($items[0]).width() + parseInt($($items[0]).css('margin-left').toString().substr(0, $($items[0]).css('margin-left').length - 2)),
			//$itemWidth = $($items[0]).width() + $($items[0]).css('margin-top').toString().substr(0, $($items[0]).css('margin-top').length - 2),
			$containerRow3HeightLimit = 135 * 3,
			$containerRow2HeightLimit = 135 * 2,
			$containerRow1HeightLimit = 135 * 1;

			////alert($containerItemOriginHeight + " x " + $containerItemOriginWidth);
			

		$($('section').filter('#channels')[0])
				.css('height', $channelsSectionHeight);
		

		//$($('ul').filter('#container')[0]).css({'height': $containerHeight + 'px', 'overflow': 'hidden'});

		var $channelsLists = $('ul').filter('.lists'), 
			$channelsListsHeight = 0,
			$channelsListsMargin = 0;

		if ( $containerHeight > $containerRow3HeightLimit )
		{//	In this case, 3 of channel list would be shown
			//alert("3 Row");
			for ( var i = 0; i < $items.length; i++ )
			{
				$($items[i])
					.height($container3RowItemHeight)
					.width($container3RowItemHeight * 3 / 4)
					.css('float', 'left');
				$($('img').filter('.channel-item-img')[i]).css({'width':'100%', 'height':'100%'});
			}
			$channelsListsHeight = $container3RowItemHeight + 30;
			$channelsListsMargin = ($containerHeight - $container3RowItemHeight * 3) / 6;
			$($('ul').filter('.lists')[1]).css('display', 'block');
			$($('ul').filter('.lists')[2]).css('display', 'block');
		}else if ( $containerHeight > $containerRow2HeightLimit )
		{//	In this case, 2 of channel list would be shown
			//alert('2 Rows');
			for ( var i = 0; i < $items.length; i++ )
			{
				$($items[i])
					.height($container2RowItemHeight)
					.width($container2RowItemHeight * 3 / 4)
					.css('float', 'left');
				$($('img').filter('.channel-item-img')[i]).css({'width':'100%', 'height':'100%'});
			}
			$channelsListsHeight = $container2RowItemHeight + 30;
			$channelsListsMargin = ($containerHeight - $container3RowItemHeight * 2) / 6;
			$($('ul').filter('.lists')[1]).css('display', 'block');
			$($('ul').filter('.lists')[2]).css('display', 'none');
		}else
		{//	In this case, only one of channels list would be shown
			//alert('Only one Rows');
			for ( var i = 0; i < $items.length; i++ )
			{
				$($items[i])
					.height($container1RowItemHeight)
					.width($container1RowItemHeight * 3 / 4)
					.css('float', 'left');
				$($('img').filter('.channel-item-img')[i]).css({'width':'100%', 'height':'100%'});
			}
			$channelsListsHeight = $container1RowItemHeight + 30;
			$channelsListsMargin = ($containerHeight - $container3RowItemHeight * 3) / 6;
			$($('ul').filter('.lists')[1]).css('display', 'none');
			$($('ul').filter('.lists')[2]).css('display', 'none');
		}

		var $containerColumnWidth = $($('li').filter('.item')[0]).width() + 30,
			$containerColumnCount = parseInt($containerWidth / $containerColumnWidth),
			$containerPaddingLeft = ($containerWidth - $containerColumnWidth * $containerColumnCount) / 2;
		//alert($containerPaddingLeft);

		$($('div').filter('#container')[0]).css({
													'height': $containerHeight + 'px',
													'padding-left': $containerPaddingLeft + 'px'
												});

		for (var i = 0; i < $channelsLists.length; i++)
		{
			$($channelsLists[i]).css({
										'height':$channelsListsHeight + 'px',
										'overflow':'hidden',
										'margin-top': $channelsListsMargin + 'px',
										'margin-bottom': $channelsListsMargin + 'px'
									});
		}

	}
}