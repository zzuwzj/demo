(function(){
    $.ajax({
        url: 'index/data.json',
        dataType: 'json'
    })
    .done(function(data) {
        console.log(data);
        ReactDOM.render(
          <DemoWall products={data} />,
          document.getElementById('container')
        );
    })
    .fail(function(err) {
        console.log(err);
    });

})();
