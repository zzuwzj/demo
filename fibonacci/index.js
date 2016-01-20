(function () {
  $.ajax({
    url: 'code.html',
    type: 'GET'
  }).done(function (data) {
    $('.code').html(data);
  }).fail(function (err) {
    console.log('failed:' + err);
  });

  // 输出长度为20的斐波那契数列
  FiboN(20);
})();
