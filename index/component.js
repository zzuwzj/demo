/**
 * index react component react js file
 */
var DemoWall = React.createClass({
    render: function() {
        var demos = this.props.demos.map(function(demo){
            return (
                <DemoCard src={demo.src} title={demo.title} description={demo.description} />
            );
        });
        return (
            <div className="demos">
            <h1>Demos</h1>
            <ul>
                {this.props.demos}
            </ul>
            </div>
        )
    }
});


var DemoCard = React.createClass({
    render: function() {
        return (
            <li>
                <h3>
                    <a class="anchor" href="this.props.src" aria-hidden="true">
                        <span class="octicon octicon-link"></span>
                        {this.props.title}
                    </a>
                </h3>
                <p>{this.props.description}</p>
            </li>
        )
    }
});

var demoData = {demos:[
    {
        "src": "fullpage/index.html",
        "title": "全屏滚动网站",
        "description": "使用JQuery插件<code>fullpage.js</code>开发的全屏滚动网站"
    }, {
        "src": "bootstrap/index.html",
        "title": "Responsive网站",
        "description": "使用<a href=\"http: //getbootstrap.com/\">Bootstrap</a>开发的网站，可根据浏览器窗口大小自适应优化显示"
    }]
};
console.log(demoData);

ReactDOM.render(
  <DemoWall demos={demoData.demos} />,
  document.getElementById('container')
);
