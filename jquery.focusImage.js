//焦点图
<script type="text/javascript">
$(function(){
	//导航下拉菜单定义
	//$(".tm_menu ul li").mouseenter(function(){$(this).children(".demo").show();}).mouseleave(function(){$(this).children(".demo").hide()});

	var maxsw=playerli.length;
	var sw = 0;
	var imgid=$("#player ul li");
	var curid=$("#player .num a");
	imgid.eq(0).css("display","block");//显示第一张
	curid.eq(0).addClass("cur");
	$("#player .num a").mouseover(function(){
		sw = $(".num a").index(this);
		myShow(sw);
	});
	function myShow(i){
		$("#player .num a").eq(i).addClass("cur").siblings("a").removeClass("cur");
		$("#player ul li").eq(i).stop(true,true).fadeIn(200).siblings("li").fadeOut(200);
	}
	$("#player").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}

	},function(){
		myTime = setInterval(function(){
	    myShow(sw)
		sw++;
	    if(sw==maxsw){sw=0;}
		} , 2000);
	});

	//自动开始
	var myTime = setInterval(function(){
	myShow(sw)
    sw++;
    if(sw==maxsw){sw=0;}
	} , 2000);
})
</script>
