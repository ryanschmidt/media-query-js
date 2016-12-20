// Accepts an array of media query sizes (example: xs) and
// returns true if the current screen size is using that media query.
function checkMediaQuery(sizes) {
	var mediaQueryExists = false,
			currentQuery     = window.getComputedStyle(document.querySelector('html'), ':before').getPropertyValue('content').replace(/\W/g, '');

	$.each(sizes, function(index, value) {
		if(currentQuery == value) {
			mediaQueryExists = true;
		}
	});
	return mediaQueryExists;
}