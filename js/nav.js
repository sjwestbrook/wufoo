// First we want to hide our navigation unordered list (#nav). 
// In our CSS we’re doing display:none on our #nav.js. 
// We can do this in jQuery in the following way.

$("#nav").addClass("js");

// So if JavaScript is enabled it now hides when we shrink our viewport.
// Next we want to add the menu link before our #nav.

$("#nav").addClass("js").before('<div id="menu">☰</div>');

// Because we have the CSS already set up to show and hide the ☰ menu we don’t have to do anything here. 
// Next we need to add a click listener to the menu and then toggle the visibility of the #nav element.

$("#menu").click(function(){
	$("#nav").toggle();
});


// Finally, if you show and hide the navigation in a small viewport and then expand the viewport again the navigation is always hidden.
// This is because the toggle method adds a style attribute to the navigation element. 
// To fix this we by removing the style attribute using the removeAttr method. 
// We need to call this when the window resizes and the width is greater than 768 pixels.

$(window).resize(function(){
	if(window.innerWidth > 768) {
		$("#nav").removeAttr("style");
	}
});
