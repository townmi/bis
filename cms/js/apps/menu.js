'use strict';
/*
 * author : towne
 * version : 0.0.1
 * for : menu
 * date : 2015.4.20
 *
*/

define(function (require, exports, module){

	var $ = jQuery = require("../src/jquery");

	function Menu(config){

		this.config = $.extend(true, {
			parentID: "#js_nav"
		}, config);

		this.init();
	}

	Menu.prototype.init = function(){

		var self = this;

		this.parent = $(this.config.parentID);

		this.lower = this.parent.find("ul");

		this.menus = this.lower.prev();

		this.menus.each(function (i, e){

			// 初始化menu状态
			if(!$(e).attr("status")){
				$(e).attr("status", 0);
			}
			// 绑定事件

			$(e).on("click", function (){
				if($(this).attr("status") == "1"){
					self.lower.hide();
					self.menus.attr("status", 0);
				}else{
					self.menus.not(this).attr("status", 0);
					self.lower.not($(this).next()).hide();
					$(this).attr("status", 1);
					$(this).next().show();
				}
				
			});

		});

	};

	new Menu({});

});














