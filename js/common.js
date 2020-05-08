(function ($) {

	$(document).ready(function () {

		// counter

		function counter() {
			var counter = $(".js-counter")

			if (!counter.length) return

			counter.counterUp({
				time: 1000,
			})
		}

		counter()

		// menu trigger

		function menuTrigger() {

			var trigger = $('.menu-trigger')

			if (!trigger.length) return

			var close = $('.mobile-dropdown__close')

			trigger.on('click', function () {

				$('body').addClass('body--static')
				$('.mobile-dropdown').addClass('mobile-dropdown--active')

			})

			close.on('click', function () {

				$('body').removeClass('body--static')
				$('.mobile-dropdown').removeClass('mobile-dropdown--active')

			})

		}

		menuTrigger()
	})

}(jQuery))