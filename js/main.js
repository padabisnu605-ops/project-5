$(function () {

  $('#hamburger').on('click', function () {
    $('#navlinks').toggleClass('hidden flex');
    $(this).attr('aria-expanded', $('#navlinks').hasClass('flex'));
  });


  $('[data-tabs]').on('click', 'button', function () {
    $(this).attr('aria-selected', 'true').siblings().attr('aria-selected', 'false');
  });

 
  $('.faq-q').on('click', function () {
    $(this).next('p').slideToggle(200);
    $(this).find('i').toggleClass('fa-plus fa-minus');
  });

  
  $('#next').on('click', function () {
    $('#reviewTrack').animate({ scrollLeft: '+=260' }, 250);
  });
  $('#prev').on('click', function () {
    $('#reviewTrack').animate({ scrollLeft: '-=260' }, 250);
  });

  
  $('.thumb').on('click', function () {
    $('#mainPic').attr('src', $(this).attr('src'));
  });

  $('#calcBtn').on('click', function () {
    var loan = Number($('#lc-price').val()) - Number($('#lc-down').val());
    var rate = Number($('#lc-rate').val()) / 1200;
    var months = Number($('#lc-term').val()) * 12;
    if (loan <= 0 || months <= 0) {
      $('#lc-out').text('Please check the price, down payment and term.');
      return;
    }
    var pay = rate ? (loan * rate) / (1 - Math.pow(1 + rate, -months)) : loan / months;
    $('#lc-out').text('Estimated payment: $' + pay.toFixed(2) + ' / month');
  });


  $('#bookForm').on('submit', function (e) {
    e.preventDefault();
    $('#bookMsg').removeClass('hidden');
    this.reset();
  });
  $('#joinForm').on('submit', function (e) {
    e.preventDefault();
    $('#joinMsg').removeClass('hidden');
    this.reset();
  });

  
  $('#toTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 300);
  });


  var revealBoxes = $('main > section').not(':first-child').children('.mx-auto');
  revealBoxes.addClass('reveal');

  if ('IntersectionObserver' in window) {
    var watcher = new IntersectionObserver(function (items) {
      items.forEach(function (item) {
        if (item.isIntersecting) {
          $(item.target).addClass('show');
          watcher.unobserve(item.target);
        }
      });
    }, { threshold: 0.08 });

    revealBoxes.each(function () {
      watcher.observe(this);
    });
  } else {
    
    revealBoxes.addClass('show');
  }

  
  $('.thumb').on('click', function () {
    $('#mainPic').css('opacity', 0).fadeTo(300, 1);
  });

  
  $('#calcBtn').on('click', function () {
    $('#lc-out').css('opacity', 0).fadeTo(300, 1);
  });
});
