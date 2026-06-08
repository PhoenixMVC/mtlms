jQuery(document).ready(function($) {
  "use strict";

  //Havnor Sticky Header Script
  $('.hanor-sticky').sticky ({
    topSpacing: 0,
    zIndex: 4
  });

  // Map Tab scroll
  var $header_height_main = $(".hanor-header").outerHeight()+30;
  var $header_height = $(".hanor-header").outerHeight();
  if ($(window).width() >= 479) {
    $('.each-location-wrap a').on('click',function() {   // on button click
      $('html, body').animate({
        scrollTop: $(".each-location-wrap a").offset().top - $header_height_main
      }, 1000);                 // in 1000 ms (1 second)
    });
  } else {
    $('.each-location-wrap a').on('click',function() {   // on button click
      $('html, body').animate({
        scrollTop: $(".hanor-map-tab-content").offset().top - $header_height
      }, 1000);                 // in 1000 ms (1 second)
    });
  }

  // Havnor Navigation Hover Script
  $('.has-dropdown').on ({
    mouseenter : function() {
      $(this).find('ul.dropdown-nav').first().stop(true, true).fadeIn();
    },
    mouseleave : function() {
      $(this).find('ul.dropdown-nav').first().stop(true, true).fadeOut();
    }
  });
  $('li.has-dropdown ul.dropdown-nav li.has-dropdown').addClass('sub');

  $( ".woocommerce .products li.product a.button" ).wrapInner(function() {
    return "<span></span>";
  });

  /* Side Menu */
  $('.hanor-toggle').on('click',function() {
    $('.hanor-side-navigation, .hanor-navigation-overlay').toggleClass('open');
  });
  $('.navigation-wrap .close-btn a, .hanor-navigation-overlay').on('click',function() {
    $('.hanor-side-navigation, .hanor-navigation-overlay').removeClass('open');
  });

  //Hanor Add And Remove Class Script
  $(document).on('click', function(e) {
    if ($(e.target).is('.hanor-navi-wrap, .hanor-navi-wrap *, .navi-toggle, .navi-toggle *, .navi-wrap-inner, .hanor-header, .hanor-header *, .navi-wrap-inner *') === false) {
      $('.hanor-main-wrap').removeClass('navi-open');
      $('.hanor-navi-wrap').removeClass('open');
      $('.hanor-navi-over').removeClass('open');
      $('.navi-toggle a').removeClass('open');
    }
  });

  $('.navi-toggle a').on('click', function () {
    $('.hanor-main-wrap').toggleClass('navi-open');
    $('.hanor-navi-wrap').toggleClass('open');
    $('.hanor-navi-over').toggleClass('open');
    $('.navi-toggle a').toggleClass('open');
  });

  $('.hanor-header .hanor-toggle-link').on('click', function () {
    $('html').addClass('fullscreen-navigation-open');
  });
  $('.close-btn').on('click', function () {
    $('html').removeClass('fullscreen-navigation-open');
    $('.hanor-main-wrap').toggleClass('navi-open');
    $('.hanor-navi-wrap').toggleClass('open');
    $('.hanor-navi-over').toggleClass('open');
    $('.navi-toggle a').toggleClass('open');
  });

  // Site Credit Hover Script
  $('.site-credit-link a').mouseenter(function(){
   $(this).find('.default-text').hide();
   $(this).find('.change-text').show();
  });
  $('.site-credit-link a').mouseleave(function(){
   $(this).find('.default-text').show();
   $(this).find('.change-text').hide();
  });

    // WPML Dropdown
    $('.hanor-topdd-content').hide();
    $('.hanor-top-dropdown').each(function() {

      var $this    = $(this),
          $open    = $this.find('.hanor-top-active'),
          $content = $this.find('.hanor-topdd-content');

      $open.on('click', function( e ) {

        e.preventDefault();
        e.stopPropagation();

        if ($( ".hanor-top-active i" ).hasClass( "fa-angle-down" ) ){
          $( ".hanor-top-active i" ).removeClass('fa-angle-down');
          $( ".hanor-top-active i" ).addClass('fa-angle-up');
        } else {
          $( ".hanor-top-active i" ).addClass('fa-angle-down');
          $( ".hanor-top-active i" ).removeClass('fa-angle-up');
        }
        $(document.body).on('click', function () {
          $( ".hanor-top-active i" ).addClass('fa-angle-down');
          $( ".hanor-top-active i" ).removeClass('fa-angle-up');
        });

        if( $content.hasClass('hanor-opened') ) {
          $content.removeClass('hanor-opened').fadeOut('fast');
        } else {
          $content.trigger('close-modals').addClass('hanor-opened').fadeIn('fast');
          $content.find('input').focus();
        }

      });

      $content.on('click', function ( event ) {

        if (event.stopPropagation) {
          event.stopPropagation();
        } else if ( window.event ) {
          window.event.cancelBubble = true;
        }

      });

      $(document.body).on('click close-modals', function () {
        $('.hanor-topdd-content').removeClass('hanor-opened').fadeOut('fast');
      });

    });

  //Havnor Search Box Script
  $('html, .search-close').on('click', function () {
    $('.search-link .search-box').fadeOut(300).removeClass('open');
  });
  $('.search-link').on('click', function (e) {
    e.stopPropagation();
    $('.search-link .search-box').find('input[type="text"]').focus();
  });
  $('.search-link a').on('click', function () {
    $('.search-link .search-box').fadeToggle(300).toggleClass('open');
  });

  $('.hanor-sidebar-toggle').on('click', function() {
    $('.hanor-toggle-link').toggleClass('active');
    $('.has-sidebarnav .hanor-main-wrap').toggleClass('sidebarnav-open');
  });

  //Havnor Add Class To Categories Script
  $('.hanor-btns-group.story-cat a').addClass('hanor-btn cat-btn');
  $('.hanor-btns-group.story-cat a').contents().wrap('<span/>');
  if ($('div').hasClass('hanor-services')) {
    $('.hanor-services').parents('.vc_column-inner').addClass('service-col');
  }

  //Havnor Get Window Height, Width And Parallax Script
  $(window).resize(function() {
    // Mean Toggle Top Value
    var $meantop = $('.hanor-header').outerHeight()/2;
    $('.mean-container a.meanmenu-reveal').css('top', $meantop );


    $('html:has(.hanor-sidebar-nav)').addClass('has-sidebarnav');
    $('.process-separator').css('width', $('.hanor-process [class*="col-"]').width()-10);
    if (screen.width >= 992) {
      $('.hanor-sticky-footer .main-wrap-inner').css('margin-bottom', $('.hanor-footer').outerHeight());
    }
    if (screen.width >= 768) {
      $('.hanor-parallax').jarallax ({
        speed: 0.6,
      });
      $('.hanor-topbar .search-box').css('top', $('.hanor-topbar').outerHeight()-11);
    }
    $('.hanor-transparent-header .caption-wrap').css('padding-top', $('.hanor-header').outerHeight());
    if ($(window).width() >= 991) {
      jQuery('.hanor-windowheight').height(jQuery(window).height());
    }

    if ($(window).width() <= 991) {
      $( ".about-partners-item" ).wrapAll( "<div class='about-partners-item-wrap' />");
      $(".about-partners-item-wrap").appendTo(".hanor-technology-partners .row");
      $('.partners-item').on('click', function () {
        $("#D" + $(this).attr("id")).appendTo(this);
      });
    }
    if ($(window).width() <= 1533) {
      $('.header-hanor-style-one .hanor-header [class*="col-md-6"]').appendTo(".header-hanor-style-one .hanor-header .container .row");
    } else {
      $('.header-hanor-style-one .hanor-header [class*="col-md-6"]').insertAfter(".header-hanor-style-one .hanor-header .container .row .header-four-left");
    }


  });
  $(window).trigger('resize');

  if ($('.hanor-topbar div').hasClass('search-link')) {
    $('.header-center-wrap .search-box').css('visibility', 'hidden');
  }
  if ($('.hanor-header-right div').hasClass('header-buttons')) {
    $('.hanor-header-right').addClass('hav-btns');
  } else {
    $('.hanor-header-right').addClass('dhav-btns');
  }

  //Havnor Browser Detect Script
  if (navigator.userAgent.search('Safari') >= 0) {
    $('html').addClass('safari')
  }

  //Havnor Insert Content Script
  if ($('.hanor-main-wrap').has('.hanor-transparent-header')) {
    $('<span class="menu-separator"></span>').insertAfter('.hanor-transparent-header .hanor-header-right .hanor-navigation > ul > li > a .menu-text');
  }

  //Havnor Popup Picture Script
  $('.hanor-popup').magnificPopup ({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    closeMarkup:'<div class="mfp-close" title="%title%"></div>',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
      }
    },
    gallery: {
      enabled: true,
      arrowMarkup:'<div title="%title%" class="mfp-arrow mfp-arrow-%dir%"></div>',
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('*');
      }
    }
  });

  //Havnor Popup Video Script
  $('.hanor-popup-video').magnificPopup ({
    mainClass: 'mfp-fade',
    type: 'iframe',
    closeMarkup:'<div class="mfp-close" title="%title%"></div>',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: function(url) {
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if ( !m || !m[1] ) return null;
            return m[1];
          },
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: function(url) {
            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
            if ( !m || !m[5] ) return null;
            return m[5];
          },
          src: 'https://player.vimeo.com/video/%id%?autoplay=1'
        }
      }
    }
  });

  // Similar Jobs Accordion
  $(".similar-job .panel-default").on('click', function (e) {
    $(this).children('.panel-collapse').slideToggle();
    $('.panel-default').not(this).find('.panel-collapse').slideUp();  //swap the display of the main content with slide action
  });

  $(".panel-default").on('click', function (e) {
    if($(this).hasClass('actived')) {
      $(".panel-default").removeClass('actived');
    } else {
      $(".panel-default").removeClass('actived');
      $(this).addClass('actived');
    }
  });

  // Lazy Load Image
  $('.hanor-image img').lazy({
    effect: "fadeIn",
    effectTime: 500,
    visibleOnly: true,
    threshold: 0
  });

  $(window).load(function() {

    // onpage nave hash link animation
    var headerheight;
    var $wpAdminBar = $('#wpadminbar');
    if ($wpAdminBar.length) {
      headerheight = $(".hanor-header").outerHeight()+$wpAdminBar.height();
    } else {
      headerheight = $(".hanor-header").outerHeight();
    }

    $(".smooth-scroll a[href^='#']").on('click', function (e) {
      var position = $($(this).attr("href")).offset().top-headerheight;
      $("body, html").animate({
        scrollTop: position
      }, 1000 );
      e.preventDefault();
    });

    $(".smooth-scroll .mean-container a[href^='#']").on('click', function (e) {
      $(".meanmenu-reveal").click();
    });

    // Mean nav margin top
    var $headerHeight = $('.hanor-header').outerHeight();
    $('.mean-nav').css('margin-top', $headerHeight );
    // Mean Toggle Top Value
    var $meantop = $('.hanor-header').outerHeight()/2;
    $('.mean-container a.meanmenu-reveal').css('top', $meantop );
    // Header Three
    var $meantop_three = $('.hanor-header-three .hanor-sidebar-nav').outerHeight()/2;
    $('.hanor-header-three .mean-container a.meanmenu-reveal').css('top', $meantop_three );

    $('img.sec-image').show();
    // Vertical scroll
    $('.vertical-scroll').enscroll ({
      showOnHover: true,
      verticalScrolling: true,
    });
    //Havnor Hover Script
    $(".help-item, .service-item, .hanor-page-share, .partners-item, .client-item, .blog-item, .mate-item, .work-item, .plan-item, .process-item, .hanor-author-info, .feature-item, .figuress-item, .wedo-active-wrap").mouseenter(function(){
      $(this).addClass('hanor-hover');
    });
    $(".help-item, .service-item, .hanor-page-share, .partners-item, .client-item, .blog-item, .mate-item, .work-item, .plan-item, .process-item, .hanor-author-info, .feature-item, .figuress-item, .wedo-active-wrap").mouseleave(function(){
      $(this).removeClass('hanor-hover');
    });

    // Livesay countdown script
    $('.hanor-countdown').each( function() {
      var $countdown = $(this);
      var date = $countdown.data("date");
      var austDay = new Date();
      austDay = new Date(date);
      $('.hanor-countdown').countdown({until: austDay});
    });
    // Map Tab
    $( ".hanor-map-tab-content .tab-pane:first-child" ).addClass( "active in" );
    //Havnor Set Equal Height Script
    $('.hanor-item, .woocommerce ul.products li').matchHeight ({
      property: 'height'
    });
    // Partners Toggle
    $('.partners-item').on('click', function () {
      $('.about-partners-item').not("#D" + $(this).attr("id")).slideUp(300);
      if ($(this).hasClass('partners-active')) {
        $(this).removeClass('partners-active');
        $("#D" + $(this).attr("id")).slideUp(300);
      } else {
        $('.partners-item').removeClass('partners-active');
        $(this).addClass('partners-active');
        $("#D" + $(this).attr("id")).slideToggle(300);
      }
    });
    $('.logo-wraper').each(function() {
      $(this).parent().find("#D" + $(this).attr("id")).insertAfter($(this));
    });

    $(".wedo-active-wrap").mouseenter(function(){
      $(this).prevAll(".wedo-active-wrap").addClass("hover-active");
    });
    $(".wedo-active-wrap").mouseleave(function(){
      $(this).prevAll(".wedo-active-wrap").removeClass("hover-active");
    });

    $(".process-item-wrap").mouseenter(function(){
      $(this).prevAll(".process-item-wrap").addClass("hover-active");
    });
    $(".process-item-wrap").mouseleave(function(){
      $(this).prevAll(".process-item-wrap").removeClass("hover-active");
    });

    document.querySelectorAll('.cocoen').forEach(function(element){
      new Cocoen(element);
    });

    //Havnor Progress Bar Script
    $('.progress-item, .circle-progressbar').waypoint(function() {
      $('.progress').each(function() {
        var $this = $(this);
        $('.progress-bar', $this).animate ({
          width:$('.progress-bar', $this).attr('data-percent')
        },1400);
      });
      $('.circle-progressbar').each(function() {
      var $circle = $(this);
      var $fill_color = ($circle.data('color') !== undefined) ? $circle.data('color') : '#4189dd';
      var $empty_fill_color = ($circle.data('empty') !== undefined) ? $circle.data('empty') : '#f8f8f8';
      $circle.circleProgress ({
        size: 172,
        fill: {
          color: $fill_color,
        },
        thickness: 5,
        emptyFill: $empty_fill_color,
        startAngle: 300,
        reverse: true,
        lineCap: 'squre',
        animation: {
          duration: 1800
        }
      })
      .on('circle-animation-progress', function (event, progress, stepValue) {
        $(this).find('.circle-counter').text((stepValue * 100).toFixed(0));
      });
      });
      $('.small-circle-progressbar .circle-progressbar').circleProgress ({
        size: 115,
        thickness: 4,
      })
    },
    {
      triggerOnce: true,
      offset: '100%'
    });

    //Havnor Owl Carousel Slider Script
    $('.owl-carousel').each( function() {
      var $carousel = $(this);
      var $items = ($carousel.data('items') !== undefined) ? $carousel.data('items') : 1;
      var $items_tablet = ($carousel.data('items-tablet') !== undefined) ? $carousel.data('items-tablet') : 2;
      var $items_mobile_landscape = ($carousel.data('items-mobile-landscape') !== undefined) ? $carousel.data('items-mobile-landscape') : 1;
      var $items_mobile_portrait = ($carousel.data('items-mobile-portrait') !== undefined) ? $carousel.data('items-mobile-portrait') : 1;
      $carousel.owlCarousel ({
        loop : ($carousel.data('loop') !== undefined) ? $carousel.data('loop') : true,
        items : $carousel.data('items'),
        margin : ($carousel.data('margin') !== undefined) ? $carousel.data('margin') : 0,
        dots : ($carousel.data('dots') !== undefined) ? $carousel.data('dots') : false,
        nav : ($carousel.data('nav') !== undefined) ? $carousel.data('nav') : false,
        navText : ["<div class='slider-no-current'><span class='current-no'></span><span class='total-no'></span></div><span class='current-monials'></span>", "<div class='slider-no-next'></div><span class='next-monials'></span>"],
        autoplay : ($carousel.data('autoplay') !== undefined) ? $carousel.data('autoplay') : false,
        autoplayTimeout : ($carousel.data('autoplay-timeout') !== undefined) ? $carousel.data('autoplay-timeout') : 5000,
        animateIn : ($carousel.data('animatein') !== undefined) ? $carousel.data('animatein') : false,
        animateOut : ($carousel.data('animateout') !== undefined) ? $carousel.data('animateout') : false,
        mouseDrag : ($carousel.data('mouse-drag') !== undefined) ? $carousel.data('mouse-drag') : false,
        autoWidth : ($carousel.data('auto-width') !== undefined) ? $carousel.data('auto-width') : false,
        autoHeight : ($carousel.data('auto-height') !== undefined) ? $carousel.data('auto-height') : false,
        center : ($carousel.data('center') !== undefined) ? $carousel.data('center') : false,
        // RTL Change
        rtl : ($carousel.data('rtl') !== undefined) ? $carousel.data('rtl') : false,
        responsiveClass: true,
        dotsEachNumber: true,
        smartSpeed: 600,
        responsive : {
          0 : {
            items : $items_mobile_portrait,
          },
          480 : {
            items : $items_mobile_landscape,
          },
          768 : {
            items : $items_tablet,
          },
          1024 : {
            items : $items,
          }
        }
      });
      var totLength = $('.owl-dot', $carousel).length;
      $('.total-no', $carousel).html(totLength);
      $('.current-no', $carousel).html(totLength);
      $carousel.owlCarousel();
      $('.current-no', $carousel).html(1);
      $carousel.on('changed.owl.carousel', function(event) {
        var total_items = event.page.count;
        var currentNum = event.page.index + 1;
        $('.total-no', $carousel ).html(total_items);
        $('.current-no', $carousel).html(currentNum);
        $(".help-item, .service-item, .hanor-page-share, .partners-item, .client-item, .blog-item, .mate-item, .work-item, .plan-item, .process-item, .hanor-author-info, .feature-item, .figuress-item, .wedo-active-wrap").mouseenter(function(){
          $(this).addClass('hanor-hover');
        });
        $(".help-item, .service-item, .hanor-page-share, .partners-item, .client-item, .blog-item, .mate-item, .work-item, .plan-item, .process-item, .hanor-author-info, .feature-item, .figuress-item, .wedo-active-wrap").mouseleave(function(){
          $(this).removeClass('hanor-hover');
        });
      });
    });

    // Accordion Active Only One At a Time.
    $('.collapse-others').each(function() {
      var $this = $(this);
      $('.collapse', $this).on('show.bs.collapse', function (e) {
        var all = $this.find('.collapse');
        var actives = $this.find('.collapsing, .collapse.in');
        all.each(function (index, element) {
          $(element).collapse('hide');
        })
        actives.each(function (index, element) {
          $(element).collapse('show');
        })
      });
    });

    //Havnor Flexslide Script
    $('.main-flexslider').each( function() {
      var $flex = $(this);
      var $nav = ($flex.data('nav') !== undefined) ? $flex.data('nav') : false;
      $('.main-flexslider').flexslider ({
        animation: 'slide',
        controlNav: false,
        directionNav: $nav,
        animationLoop: false,
        slideshow: false,
        prevText: '',
        nextText: '',
        sync: '.thumb-flexslider',
        // asNavFor: '.thumb-flexslider'
      });
    });
    $('.thumb-flexslider').flexslider ({
      animation: 'slide',
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      prevText: '',
      nextText: '',
      itemWidth: 56,
      itemMargin: false,
      asNavFor: '.main-flexslider'
    });

    //Havnor Masonry Script
    if ($('div').hasClass('hanor-masonry')) {
    var $grid = $('.hanor-masonry').isotope ({
      itemSelector: '.masonry-item',
      layoutMode: 'packery',
      percentPosition: true,
      isFitWidth: true,
    });
    var $toggle = $('.hanor-toggle-services .hanor-masonry');
    $toggle.on('click', '.toggle-service-title a, .service-switch, .toggle-service-item .hanor-icon', function() {
      $(this)
        .parents('.toggle-service-info')
        .find(".service-toggle-content")
        .slideToggle({ duration: 300,start: function(){ $toggle.isotope('layout') },done: function(){ $toggle.isotope('layout') } });
      $(this)
        .parents('.toggle-service-info')
        .toggleClass('service-active');
    });
    var filterFns = {
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
      }
    };
    $('.masonry-filters').on('click', 'li a', function() {
      var filterValue = $(this).attr('data-filter');
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({
        filter: filterValue
      });
    });
    $('.masonry-filters').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'li a', function() {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  // Masonry Inside Nav Tab
  $('.nav-tabs').on('click', 'li a', function() {
    var $grid = $('.hanor-masonry').isotope ();
    setTimeout(function () {
    $('.nav-tabs li.active a').click();
    }, 100);
  });

    //Havnor Loader Script
    $('.hanor-preloader').fadeOut(500);
    //Havnor Swiper Slider Script
    var animEndEv = 'webkitAnimationEnd animationend';
    var swipermw = $('.swiper-container.swiper-mousewheel').length ? true : false;
    var swiperkb = $('.swiper-container.swiper-keyboard').length ? true : false;
    var swipercentered = $('.swiper-container.swiper-center').length ? true : false;
    var swiperautoplay = $('.swiper-container').data('autoplay');
    var swiperinterval = $('.swiper-container').data('interval');
    var swiperloop = $('.swiper-container').data('loop');
    var swipermousedrag = $('.swiper-container').data('mousedrag');
    var swiperclikable = $('.swiper-container').data('clickpage');
    var swiperspeed = $('.swiper-container').data('speed');
    var swiperinteraction = $('.swiper-container').data('interaction');
    var swipereffect = $('.swiper-container').data('effect');
    swiperinterval = swiperinterval ? swiperinterval : 7000;
    swiperautoplay = swiperautoplay ? swiperinterval : false;

    //Havnor Swiper Slides Script
    var autoplay = swiperinterval;
    var swiper = new Swiper('.swiper-slides', {
      autoplayDisableOnInteraction: swiperinteraction,
      effect: swipereffect,
      speed: swiperspeed,
      loop: swiperloop,
      paginationClickable: swiperclikable,
      watchSlidesProgress: true,
      autoplay: swiperautoplay,
      simulateTouch: swipermousedrag,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      pagination: '.swiper-pagination',
      mousewheelControl: swipermw,
      keyboardControl: swiperkb,
      onSlideChangeStart: function(s) {
        var currentSlide = $(s.slides[s.activeIndex]);
        var elems = currentSlide.find('.animated')
        elems.each(function() {
          var $this = $(this);
          var animationType = $this.data('animation');
          $this.addClass(animationType, 100).on(animEndEv, function() {
            $this.removeClass(animationType);
          });
        });
      },
      onSlideChangeEnd: function(s) {
        var currentSlide = $(s.slides[s.activeIndex]);
      }
    });

    // Typed String
     Typed.new('#typed', {
      stringsElement: document.getElementById('typed-strings'),
      typeSpeed: 100,
      backDelay: 1500,
      loop: true,
      contentType: 'html',
      loopCount: null,
      cursorChar:"",
      callback: function() {
        foo();
      },
      resetCallback: function() {
        newTyped();
      }
    });
    var resetElement = document.querySelector('.reset');
    if(resetElement) {
      resetElement.addEventListener('click', function() {
        document.getElementById('typed')._typed.reset();
      });
    }
    function newTyped() {}
    function foo() {
      console.log('Callback');
    }

  // Range Slider Script
  $('[type=range]').each( function() {
      var $rangeSlider = $(this);
      var $mainValue = $rangeSlider.attr('value');
      var $minValue = ($rangeSlider.attr('min') !== undefined) ? $rangeSlider.attr('min') : 0;
      var $maxValue = ($rangeSlider.attr('max') !== undefined) ? $rangeSlider.attr('max') : 1500;
      var $stepValue = ($rangeSlider.attr('step') !== undefined) ? $rangeSlider.attr('step') : 1;
      $rangeSlider.slider({
        tooltip_position: 'bottom',
        value: $mainValue,
        min: $minValue,
        max: $maxValue,
        step: $stepValue,
      });
      $rangeSlider.slider();
      $rangeSlider.on('slide', function(slideEvt) {
        $('.square-value > input, .square-value').val(slideEvt.value);
      });
    });

  // ParticlesJS Config.
  if ($('div').hasClass('hav-particles')) {
  var $havnor_particles = $('.hanor-banner div[id]');
  var dotColor = $('.hanor-banner').data('dotcolor');
  var lineColor = $('.hanor-banner').data('linecolor');
  var dotCount = $('.hanor-banner').data('dotcount');
  var dotSpeed = $('.hanor-banner').data('dotspeed');
  if($havnor_particles.length) {
   particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": dotCount,
        "density": {
          "enable": true,
          "value_area": 1580
        }
      },
      "color": {
        "value": dotColor
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": lineColor,
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": dotSpeed,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
          "hide_card": false,
          "background_color": "#434462",

          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }

    });
  }
}

  //Havnor Counter Script
  $('.hanor-counter').each( function() {
    var $counter = $(this);
    var swiperdelay = $counter.data('delay');
    var swipertime = $counter.data('time');
    $counter.counterUp ({
      delay: swiperdelay,
      time: swipertime,
    });
  });

    /* BMI Calculator*/
    var result = 0;
    if($('button').hasClass('smit')){
    document.getElementById('smit').onclick = function () {
      $('.results-wrap').addClass('result-open');
      var age = $('#age').val();
      var weight = $('#weight').val();
      var height = $('#height').val() * 0.01;
      // male - female
      var gender = $('#gender').val();
      if (age == '' || weight == '' || height == '') {
          alert("Please fill all form elements");
      } else {
        var formula = weight / (height * height);

        if (formula < 18.5) {
          // UnderWeight
          result = "Your BMI: <span>"+formula.toFixed(2)+"</span><br> You Are Under Weight";
        } else if (formula >= 18.5 && formula < 24.9) {
          // Normal
          result = "Your BMI: <span>"+formula.toFixed(2)+"</span><br> You Are Normal Weighted";
        } else if (formula >= 25 && formula < 29.9) {
          // Overweight
          result = "Your BMI: <span>"+formula.toFixed(2)+"</span><br> You Are Over Weight";
        } else if (formula >= 30) {
          // Obese
          result = "Your BMI: <span>"+formula.toFixed(2)+"</span><br> You Are Obese";
        }

        // BMR Calculation
        var results = 0;
        var MaintenanceCalories = 0;
        var activitylevel = $("#activitylevel").val();

        if(gender=="male") {
            var val1 = 13.7 * weight;
            var val2 = 5 * height;
            var val3 = 6.8 * age;
            results = 66 + val1 + val2 - val3;
            var val4 = activitylevel;
        } else if (gender=="female")  {
            val1 = 9.6 * weight;
            val2 = 1.8 * height;
            val3 = 4.7 * age;
            results = 655 + val1 + val2 - val3;
            var val4 = activitylevel;
        }

        if(val4=="l") {
          MaintenanceCalories = results * 1.2;
        }
        if(val4=="lm") {
          MaintenanceCalories = results * 1.375;
        }
        if(val4=="m") {
          MaintenanceCalories = results * 1.55;
        }
        if(val4=="mh") {
          MaintenanceCalories = results * 1.725;
        } else if(val4=="h") {
          MaintenanceCalories = results * 1.9;
        }
        if ($('h5').hasClass('result')) {
          var Output = document.getElementById("result").innerHTML = result;
        }
        if ($('h5').hasClass('results')) {
          var Output = document.getElementById("results").innerHTML ='Your BMR: <span>' + results.toFixed(2) + '</span>.<br> Your Maintenance Calories are: <span>' + MaintenanceCalories.toFixed(2) + '</span>';
        }

        return Output;
      }

    };
  }


  });


  //Havnor Outside Click Of Div Remove Class Script
  $(document).on('click', function(e) {
    if ($(e.target).is('.hanor-sidebar-nav *, .hanor-sidebar-toggle, .hanor-sidebar-toggle *') === false) {
      $('.hanor-main-wrap').removeClass('sidebarnav-open');
      $('.hanor-full-wrap .hanor-toggle-link').removeClass('active');
    }
  });

  //Havnor Nice Select Script
  $('select').niceSelect();
  $('.hanor-widget.woocommerce select, .woocommerce-billing-fields select, .woocommerce-shipping-fields select').niceSelect('destroy');

  //Havnor Accordion Script
  $('.panel-title a').on('click', function() {
    $(this).parents('.panel-default').siblings().removeClass('active');
    $(this).parents('.panel-default').toggleClass('active');
  });

  //Havnor Hover Direction Animtion Script
  $('.direction-hover .work-item').hoverdir ({
    hoverElem: '.work-info',
    inverse: true,
  });

  //Havnor Sticky Sidebar Script
  $('.hanor-sticky-sidebar').theiaStickySidebar ({
    additionalMarginTop: 130
  });

  //Havnor Floating Sidebar Script
  $(window).scroll(function() {
    var $window = jQuery(window),
    $flotingbar = jQuery('.hanor-floating-sidebar'),
    offset = jQuery('.hanor-mid-wrap').offset(),
    $scrolling = jQuery('.hanor-primary').height(),
    $offsetHeight = jQuery('.hanor-primary').offset(),
    $topHeight = 0;
    if (jQuery('.hanor-floating-sidebar').length > 0) {
      if ($window.width() > 1199) {
        if (($window.scrollTop() + $topHeight) > offset.top) {
          if ($window.scrollTop() + $topHeight + $flotingbar.height() + 50 < $offsetHeight.top + $scrolling) {
            $flotingbar.stop().animate ({
              marginTop: ($window.scrollTop() - offset.top) + $topHeight + 35,
            });
          }
          else {
            $flotingbar.stop().animate ({
              marginTop: ($scrolling - $flotingbar.height() - 80) + 35,
            });
          }
        }
        else {
          $flotingbar.stop().animate ({
            marginTop: 0,
          });
        }
      }
      else {
        $flotingbar.css('margin-top', 0);
      }
    }
     if($('div').hasClass('is-sticky')) {
    $('.sidebar-menu-two').addClass('is-sticky');
  } else {
    $('.sidebar-menu-two').removeClass('is-sticky');
  }
  });

  //Havnor Back Top Script
  if($('div').hasClass('hanor-back-top')) {
    var backtop = $('.hanor-back-top');
    var position = backtop.offset().top;
    $(window).scroll(function() {
      var windowposition = $(window).scrollTop();
      if(windowposition + $(window).height() == $(document).height()) {
        backtop.removeClass('active');
      }
      else if (windowposition > 150) {
        backtop.addClass('active');
      }
      else {
        backtop.removeClass('active');
      }
    });
    jQuery('.hanor-back-top a').on('click', function () {
      jQuery('body,html').animate ({
        scrollTop: 0
      }, 2000);
      return false;
    });
  }


  // Post Slider
  var slickautoplay = $('.featuredPostSlider').data('autoplay');
  var $slickinterval = ($('.featuredPostSlider').data('interval') !== undefined) ? $('.featuredPostSlider').data('interval') : 3000;
  var $slickautoplay = ($('.featuredPostSlider').data('autoplay') !== undefined) ? $('.featuredPostSlider').data('autoplay') : true;
  var $fade_effect = ($('.featuredPostSlider').data('fade') !== undefined) ? $('.featuredPostSlider').data('fade') : false;
  var $slides_to_scroll = ($('.featuredPostSlider').data('toscroll') !== undefined) ? $('.featuredPostSlider').data('toscroll') : 1;

  $('.featuredPostSlider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: $fade_effect,
      autoplay: $slickautoplay,
      autoplaySpeed: $slickinterval,
      adaptiveHeight: true,
      asNavFor: '.slick-pager'
  });
  $('.slick-pager').slick({
      slidesToShow: 3,
      slidesToScroll: $slides_to_scroll,
      nextArrow: $('.pagerNavigation .bottom'),
      prevArrow: $('.pagerNavigation .top'),
      asNavFor: '.featuredPostSlider',
      focusOnSelect: true,
      vertical: true,
      responsive: [{
          breakpoint: 1280,
          settings: {
              slidesToShow: 1,
              adaptiveHeight: true,
              vertical: false
          }
      }]
  });

  // Mean Menu
  var $navmenu = $('nav');
  var $menu_starts = ($navmenu.data('nav') !== undefined) ? $navmenu.data('nav') : 1199;
  $('.mean-menu-parent .hanor-navigation').meanmenu({
    meanMenuContainer: '.hanor-header > .container, .header-hanor-style-three .hanor-header .logo-wraper > .container, .hanor-header-three .sidebar-nav-wrap',
    meanMenuOpen: '<span></span>',
    meanMenuClose: '<span></span>',
    meanExpand: '<i class="fa fa-angle-down"></i>',
    meanContract: '<i class="fa fa-angle-up"></i>',
    meanScreenWidth: $menu_starts,
  });

  // New Script HF
  if ($('div').hasClass('header-hanor-style-one')) {
    if ($('div').hasClass('mean-container')) {
      $('.header-hanor-style-one .hanor-brand').show();
      $('.hanor-header .hanor-brand').insertAfter($('.mean-bar'));
    } else {
      var li_length =  $('.hanor-navigation ul').first().children().size();
      var half_length = li_length/2;
      var final_length = Math.ceil(half_length)
      if (li_length>=2) {
        $('.hanor-navigation ul').first().children('li:nth-child('+final_length+')').addClass('center-point');
      }
      $('.header-hanor-style-one .hanor-brand').show();
      $('.hanor-header .hanor-brand').insertAfter($('.hanor-navigation ul li.center-point'));
    }
  }

  if ($('div').hasClass('mean-container')) {
    $('.header-hanor-style-three').addClass('hav-mean-menu');
  }

});