'use strict';
/*
 * author : towne
 * version : 0.0.1
 * for : dialog example
 * date : 2015.4.20
 *
*/

define(function (require, exports, module){

	var $ = jQuery = require("../src/jquery");

	var Dialog = require("../modules/dialog");

	var Drag = require("../modules/drag");

	$("#js_dialog").on('click', function(){

			var dialog = new Dialog(),
				get    = dialog.init();

			var drag = new Drag({

				source : get.head,
				box	   : get.module

			})

			dialog.ele();
			
			drag.init();

		});

})