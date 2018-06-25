
var swiper = new Swiper('.swiper-container_tuijian', {
		        slidesPerView: 1.5,
		        paginationClickable: true,
		        spaceBetween: 10,
	//	        freeMode: true
		    });

$(".z_housing_list .housing_list_top p").on("click",function(){
	$(this).next(".list_box").toggle();
	$(this).parent("li").siblings().find(".list_box").hide();
});
$(".z_housing_con .housing_con_bot .sc").on("click",function(){
	if (!$(this).hasClass("on")) {
		$(this).addClass("on");
	} else{
		$(this).removeClass("on");
	}
});
$(".meng").on("click",function(){
	$(this).hide();
	$(".tc").hide();
})
$(".z_housing_con .housing_con_bot .xd").on("click",function(){
	$(".meng").show();
	$(".tc1").show();
})
$(".tc1 a").on("click",function(){
	$(".meng").show();
	$(".tc1").hide();
	$(".tc2").show();
})
$(".rz_one_box input[type='submit']").on("click",function(){
	$(".tc3").show();
	setTimeout(function(){
        $(".tc3").hide();
    }, 2000);
})