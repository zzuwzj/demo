var c1 = document.getElementsByClassName('c1')[0];
c1.addEventListener(
  'click',
  function (evt) {
    if (evt.target.className == "box c4") {
      alert('bubble c4');
    } else if (evt.target.className == "box c3") {
      alert('bubble c3');
    } else if (evt.target.className == "box c2") {
      alert('bubble c2');
    } else if (evt.target.className == "box c1") {
      alert('bubble c1');
    }
    console.log(evt);
  });

c1.addEventListener(
  'click',
  function (evt) {
    if (evt.target.className == "box c4") {
      alert('capture c4');
    } else if (evt.target.className == "box c3") {
      alert('capture c3');
    } else if (evt.target.className == "box c2") {
      alert('capture c2');
    } else if (evt.target.className == "box c1") {
      alert('capture c1');
    }
    console.log(evt);
  },true);
