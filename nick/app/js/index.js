(function(window) {
	var $screenWidth = $(window).width(),
		$screenHeight = $(window).height(),
		$frontBackgroundRatio = $screenWidth / $screenHeight;


	$(document).ready(function() {
		window.FrontPageSection = new FrontPageSection();
		window.ChannelsSection = new CountlessChannelsToLove();
		window.DevicesSection = new DevicesAndPlatformsSection();
		window.FeedbackSection = new FeedbackSection();
		window.FavoriteChannelsSection = new FavoriteChannelsSection();
		window.UnlimitedAccessAndBandWidthSection = new UnlimitedAccessAndBandWidthSection();
		window.OndemanSection = new OndemanSection();
		window.SpeedSection = new SpeedSection();
		window.MapSection = new MapSection();
		window.PressReviewSection = new PressReviewSection();
		window.PricePlaningSection = new PricePlaningSection();
		window.footerSection = new FooterSection();

		var renderPage = function() {
			//	For front page (GeoBlock) section
			window.FrontPageSection.renderSection();
			
			//	For channels section
			window.ChannelsSection.renderSection();

			//	For devices Page
			window.DevicesSection.renderDevicesSection();

			//	For feedback section
			window.FeedbackSection.renderSection();
			// $($('section').filter('#feedback')[0]).hide();
			// $($('section').filter('#feedback')[1]).hide();

			//	 For "Unlimited Access and BandWidth" section
			
			window.UnlimitedAccessAndBandWidthSection.renderSection();

			//	For "Customize your Favorite Channels"
			window.FavoriteChannelsSection.renderSection();

			//	For "We care about your experience" section
			window.OndemanSection.renderSection();

			//	For "Blazing Speed with DirectConnect" section
			window.SpeedSection.renderSection();

			//	For "Map section" section
			window.MapSection.renderSection();

			//	For "Press Reviews" section
			window.PressReviewSection.renderSection();

			//	For "Price Planing" section
			window.PricePlaningSection.renderSection();

			// //	For "People love us" section
			// $($('section').filter('#peopleLoveUs')[0]).hide();

			// //	For trust-unotelly section
			// $($('section').filter('#trust-unotelly')[0]).hide();

			//	For "Footer" section
			window.footerSection.renderSection();
		};

		$(window).bind('resize', renderPage);
		renderPage();
	});

	
})(window);