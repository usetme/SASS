$(function() {
  $("#style-one").click(function() {
    $(".site-main .content").removeClass("columns")
  })
  $("#style-two").click(function() {
    $(".site-main .content").addClass("columns")
  })
  var mh = $(window).height() - $(".site-top").height() - $(".site-search").height() - $(".site-search").css("padding-top").replace(/[^0-9]/ig, "")-$(".site-search").css("padding-bottom").replace(/[^0-9]/ig, "");
  $(".site-main .sidebar").height(mh);
  $(".site-main .info-list ul").height(mh - $(".site-main .content .navbar").height() - $(".site-main .content .search").height());
  $(".site-main .info-detail ul").height(mh - $(".site-main .content .navbar").height());

  $(".info-list").on("click", "li", function(e){
    if(e.target.tagName.toUpperCase() != "A"){
      console.log("点击修改右侧内容")
    }
  })
  $(".special").click(function(){
//	  console.log($(this));
	if( $(this).parent().find("ul").is(":hidden")){
		 $(this).parent().find("ul").css("display","block");
	}else{ $(this).parent().find("ul").css("display","none");}
  	$(this).parent().toggleClass("active");
  });
  $(document).ready(function(){
  $(".info-detail div ").css("display","none");
  $("#sel").css("display","none")
  })
})