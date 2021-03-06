$(document).ready(function(){
  $(window).click(function(e){
    function thumbnail_slide(num){
      if(e.target == $(".slide ul li")[0] && e.target.value == num || e.target == $(".thumbnail li")[num]){
        $(".fullsolid").css({"opacity":"0.8","pointer-events":"auto"});
        $(".detail").css({"display":"block","z-index":99}).delay(300).animate({"opacity":1});
        $(".detail").scrollTop(0).load(`./data/${num+1}.html`);
        $(".fa-times").css({"display":"block","z-index":"99"});
      }
    }

    for(var i=0;i<$(".thumbnail li").length;i++){

      thumbnail_slide(i)
    };

    if(e.target == $(".slide li")[0]){
      $(".fullsolid").css({"opacity":"0.8","pointer-events":"auto"});
      $(".thumbnail li").css({"display":"inline-block"});
      $(".button li").css({"background":"#ddddde","color":"black"});
      $(".button li").eq(0).css({"background":"#097c25","color":"white"});
    }

    if(e.target == $(".fullsolid")[0]||e.target == $(".fa-times")[0]||e.target==$("nav i")[0]){
      $(".navwrap").stop().animate({"left":"-100%"},500);
      $(".fullsolid").css({"opacity":"0","pointer-events":"none"});
      $(".detail").css({"display":"none","z-index":-1,"opacity":0});
      $(".fa-times").css({"display":"none","z-index":"-1"});
    }
    if(e.target == $("nav i")[0]){
      $(".navwrap").stop().animate({"left":0},500);
      $(".fullsolid").css({"opacity":"0.8","pointer-events":"auto"});
    }else if(e.target == $(".navwrap")[0] || e.target == $(".navwrap a")[0] || e.target == $(".navwrap a")[1] || e.target == $(".navwrap a")[2]){
      $(".navwrap").stop().animate({"left":"-100%"},500);
      $(".fullsolid").css({"opacity":"0","pointer-events":"none"});
    }
  })

  $(window).keydown(function(e){
    if(e.keyCode == 27 || 13){
      $(".navwrap").stop().animate({"left":"-100%"},500);
      $(".fullsolid").css({"opacity":"0","pointer-events":"none"});
      $(".detail").css({"display":"none","z-index":-1,"opacity":0});
      $(".fa-times").css({"display":"none","z-index":"-1"});
    }
  })

  setInterval(function(){
    var x = $(".slide ul li").width();
    $(".slide ul").stop().animate({"margin-left":-x},function(){
      $(".slide ul li").first().appendTo(".slide ul");
      $(this).css({"margin-left":0});
    });
  },7000);

  $(".right").click(function(){
    var x = $(".slide ul li").width();
    $(".slide ul").stop().animate({"margin-left":-x},function(){
      $(".slide ul li").first().appendTo(".slide ul");
      $(this).css({"margin-left":0});
    });
  })

  $(".button li").click(function(e){
    $(".button li").css({"background":"#ddddde","color":"black"});
    $(this).css({"background":"#097c25","color":"white"});
    $(".thumbnail li").css({"display":"none","opacity":0}).animate({"opacity":1});

    function s(num){
      if(e.target.value == num){
        for(var i=0;i<$(".thumbnail li").length;i++){
          if($(".thumbnail li")[i].value == num){
            $(".thumbnail li")[i].style.display = "inline-block";
          }
        }
      }
    }
    if(e.target.value ==0){
      $(".thumbnail li").css({"display":"inline-block"});
    }
    for(var i=1;i<6;i++){
        s(i)
    }
  })
})
