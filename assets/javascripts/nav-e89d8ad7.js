$(document).ready(function(){function o(){c.on("scroll",s),c.on("resize",n),$('a[href^="#"]').on("click",a)}function a(o){o.preventDefault(),$(document).off("scroll");var a=this.hash;$target=$(a),$("html, body").stop().animate({scrollTop:$target.offset().top-40},0,"swing",function(){window.location.hash=a,$(document).on("scroll",s)})}function n(){e.removeClass("has-docked-nav"),d=t.offset().top,s()}function s(){d<c.scrollTop()&&!e.hasClass("has-docked-nav")&&e.addClass("has-docked-nav"),d>c.scrollTop()&&e.hasClass("has-docked-nav")&&e.removeClass("has-docked-nav")}var t=$(".navbar"),e=$("body"),c=$(window),d=t.offset().top;$(document);o()});