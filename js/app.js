'use strict';
/*
 * author : towne
 * version : 0.0.3
 * date : 2015.1.20
 *
 */

define(function (require, exports, module){

	var $ = jQuery = require("jquery");

	// var mousewheel = require("mousewheel");
	// var jscrollpane = require("jscrollpane");

	module.exports = function(){


		$("body").css({"height" : $(window).height()});

		// $("body").jScrollPane();

		$(window).on('resize', function(){

			$("body").css({"height" : $(window).height()});

			// $("body").jScrollPane();

		})

	}

})