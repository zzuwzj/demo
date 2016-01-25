var c1 = document.getElementsByClassName('c1')[0];

// 最外层加click事件，在capture阶段，第三个参数用true
c1.addEventListener(
  'click',
  function (evt) {
    if (evt.target.className == "box c4") {
      showResult('capture phase on c4');
    } else if (evt.target.className == "box c3") {
      showResult('capture phase on c3');
    } else if (evt.target.className == "box c2") {
      showResult('capture phase on c2');
    } else if (evt.target.className == "box c1") {
      showResult('capture phase on c1');
    }
    console.log(evt);
  }, true);

function showResult(txt) {
  var rst = document.getElementById('result');
  rst.innerText += txt;
  rst.innerHTML += '<br />';
}

// Add 变色效果, 在bubble阶段，第三个参数用默认的false
var time = 700;
var color = 'white';
var c2 = document.getElementsByClassName('c2')[0];
var c3 = document.getElementsByClassName('c3')[0];
var c4 = document.getElementsByClassName('c4')[0];

var bc1 = 'red';
var bc2 = 'green';
var bc3 = 'blue';
var bc4 = 'yellow';

c1.addEventListener('click', function (evt) {
  evt.stopPropagation();
  showResult('bubble phase on c1');
  setTimeout(function () {
    c1.style.backgroundColor = color;
    setTimeout(function () {
      c1.style.backgroundColor = bc;
    }, time);
  }, time);
});

c2.addEventListener('click', function (evt) {
  evt.stopPropagation();
  showResult('bubble phase on c2');
  setTimeout(function () {
    c1.style.backgroundColor = color;
    setTimeout(function () {
      c1.style.backgroundColor = bc1;
      c2.style.backgroundColor = color;
      setTimeout(function () {
        c2.style.backgroundColor = bc2;
        c1.style.backgroundColor = color;
        setTimeout(function () {
          c1.style.backgroundColor = bc1;
        }, time);
      }, time);
    }, time);
  }, time);
});

c3.addEventListener('click', function (evt) {
  evt.stopPropagation();
  showResult('bubble phase on c3');
  setTimeout(function () {
    c1.style.backgroundColor = color;
    setTimeout(function () {
      c1.style.backgroundColor = bc1;
      c2.style.backgroundColor = color;
      setTimeout(function () {
        c2.style.backgroundColor = bc2;
        c3.style.backgroundColor = color;
        setTimeout(function () {
          c3.style.backgroundColor = bc3;
          c2.style.backgroundColor = color;
          setTimeout(function () {
            c2.style.backgroundColor = bc2;
            c1.style.backgroundColor = color;
            setTimeout(function () {
              c1.style.backgroundColor = bc1;
            }, time);
          }, time);
        }, time);
      }, time);
    }, time);
  }, time);
});

// c4.addEventListener('click', function (evt) {
//   evt.stopPropagation();
//   showResult('bubble phase on c4');
//   setTimeout(function () {
//     c1.style.backgroundColor = color;
//     setTimeout(function () {
//       c1.style.backgroundColor = bc1;
//       c2.style.backgroundColor = color;
//       setTimeout(function () {
//         c2.style.backgroundColor = bc2;
//         c3.style.backgroundColor = color;
//         setTimeout(function () {
//           c3.style.backgroundColor = bc3;
//           c4.style.backgroundColor = color;
//           setTimeout(function () {
//             c4.style.backgroundColor = bc4;
//             c3.style.backgroundColor = color;
//             setTimeout(function () {
//               c3.style.backgroundColor = bc3;
//               c2.style.backgroundColor = color;
//               setTimeout(function () {
//                 c2.style.backgroundColor = bc2;
//                 c1.style.backgroundColor = color;
//                 setTimeout(function () {
//                   c1.style.backgroundColor = bc1;
//                 }, time);
//               }, time);
//             }, time);
//           }, time);
//         }, time);
//       }, time);
//     }, time);
//   }, time);
// });

// use jQuery animation
$(c4).on('click', function (evt) {
  evt.stopPropagation();
  showResult('bubble phase on c4');
  $(c1).animate({
      'background-color': color
    },
    time,
    function () {
      /* stuff to do after animation is complete */
      changeColor(c1, bc1);
      $(c2).animate({
          'background-color': color
        },
        time,
        function () {
          /* stuff to do after animation is complete */
          changeColor(c2, bc2);
          $(c3).animate({
              'background-color': color
            },
            time,
            function () {
              /* stuff to do after animation is complete */
              changeColor(c3, bc3);
              $(c4).animate({
                  'background-color': color
                },
                time,
                function () {
                  /* stuff to do after animation is complete */
                  changeColor(c4, bc4);
                  $(c3).animate({
                      'background-color': color
                    },
                    time,
                    function () {
                      /* stuff to do after animation is complete */
                      changeColor(c3, bc3);
                      $(c2).animate({
                          'background-color': color
                        },
                        time,
                        function () {
                          /* stuff to do after animation is complete */
                          changeColor(c2, bc2);
                          $(c1).animate({
                              'background-color': color
                            },
                            time,
                            function () {
                              /* stuff to do after animation is complete */
                              changeColor(c1, bc1);
                            });
                        });
                    });
                });
            });
        });
    });
});

function changeColor(elm, clr) {
  $(elm).animate({
      'background-color': clr
    },
    time);
}
