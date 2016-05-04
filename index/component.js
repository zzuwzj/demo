/**
 * index react component react js file
 */
var DemoWall = React.createClass({
    loadDemos: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            data: {param1: 'value1'},
        })
        .done(function(data) {
            console.log("success");
            console.log(data);
            console.log(data.responseText);
            var demoData = JSON.parse(data.responseText);
            this.setState({demos: demoData});
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
    },
    getInitialState: function() {
        return {
            demos:[]
        };
    },
    componentDidMount: function() {
        this.loadDemos();
    },
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
                    {this.state.demos}
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

ReactDOM.render(
  <DemoWall url='/index/data' />,
  document.getElementById('container')
);
