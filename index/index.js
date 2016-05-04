(function(){
    $.ajax({
        url: 'index/data.json',
        dataType: 'json'
    })
    .done(function(data) {
        console.log(data);
        // var demoData = JSON.parse(data.responseText);
        var demoData = [
        {
            "src": "fullpage/index.html",
            "title": "全屏滚动网站",
            "description": "使用JQuery插件<code>fullpage.js</code>开发的全屏滚动网站"
        }, {
            "src": "bootstrap/index.html",
            "title": "Responsive网站",
            "description": "使用<a href=\"http: //getbootstrap.com/\">Bootstrap</a>开发的网站，可根据浏览器窗口大小自适应优化显示"
        }];
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
