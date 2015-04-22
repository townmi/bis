jQuery(function($) {
	// 退出登录
	$('#logout').on('click', function() {
		$.cookie('referer', null);
		
        // IE8
		if(/MSIE (\d+\.\d+)/.test(navigator.userAgent)){
			var logout_btn = document.createElement("a");
			logout_btn.href = basePath + "/logout.shtml";
			document.body.appendChild(logout_btn);
			logout_btn.click();
			
		}else{
			window.location.href = basePath + "/logout.shtml";
		}

		/*
		$.ajax({
			type : "post",
			url : basePath + "/logout.shtml",
			data: {storeCode:$("#storeCode").val()},
			dataType : "json",
			success : function(data) {
				if (data.logoutFlag == "success") {
					if(data.storeCode!=""){
						//跳转到理财经理的"店铺首页"页面
						window.location=basePath+"/"+data.storeCode;
					}
					else{
						window.location = basePath + "/index.shtml";
					}
				}
			},
			error : function() {
			}
		});
		*/
	});

	// 我的店铺
	$('#my_store_btn').on('click', function() {
		$.ajax({
			type : "post",
			url : basePath + "/checkForward.shtml",
			dataType : "json",
			success : function(data) {
				if (data.resCode == "1") {
					window.location = basePath + data.resInfo + ".shtml";
				} else {
					$("#head_login").click();
				}
			},
			error : function() {
			}
		});
	});
	
	// 我的投资
	$('#my_invest_btn').on('click', function() {
		$.ajax({
			type : "post",
			url : basePath + "/checkInvestForward.shtml",
			dataType : "json",
			success : function(data) {
				if (data.resCode == "1") {
					window.location = basePath + data.resInfo + ".shtml";
				} else {
					$("#head_login").click();
				}
			},
			error : function() {
			}
		});
	});
	

	$('#my_store_btn_login').on('click', function() {
		$("#hidden").val("2");
		$("#top_login_btn").click();
	});
	$('#my_invest_btn_login').on('click', function() {
		$("#hidden").val("1");
		$("#top_login_btn").click();
	});
	$('#my_order_btn').on('click', function() {
		$("#top_login_btn").click();
	});
	
	$("#topSearchInput").keydown(function(e){
		if(e.which==13){
			checkInfo();
		}
	});
	$('#accountManage').on('click',function(){		
		$('#accountManage').attr('href',basePath+'/account/accountManage.shtml');
		
	});
});

function checkInfo() {
	var type = $.trim($("#topSearchType").text());
	var content = $.trim($("#topSearchInput").val());
	//if (content == "") {
	//	alert("请输入要查询的店铺名称或者产品名称。");
	//	return;
	//}
	var subForm = $("#topSearchForm");

	if (type == "产品") {
		subForm.html("<input type='hidden' name='productName' value='" + content + "' />");
		subForm.prop("action", basePath + "/product/list.shtml");
		subForm.submit();
	} else if (type = "店铺") {
		subForm.html("<input type='hidden' name='searchStoreName' value='" + content + "' />");
		subForm.prop("action", basePath + "/store/list.shtml");
		subForm.submit();
	}
}
