var c1 = document.getElementsByClassName('c1')[0];
c1.addEventListener(
  'click',
  function (evt) {
    if (evt.target.className == "box c4") {
      showResult('bubble phase on c4');
    } else if (evt.target.className == "box c3") {
      showResult('bubble phase on c3');
    } else if (evt.target.className == "box c2") {
      showResult('bubble phase on c2');
    } else if (evt.target.className == "box c1") {
      showResult('bubble phase on c1');
    }
    console.log(evt);
  });

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
