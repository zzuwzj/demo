(function(){
    $.ajax({
        url: 'data.json',
        dataType: 'json'
    })
    .done(function(data) {
        console.log(data);
        ReactDOM.render(
          <DemoWall products={data} />,
          $('#container')
        );
    })
    .fail(function(err) {
        console.log(err);
    });

})();
