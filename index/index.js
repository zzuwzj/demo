(function(){
    $.ajax({
        url: 'index/data.json',
        dataType: 'json'
    })
    .done(function(data) {
        console.log(data);
        var demoData = JSON.parse(data.responseText);
        console.log(demoData);
        ReactDOM.render(
          <DemoWall demos={demoData.demos} />,
          document.getElementById('container')
        );
    })
    .fail(function(err) {
        console.log(err);
    });

})();
