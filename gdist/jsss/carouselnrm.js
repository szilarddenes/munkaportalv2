function normalizeSlideHeights(){$(".carousel").each(function(){var i=$(".carousel-item",this);i.css("min-height",0);var e=Math.max.apply(null,i.map(function(){return $(this).outerHeight()}).get());i.css("min-height",e+"px")})}$(window).on("load resize orientationchange",normalizeSlideHeights),$(".navbar-collapse ul li a:not(.dropdown-toggler)").bind("click",function(){$(".navbar-toggler:visible").click()});