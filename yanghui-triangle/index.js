(function () {
  $.ajax({
    url: 'code.html',
    type: 'GET'
  }).done(function (data) {
    $('.code').html(data);
  }).fail(function (err) {
    console.log('failed:' + err);
  });

  // 输出10层杨辉三角
  YHTriangle(10);
})();
