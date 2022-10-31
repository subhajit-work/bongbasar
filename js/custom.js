$(document).ready(function(){
	// Banner Slick slider
    $(".banner-slider").slick({
      dots: false,
      infinite: true,
      autoplay:true,
      fade: true,
      adaptiveHeight: true,
      nextArrow: '<i class="slick-next wow shake"></i>',
      prevArrow: '<i class="slick-prev wow shake"></i>',
    });
  // End banner slick-slider

  /*Gallery slider start*/
    $(".product-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      adaptiveHeight: true,
      nextArrow: '<i class="slick-next wow shake"></i>',
      prevArrow: '<i class="slick-prev wow shake"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  /*Gallery slider end*/

  /*Seller slider start*/
    $(".seller-slider").slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  /*Seller Slider end*/

  /*happy-customers slider start*/
    $(".massage-slider").slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      adaptiveHeight: true,
      cssEase: 'linear',
      autoplay: true,
    });
        
  /*Happy customers slider end*/

  /*Product view gallery start*/
    /*// add all to same gallery
    $(".gallery a").attr("data-fancybox","mygallery");
    // assign captions and title from alt-attributes of images:
    $(".gallery a").each(function(){
      $(this).attr("data-caption", $(this).find("img").attr("alt"));
      $(this).attr("title", $(this).find("img").attr("alt"));
    });
    // start fancybox:
    $(".gallery a").fancybox();*/
  /*Product view gallery end*/

  /*Product Show gallery start*/
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: true,
      centerMode: true,
      adaptiveHeight: true,
      focusOnSelect: true
    });
  /*Product show gallery end*/

  /*----------Side filter bar start----------*/
    // const $button  = document.querySelector('#sidebar-toggle');
    // const $wrapper = document.querySelector('#wrapper');

    // $button.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   $wrapper.classList.toggle('toggled');
    // });

    $("#sidebar-toggle").click(function(){
      $("#wrapper").toggleClass("toggled");
    });

  /*----------Side filter bar end----------*/

  /*----Mobile view search menu open start----*/
    $("#openSearch").click(function(){
      $("#myNavbar").toggleClass("open");
    });
  /*Mobile view search menu end*/

  /*---------Side nav accordian start---------*/
    $( "#accordion" ).accordion({
      heightStyle: "content",
      active:false,
      collapsible: true,
      header:"div.accordianheader"
    });
    /*Side nav accordian end*/

    /*---------More menu sidebar start---------*/
      /*$(".openClose").click(function(){
        $(".more-options").toggleClass("active");
      });*/

      $('html').click(function() {
          $('.more-files-directory').hide();
      })

      $('.more-options').click(function(e){
           e.stopPropagation();
      });

      $('.openClose').click(function(e) {
       $('.more-files-directory').toggle();
      });

    /*More menu side bar end*/

    /*Back to top start*/
      var btn = $('#back-to-top');

      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });

      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });
    /*Back to top end*/
});

jQuery(document).ready(function($) {
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });
});

/* Increment product quantity  start*/
  //Up Down arrows for quantity field
  var qtyMin,
  qtyMax,
  qtyField,
  qtyVal;
  $('.icon-minus-squared').on('click', function() {
     qtyField = $(this).next('input[type=number]');
     qtyMin = parseInt($(qtyField).attr('min'));
     qtyVal = parseInt($(qtyField).val());
     if (qtyVal > qtyMin) {
         qtyVal--;
         $(qtyField).val(qtyVal);
         $(this).siblings('.icon-plus-squared').removeClass('off');
         if (qtyVal === qtyMin) {
             $(this).addClass('off');
         }
     }
  });
  $('.icon-plus-squared').on('click', function() {
     qtyField = $(this).prev('input[type=number]');
     qtyMax = parseInt($(qtyField).attr('max'));
     qtyVal = parseInt($(qtyField).val());
     if (qtyVal < qtyMax) {
         qtyVal++;
         $(qtyField).val(qtyVal);
         $(this).siblings('.icon-minus-squared').removeClass('off');
         if (qtyVal === qtyMax) {
             $(this).addClass('off');
         }
     }
  });

  //Validate numeric range of number fields (for quantity input
  $('input[type=number]').on('blur', function () {
      var $this = $(this);
      if ($this.attr('min').length > 0 && $this.attr('max').length > 0) {
          vQty = parseInt($this.val()),
          vMin = $this.attr('min'),
          vMax = $this.attr('max');
          if (!$.isNumeric(vQty)) {
              $this.val(vMin);
            $('.icon-plus-squared').removeClass('off')
            $('.icon-minus-squared').addClass('off')
          }
          else if (vQty < vMin) {
              $this.val(vMin);
            $('.icon-plus-squared').removeClass('off')
            $('.icon-minus-squared').addClass('off')
          }
          else if (vQty > vMax) {
              $this.val(vMax);
            $('.icon-minus-squared').removeClass('off')
            $('.icon-plus-squared').addClass('off')
          }
          else { return; }
      }
  });

/* Increment product quantity  emd*/

/*Give star rating start*/
  var stars = $(".star__item");
  var starsActive;
  var starsSelect;
    
  stars.hover(function(el) {
    starsActive = stars.slice(0, $(this).index()+1);
    starsActive.addClass("star__item_active");
  },
  function(){
    stars.removeClass("star__item_active");
  });

  stars.on("click", function() {
    stars.removeClass("star__item_select");
    starsActive.addClass("star__item_select");
    starsSelect = starsActive;
  });
/*Give star rating end*/


/*Like & dislike start*/
  /*var btn1 = document.querySelector('#green');
  var btn2 = document.querySelector('#red');

  btn1.addEventListener('click', function() {
    
      if (btn2.classList.contains('red')) {
        btn2.classList.remove('red');
      } 
    this.classList.toggle('green');
    
  });

  btn2.addEventListener('click', function() {
    
      if (btn1.classList.contains('green')) {
        btn1.classList.remove('green');
      } 
    this.classList.toggle('red');
    
  });*/

/*Like & dislike end*/

/*Like & Dislike Counter start*/
  var lClicks = 0;
  var dClicks = 0;

  $(".likes").on("click", function(){
    lClicks += 1;
      document.getElementById("l-counter").innerHTML = lClicks;
  })

  $(".dislikes").on("click", function(){
    dClicks += 1;
      document.getElementById("d-counter").innerHTML = dClicks;
  })
/*Like & Dislike Counter end*/

/*---------Window on load loader start---------*/
  setTimeout(function(){
    $('body').addClass('loaded');
  }, 500);
/*Window on load loader end*/

/* -0-----Custom select dropdown js start-0-----*/
  var x, i, j, l, ll, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
// Custom select dropdown js End