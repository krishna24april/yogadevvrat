/*!
 * Custom scripts for jQuery Cycle set up
 * Version: 1.0
 * Description: Featured slider to display in header.php
 */
jQuery(window).load(function(){var transition_effect=js_value.transition_effect;var transition_delay=js_value.transition_delay;var transition_duration=js_value.transition_duration;jQuery('.featured-slider').cycle({fx:transition_effect,pager:'#controllers',activePagerClass:'active',timeout:transition_delay,speed:transition_duration,pause:1,pauseOnPagerHover:1,width:'100%',containerResize:0,fit:1,after:function(){jQuery(this).parent().css("height",jQuery(this).height());}});});