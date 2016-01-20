// output pascal triangle with specified layers
function YHTriangle(n) {
  for (var i = 1; i <= n; i++) {
    var arrI = YHTriangleNLayer(i);
    console.log(arrI + '');
  }
}
// output the n-th layer of pascal's triangle
function YHTriangleNLayer(n) {
  var arr = [];
  if (n === 1) { // 第一层
    arr = [1];
  } else if (n === 2) { // 第二层
    arr = [1, 1];
  } else {
    var mid = Math.floor(n / 2);
    var arr2 = [];
    for (var i = 0; i <= mid; i++) {
      var num = GetXthNumberOfLayerN(n, i + 1);
      arr[i] = num;
      if (n % 2 === 0 || i < mid) {
        arr[n - i - 1] = num;
      }
    }
  }
  return arr;

}

// get the x-th number of layer n
function GetXthNumberOfLayerN(n, x) {
  if (n > 2 && x < n && x !== 1) {
    return GetXthNumberOfLayerN(n - 1, x - 1) + GetXthNumberOfLayerN(n - 1, x);
  } else {
    return 1;
  }
}
