$(function() {
   var height = $(window).height() - ($("header").outerHeight() + $("footer").outerHeight() );
 $("#page-content").css("min-height",height+"px");
});
