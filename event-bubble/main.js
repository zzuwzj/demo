var c1 = document.getElementsByClassName('c1')[0];
c1.addEventListener(
  'click',
  function (evt) {
    if (evt.target.className == "box c4") {
      alert('c4');
    } else if (evt.target.className == "box c3") {
      alert('c3');
    } else if (evt.target.className == "box c2") {
      alert('c2');
    } else if (evt.target.className == "box c1") {
      alert('c1');
    }
    console.log(evt);
  });
