$('.btn').mouseout(function (event) {
  /* Act on the event */
  $('.code').hide();
});
var funcNative = function (event) {
  /* Act on the event */
  var left = event.pageX - 200;
  var top = $('.action').offset().top - 290;
  $('.code').css({
    'left': left + 'px',
    'top': top
  });
  $('.code').show();
  $('.code .code1').show();
  $('.code .code2').hide();
};
$('.btn.native').mouseover(funcNative);
$('.btn.native').mousemove(funcNative);

var funcJQuery = function (event) {
  /* Act on the event */
  var left = event.pageX - 200;
  var top = $('.action').offset().top - 160;
  $('.code').css({
    'left': left + 'px',
    'top': top
  });
  $('.code').show();
  $('.code .code2').show();
  $('.code .code1').hide();
};
$('.btn.jquery').mouseover(funcJQuery);
$('.btn.jquery').mousemove(funcJQuery);

var intvId = 0;
var animFunc = function (ele, attr, from, to) {
  var distance = Math.abs(to - from);
  var step = distance / 100;
  var sign = (to - from) / distance;
  var offset = 0;
  var stepFunc = function () {
    var tmpOffset = offset + step;
    if (tmpOffset < distance) {
      ele.style[attr] = from + tmpOffset * sign + 'px';
      offset = tmpOffset;
    } else {
      ele.style[attr] = to + 'px';
      clearInterval(intvId);
    }
  };
  ele.style[attr] = from + 'px';
  intvId = setInterval(stepFunc, 10);
};

$('#box1').click(function (event) {
  /* Act on the event */
  clearInterval(intvId);
  var winWidth = $(window).width();
  var boxWidth = $('#box1').width();
  animFunc(document.getElementById('box1'), 'left', 20, winWidth - 50 - boxWidth);
});

(function () {
  $.ajax({
      url: 'code1.html',
      type: 'GET'
    })
    .done(function (data) {
      $('.code .code1').html(data);
    }).fail(function (err) {
      console.log('failed:' + err);
    });

  $.ajax({
      url: 'code2.html',
      type: 'GET'
    })
    .done(function (data) {
      $('.code .code2').html(data);
    }).fail(function (err) {
      console.log('failed:' + err);
    });

  var winWidth = $(window).width();
  var boxWidth = $('#box1').width();
  var toValue = winWidth - 60 - boxWidth;
  animFunc(document.getElementById('box1'), 'left', 20, toValue);

  var goAnim = function () {
    $('#box2').animate({
        'left': toValue,
        'border-radius': 50
      },
      2000,
      'easeInOutQuart',
      function () {
        /* stuff to do after animation is complete */
        console.log('go animation done');
        backAnim();
      });
  };

  var backAnim = function () {
    $('#box2').animate({
        'left': 0,
        'border-radius': 0
      },
      2000,
      'easeInOutQuart',
      function () {
        /* stuff to do after animation is complete */
        console.log('back animation done');
        goAnim();
      });
  };
  goAnim();
})();
