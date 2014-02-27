'use strict';

// Call this function when the page loads (the 'ready' event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}

function likeBtnAnalytic(){
	ga('send', 'event', 'like grid', 'click');
}

function likeBtnAnalyticOriginal(){
	ga('send', 'event', 'like original', 'click');
}