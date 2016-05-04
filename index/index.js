(function(){
    $.ajax({
        url: 'index/data.json',
        dataType: 'json'
    })
    .done(function(data) {
        console.log(data);
        var demoData = JSON.parse(data.responseText);
        ReactDOM.render(
          <DemoWall demos={demoData.demos} />,
          document.getElementById('container')
        );
    })
    .fail(function(err) {
        console.log(err);
    });

})();
