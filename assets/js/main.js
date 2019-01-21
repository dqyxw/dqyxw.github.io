/*
	Future Imperfect by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$menu = $('#menu'),
		$sidebar = $('#sidebar'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$menu
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Search (header).
		var $search = $('#search'),
			$search_input = $search.find('input');

		$body
			.on('click', '[href="#search"]', function(event) {

				event.preventDefault();

				// Not visible?
					if (!$search.hasClass('visible')) {

						// Reset form.
							$search[0].reset();

						// Show.
							$search.addClass('visible');

						// Focus input.
							$search_input.focus();

					}

			});

		$search_input
			.on('keydown', function(event) {

				if (event.keyCode == 27)
					$search_input.blur();

			})
			.on('blur', function() {
				window.setTimeout(function() {
					$search.removeClass('visible');
				}, 100);
			});

	// Intro.
		var $intro = $('#intro');

		// Move to main on <=large, back to sidebar on >large.
			breakpoints.on('<=large', function() {
				$intro.prependTo($main);
			});

			breakpoints.on('>large', function() {
				$intro.prependTo($sidebar);
			});


	//设置时间

	Date.prototype.Format = function (fmt) { //author: meizz
	  	var o = {
		    "M+": this.getMonth() + 1, //月份
		    "d+": this.getDate(), //日
		    "h+": this.getHours(), //小时
		    "m+": this.getMinutes(), //分
		    "s+": this.getSeconds(), //秒
		    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
		    "S": this.getMilliseconds() //毫秒
	  	};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
	$(function(){
		var date=new Date();
		$("#date").html(JSON.stringify(date.Format("yyyy年-MM月-dd日")));
	})



})(jQuery);