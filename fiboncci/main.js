// 以1开始的斐波那契数列： 1 1 2 3 5 8 13 21 ...

// 输出长度为n的斐波那契数列
function FiboN(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = getFiboNumX(i);
  }
  console.log(arr + '');
}

// 获取斐波那契数列中的第X个数, 从1开始
function getFiboNumX(x) {
  if (x < 1) {
    console.log("error, x must greater than 0");
    return 0;
  } else if (x === 1 || x === 2) {
    return 1;
  } else {
    return getFiboNumX(x - 1) + getFiboNumX(x - 2);
  }
}
