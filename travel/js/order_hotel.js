$(function(){
	$('#container .form ul li a').click(function(){
		$('.form-third select option').removeAttr('selected')
		for(var i =0 ;i<$('.form-third select option').length;i++){
			if($(this).html()==$('.form-third select option').eq(i).html()){
				$('.form-third select option').eq(i).prop('selected','selected')
			}
		}

	})
	$('#container .new li a:first').mouseover(function(){
		console.log('11')
		$('.hotel_figure').css('display','block')
	})
	$('#container .new li a:gt(0)').mouseover(function(){
		$('.hotel_figure').css('display','none')
		var elems =$(".hotel_figure .hotel_name")
		for(var i =0;i<elems.length;i++){
			if($(this).html()==elems.eq(i).html()){
				elems.eq(i).parent().css('display','block')
			}
		}
	})	

})