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
				self.menus.not(this).attr("status", 0);
				self.menus.not(this).each(function (i, e){
					$(e).find(".fa").eq(1).attr("class", "fa fa-angle-down");
				})
				self.lower.not($(this).next()).hide();

				if($(this).attr("status") == "1"){
					$(this).attr("status", 0);
					$(this).find(".fa")[1].className = "fa fa-angle-down";
					$(this).next().hide();
				}else{
					$(this).attr("status", 1);
					$(this).find(".fa")[1].className = "fa fa-angle-up";
					$(this).next().show();
				}
				
			});

		});

	};

	new Menu({});

});














