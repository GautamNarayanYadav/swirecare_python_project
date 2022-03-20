  $('.sg_app_screen').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        567:{
            items:2
        },
        767:{
            items:3
        },
        991:{
            items:4
        } 
    }
})

  $('.sg_work_screen').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        }
    }
})



  $(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});




  $(document).ready(function(){ 
  $(".sg_btn_w").click(function(){
    $(this).addClass("active");
    $(".sg_btn_u").removeClass("active");
    $(".sg_app_writer").addClass("active");
    $(".sg_app_user").removeClass("active");
  });

  $(".sg_btn_u").click(function(){
    $(this).addClass("active");
    $(".sg_btn_w").removeClass("active");
    $(".sg_app_user").addClass("active");
    $(".sg_app_writer").removeClass("active");
  });
}) 