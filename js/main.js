jQuery(document).ready(function($) {

  $('.tabs').each(function(intex, element) {
    current_tabs = $(this);
    $('.tab-label').each(function(i) {
      var tab_url = $(this).attr('data-url');
      if ($(this).attr('data-url')) {
        $(this).closest('.tab-item').attr("id", tab_url);
        $(this).attr("href", "#" + tab_url);
      } else {
        $(this).closest('.tab-item').attr("id", "tab-" + (i + 1));
        $(this).attr("href", "#tab-" + (i + 1));
      }
    });
    $(this).prepend('<div class="tab-nav line"></div>');
    var tab_buttons = $(element).find('.tab-label');
    $(this).children('.tab-nav').prepend(tab_buttons);

    function loadTab() {
      $(this).parent().children().removeClass("active-btn");
      $(this).addClass("active-btn");
      var tab = $(this).attr("href");
      $(this).parent().parent().find(".tab-item").not(tab).css("display", "none");
      $(this).parent().parent().find(tab).fadeIn();
      $('html,body').animate({
        scrollTop: $(tab).offset().top - 160
      }, 'slow');
      if ($(this).attr('data-url')) {} else {
        return false;
      }
    }
    $(this).find(".tab-nav a").click(loadTab);
    $(this).find('.tab-label').each(function() {
      if ($(this).attr('data-url')) {
        var tab_url = window.location.hash;
        if ($(this).parent().find('a[href="' + tab_url + '"]').length) {
          loadTab.call($(this).parent().find('a[href="' + tab_url + '"]')[0]);
        }
      }
    });
    var url = window.location.hash;
    if ($(url).length) {
      $('html,body').animate({
        scrollTop: $(url).offset().top - 160
      }, 'slow');
    }
  });

  //Slide nav
  $('<div class="slide-nav-button"><div class="nav-icon"><div></div></div></div>').insertBefore(".slide-nav");
  $(".slide-nav-button").click(function() {
    $("body").toggleClass("active-slide-nav");
  });


  //Mobile aside navigation
  $('.aside-nav-text').each(function(index, element) {
    $(element).click(function() {
      $('.aside-nav > ul').toggleClass('show-menu', 'fast');
    });
  });

  //Responsee nav
  $('.top-nav > ul > li ul').each(function(index, element) {
    var count = $(element).find('li').length;
    var content = '<span class="count-number"> ' + count + '</span>';
    $(element).closest('li').children('a').append(content);
  });

  //Mobile aside navigation
  $('.nav-text').click(function() {
    $('.top-nav > ul').toggleClass('show-menu', 'fast');
  });


  //Active item
  var url = window.location.href;
  $('a').filter(function() {
    return this.href == url;
  }).parent('li').addClass('active-item');
  var url = window.location.href;
  $('.aside-nav a').filter(function() {
    return this.href == url;
  }).parent('li').parent('ul').addClass('active-aside-item');
  var url = window.location.href;
  $('.aside-nav a').filter(function() {
    return this.href == url;
  }).parent('li').parent('ul').parent('li').parent('ul').addClass('active-aside-item');
  var url = window.location.href;
  $('.aside-nav a').filter(function() {
    return this.href == url;
  }).parent('li').parent('ul').parent('li').parent('ul').parent('li').parent('ul').addClass('active-aside-item');
});