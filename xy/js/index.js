var b;
var arry=[];
var result=[];  
$("#index_img").on("click", function() {
	$("#thip").show();
	$("#meng").show();
});

$(".thip,.thip1,.thip2").on("click",function(){
	$(this).hide();
	$("#meng").hide();
});

$(".phone,.phone2").on("click",function(event){
	event.stopPropagation();
});

$(".phone a").on("click",function(){
	var valThis = $(".phone input");
	isPoneAvailable(valThis);
})

$(".list li").on("click",function(){
	if ($(this).hasClass("on")) {
		$(this).removeClass("on");
		b =  $(".list li.on").length;
		var thisData = $(this).data("id");
		remove(arry,thisData);
		arry = result;
		console.log(result);
		$(".list_btn p span").html(b);
	} else{
		$(this).addClass("on");
		b =  $(".list li.on").length;
		var thisData = $(this).data("id");
		arry.push(thisData);
		console.log(arry);
		$(".list_btn p span").html(b);
	}
	
})
function remove(arr, item) { 
	result=[];
    for(var i=0; i<arr.length; i++){  
    if(arr[i]!=item){  
        result.push(arr[i]);  
    }  
}  
   return result;  
}
function isPoneAvailable($poneInput) {
	var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if(!myreg.test($poneInput.val())) {
		console.log("手机号输入错误！");
		alert("请输入正确的手机号！");
	} else {
		console.log(2);
		
		
		$(".phone").hide();
		$(".phone2").show();
	}
}