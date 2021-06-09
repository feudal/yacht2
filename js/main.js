//top-bar
var nav = $('.nav-fixed');

if ($(window).width() < 1024) {
  console.log('fldskjf');
  nav.addClass("nav-fixed--show");
}

$(window).scroll(function() {
  if (($(this).scrollTop() > 125) && ($(window).width() > 1024)) {
    nav.addClass("nav-fixed--show");
  }
  if (($(this).scrollTop() < 125) && ($(window).width() > 1024)) {
    nav.removeClass("nav-fixed--show");
  }

  if ($(window).width() < 1024) {
    nav.addClass("nav-fixed--show");
  }
});


// menu-burger
$('.menu-burger-icon').on('click', function() {
  console.log($('.menu-burger'));
  $('.menu-burger').addClass('menu-burger--active');
});

$('.menu-burger__close').on('click', function() {
  console.log($('.menu-burger'));
  $('.menu-burger').removeClass('menu-burger--active');
});


//list-images
var nr_img = $('.images li:visible').length;
var margin = (nr_img - 1) * 10;

width = ($(window).width() - margin) / nr_img;
$('.images__frame').css('width', width);

$(window).on('resize', function() {
  var nr_img = $('.images li:visible').length;
  var margin = (nr_img - 1) * 10;
  width = ($(window).width() - margin) / nr_img;

  $('.images__frame').css('width', width);
});


//Yachtausstattung
$('.details__title').on('click', function() {
  $(this).parent().find('ul').toggle('fast').css('display', 'flex');
  $(this).parent().find('span').toggle();
});

$('.c-book__card').on('click', function() {
  console.log($(this).find('.book__card-info'));
  $(this).find('div:nth-child(4)').slideToggle(400);
  $(this).find('span').toggle();
  $(this).find('div:nth-child(2)').toggle();
  $(this).find('h3').toggleClass('c-book__title--big');
});

//yacht book
$('.f-book__block-title').on('click', function() {
  $('.f-book__block-title').parent().children().removeClass('f-book__block-title--active');
  $(this).addClass('f-book__block-title--active');
  $('span').removeClass('active');
  $(this).find('span').addClass('active');

  i = $(this).attr("data-id");
  list = $('.f-book__block');

  $('.f-book__block').removeClass('f-book__block--active');
  $(list[i]).addClass('f-book__block--active'); //f-book__block--active
})

//set today date
let today = new Date().toISOString().slice(0, 10)
$('input[type="date"]').val(today);