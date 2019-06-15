$.CNCN = {
	hover_class: function(control, class1) {
		$(control).hover(function() {
			$(this).addClass(class1)
		}, function() {
			$(this).removeClass(class1)
		});
	}
}
$.CNCN.hover_class(".quick_menu li.web_nav", "hov");


$(function() {
	refreshTotal('tickit_num_hid', 'tickit_num', 1, 'total_price_s');
	if ($('.insert_list').find('dl').length < 1) {
		$('.insert_list').hide();
	} else {
		$('.insert_list').show();
	}

	var _input = $(".operate_num input.text");
	$(".operate_num").on('click', '.add', function() {
		var input = _input.val();
		/*if(input >= 99){
		    _input.val(99);
		}else{
		}*/
		_input.val(math_floor(1));
		if ($(this).parent().hasClass('plus')) {
			if ($(this).parent().hasClass('need_credit_no')) {
				var need_credit_no = 1
			} else {
				var need_credit_no = 0
			}
			var _len = parseInt(input) + 1;
			alert(need_credit_no);
			if (need_credit_no == 1 ) {
				$(".insert_list").append('<div class="insert_con"><dl>' + '<dt>取票人' + _len + '：<em>*</em></dt>' + '<dd><input type="text" class="text" name="other_man[]"></dd>' + '</dl>' + '<dl>' + '<dt>证件号码' + _len + '：<em>*</em></dt>' + '<dd><select class="select" name="other_credit_type[]">' + '<option value="身份证">身份证</option>' + '<option value="学生证">学生证</option>' + '<option value="军官证">军官证</option>' + '<option value="护照">护照</option>' + '<option value="户口本(儿童请选择此项)">户口本(儿童请选择此项)</option>' + '<option value="港澳通行证">港澳通行证</option>' + '<option value="台胞证">台胞证</option>' + '</select>' + '<input type="text" class="text text200" name="other_credit_no[]"></dd>' + '</dl></div>');
			} else {
				$(".insert_list").append('<div class="insert_con"><dl>' + '<dt>取票人' + _len + '：<em>*</em></dt>' + '<dd><input type="text" class="text" name="other_man[]"></dd>' + '</dl></div>');
			}
		}

		if ($('.insert_list').find('dl').length > 0) {
			$('.insert_list').show();
		} else {
			$('.insert_list').hide();
		}

		refreshTotal('tickit_num_hid', 'tickit_num', 1, 'total_price_s');
	});
	$(".operate_num").on('click', '.sub', function() {
		var input = _input.val();
		// if (input <= 2) {
		// 	_input.val(math_floor(-1));
		// 	$('.operate_num .sub').addClass('disabled');
		// } else {
		// 	_input.val(math_floor(-1));
		// 	$('.operate_num .sub').removeClass('disabled');
		// }
		_input.val(math_floor(-1));

		var _len = $(".insert_con").length;
		$(".insert_con").last().remove();

		if ($('.insert_list').find('dl').length > 0) {
			$('.insert_list').show();
		} else {
			$('.insert_list').hide();
		}
		refreshTotal('tickit_num_hid', 'tickit_num', 1, 'total_price_s');
	});

	function math_floor(num) {
		var value = parseInt(parseFloat($(".operate_num input.text").val())) + num;
		if (value >= 1) {
			min_num = $('#tickit_num_hid').attr('minAmt');
			max_num = $('#tickit_num_hid').attr('maxAmt');
			// console.log(num,value,min_num,max_num);
			if(value<=min_num){
			    $('.operate_num .sub').addClass('disabled');
			    return min_num;
			}else if(value>=max_num){
			    $('.operate_num .add').addClass('disabled');
			    return max_num;
			}else{
				$('.operate_num .add').removeClass('disabled');
				$('.operate_num .sub').removeClass('disabled');
				return value;
			}
		} else {
			$('.operate_num .sub').addClass('disabled');
			return min_num;
		}
	}
	math_floor(1);
	$(".operate_num input").on('blur', function() {
		var self = this;
		setTimeout(function() {
			var num = $('.insert_con').length + 1;
			var input = $(self).val();
			//input = parseInt(input,10);
			if (num - input > 0) {
				$(self).val(num);
				for (var i = 0; i < num - input; i++) {
					$(".operate_num .sub").trigger('click');
				}
			}
			if (num - input < 0) {
				$(self).val(num);
				for (var i = 0; i < Math.abs(num - input); i++) {
					$(".operate_num .add").trigger('click');
				}
			}
		}, 100);
	})


	function filter_digit(value) {
		var t_value = value.replace(/[^0-9.]/g, ''); //剔除非数字字符
		if (t_value.length > 1) {
			t_value = t_value.replace(/^0+/g, ''); //剔除首位为0的数字
		}
		return t_value;
	}

	var time = null;
	$("a.lxs").hover(function() {
		clearTimeout(time);
		$(".lxs_info").show();
	}, function() {
		time = setTimeout(function() {
			$(".lxs_info").hide();
		}, 1000);
	});
	$(".lxs_info").hover(function() {
		clearTimeout(time);
		$(this).show();
	}, function() {
		time = setTimeout(function() {
			$(".lxs_info").hide();
		}, 1000);
	});

	$(".much_more").click(function() {
		if ($(this).hasClass("hide")) {
			$(this).html('<a href="#?">查看详情</a>').removeClass("hide")
			$(this).siblings(".less").show();
			$(this).siblings(".full").hide();
		} else {
			$(this).html('<a href="#?">收起</a>').addClass("hide")
			$(this).siblings(".less").hide();
			$(this).siblings(".full").show();
		}
	});
});

function gt(o) {
	return document.getElementById(o);
}

$(function(){
	$('.baoxian_change span').click(function(){
		var self = $(this);
		if(self.hasClass('on')){
			self.removeClass('on').siblings('.baoxian_detail').hide();
		}else{
			self.addClass('on').siblings('.baoxian_detail').show();
			self.parents('li').siblings('li').find('span').removeClass('on').siblings('.baoxian_detail').hide();
		}
	})
})
/*function refreshTotal(priceElement,quantityElement,quantity, targetElement){
	// var _price = aaa.toFixed(2);
	// var bbb = parseFloat((_price * _quantity * quantity).toFixed(2));
	// var aaa = 39.9;
	// alert(aaa);
	var _price = Number($("#"+priceElement).attr("sellPriceYuan")).toFixed(2);
	var _quantity = parseInt($("#" + quantityElement).val());
	$("#" + targetElement).html(parseFloat((_price * _quantity * quantity).toFixed(2)));
	gt('total_price').value = parseFloat((_price * _quantity * quantity).toFixed(2));	
	gt('dingjin').value = gt('earmoney').value * _quantity * quantity;	
	if(gt('dingjin_s')){
		gt('dingjin_s').innerHTML = gt('earmoney').value * _quantity;	
	}
}*/
function refreshTotal(priceElement, quantityElement, quantity, targetElement) {
	var bx_num = $('#tickit_num').val();
	var _price = Number($("#"+priceElement).attr("sellPriceYuan")).toFixed(2);
	var _quantity = parseInt($("#" + quantityElement).val());
	var bx_price = 0;
	if($('#has_baoxian').length){
		if(!$('#has_baoxian').hasClass('on')){
			var bx_price = $('.baoxian_change a.on').find('em').attr('data-bx_price');
		}else{
			var bx_price = 0;
		}
	}
	
	var price_all = gt('total_price').value = parseFloat(Number((_price * _quantity * quantity) + Number(bx_price*_quantity)).toFixed(2));
	$("#" + targetElement).html(parseFloat((_price * _quantity * quantity).toFixed(2)));
	$('#total_price_s').text(price_all);
	$('.baoxian_change li sup').html('<b>x</b>'+bx_num);
}


/*身份证验证*/
function IdentityCodeValid(code) { 
	var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
	var tip = "";
	var pass= true;
	
	if(!code || !/^\d{6}(18|19|20)?\d{4}(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
		tip = "身份证号格式错误";
		pass = false;
	}
	
   else if(!city[code.substr(0,2)]){
		tip = "地址编码错误";
		pass = false;
	}
	else{
		//18位身份证需要验证最后一位校验位
		if(code.length == 18){
			code = code.split('');
			//∑(ai×Wi)(mod 11)
			//加权因子
			var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
			//校验位
			var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
			var sum = 0;
			var ai = 0;
			var wi = 0;
			for (var i = 0; i < 17; i++)
			{
				ai = code[i];
				wi = factor[i];
				sum += ai * wi;
			}
			var last = parity[sum % 11];
			if(parity[sum % 11] != code[17]){
				tip = "校验位错误";
				pass =false;
			}
		}
	}
	//if(!pass) alert(tip);
	return pass;
}
/*身份证验证end*/

/*手机号验证*/
function checkMobile(tel) {
	var reg = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
	if (reg.test(tel)) {
		return true;
	} else {
		return false;
	};
}
/*手机号验证end*/