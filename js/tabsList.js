var $ali = $("#plat-ul li");
for(var i=0; i<$ali.size(); i++){
	$ali.eq(i).attr("index",i+1);
}

for(var i=0; i<$ali.size(); i++){
	(function(iNum){
		if(iNum <= 20){
			$ali.eq(i).on("mouseover",function(){
				var $look = $(".look").offset().top;
				var $platTab = $(this).offset().top + $("#platTable").height();

				if($platTab >= $look){
					$("#platTable").css({display:"block",top:$(this).height()*($(this).attr("index")) - $("#platTable").height()});
				} else {
					$("#platTable").css({display:"block",top:$(this).height()*($(this).attr("index"))+($(this).attr("index")*1)+110});
				}
				getData(iNum);
					
			});
		}

	})(i);

	$ali.eq(i).on("mouseout",function(){
		$("#platTable").css("display","none");
	});
}


var $height_total =  $("#plat-ul li").eq(0).outerHeight() * $("#plat-ul li").size();
var $height_20 = $("#plat-ul li").eq(0).outerHeight() * 20;

$(".look-all").on("click",function(){
	var $height = $("#plat-ul").outerHeight();
	if(($height + $height_20) < $height_total){
		$("#plat-ul").animate({height:($height + $height_20)});
	} else {
		$("#plat-ul").animate({height:$height_total});
		$(this).html("已经到底了!");
	}
});