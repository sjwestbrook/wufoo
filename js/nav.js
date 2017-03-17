// First we want to hide our navigation unordered list (#nav). 
// In our CSS we’re doing display:none on our #nav.js. We can do this in jQuery in the following way.

$("#nav").addClass("js");
$("#nav").addClass("js").before('<div id="menu">☰</div>');
