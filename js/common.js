//スライダー
$(document).on('ready', function() {
  $("#slider").slick({
    autoplay: true, // 自動再生を設定
    arrows:false,
    fade:true,
    autoplaySpeed: 12000, // 自動再生のスピード（ミリ秒単位）
    dots: false, // ドットインジケーターの表示
    //appendArrows: $slider_container,
    // FontAwesomeのクラスを追加
  });
});
document.addEventListener("DOMContentLoaded", function(){
  //fadeIn
  $(function() {
    $(window).scroll(function (){
      //up
      $('.scrolleffect_up').each(function(){
        var POSITION = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > POSITION - windowHeight + 100){ 
          $(this).addClass('scrolleffect_up_run');
        } else {
          $(this).removeClass('scrolleffect_up_run');
        }
      });
      //left
      $('.scrolleffect_left').each(function(){
        var POSITION = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > POSITION - windowHeight + 100){ 
          $(this).addClass('scrolleffect_run');
        } else {
          $(this).removeClass('scrolleffect_run');
        }
      });
      //right
      $('.scrolleffect_right').each(function(){
        var POSITION = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > POSITION - windowHeight + 100){ 
          $(this).addClass('scrolleffect_run');
        } else {
          $(this).removeClass('scrolleffect_run');
        }
      });
      //zoom
      $('.scrolleffect_zoom').each(function(){
        var POSITION = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > POSITION - windowHeight + 100){ 
          $(this).addClass('scrolleffect_zoom_run');
        } else {
          $(this).removeClass('scrolleffect_zoom_run');
        }
      });
    });
  });

  $(function(){
      var effect_pos = 0; // 画面下からどの位置でフェードさせるか(px)
      var effect_move = 50; // どのぐらい要素を動かすか(px)
      var effect_time = 100; // エフェクトの時間(ms) 1秒なら1000

      // フェードする前のcssを定義
      $('.scroll-fade').css({
          opacity: 0,
          transform: 'translateY('+ effect_move +'px)',
          transition: effect_time + 'ms'
      });

      // スクロールまたはロードするたびに実行
      $(window).on('scroll load', function(){
          var scroll_top = $(this).scrollTop();
          var scroll_btm = scroll_top + $(this).height();
          effect_pos = scroll_btm - effect_pos;

          // effect_posがthis_posを超えたとき、エフェクトが発動
          $('.scroll-fade').each( function() {
              var this_pos = $(this).offset().top;
              if ( effect_pos > this_pos ) {
                  $(this).css({
                      opacity: 1,
                      transform: 'translateY(0)'
                  });
              }
          });
      });
  });

  //spのヘッダースクロールで出てくる
  var startPos = 0, winScrollTop = 0;
  // scrollイベントを設定
  window.addEventListener('scroll', function () {
      winScrollTop = this.scrollY;
      if (winScrollTop >= startPos) {
          // 下にスクロールされた時
          if (winScrollTop >= 200) {
              // 下に200pxスクロールされたら隠す
              document.getElementById('fix_header').classList.add('hide');
              document.getElementById('acc_menu').classList.add('hide');
          }
      } else {
          // 上にスクロールされた時
          document.getElementById('fix_header').classList.remove('hide');
          document.getElementById('acc_menu').classList.remove('hide');
      }
      startPos = winScrollTop;
  });
  //SPのヘッダーメニュー開閉関連
  (function() {
    'use strict';
    var scrollpos;
    var fix_body = document.getElementsByTagName('body')[0];
    var fix_header = document.getElementById('fix_header');
    var sp_submenu = document.getElementById('sp_submenu');
    var acc_menu = document.getElementById('acc_menu');
    sp_submenu.addEventListener('click', function() {
      if (fix_body.getAttribute('class') === 'fixed') {
        fix_body.setAttribute('class','');
        fix_body.setAttribute('style','top:0px');
        window.scrollTo(0, scrollpos);
      } else {
        scrollpos = $(window).scrollTop();
        fix_body.setAttribute('class','fixed');
        fix_body.setAttribute('style','top:-' + scrollpos + 'px');
      };
      acc_menu.className = acc_menu.className === 'menu-open' ? '' : 'menu-open';
      fix_header.className = fix_header.className === 'menu-open' ? '' : 'menu-open';
    });
  })();    
});
