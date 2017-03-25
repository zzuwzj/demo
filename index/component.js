/**
 * index react component react js file
 */
var DemoWall = React.createClass({
    loadDemos: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json'
        })
        .done(function(data) {
            console.log("success");
            console.log(data);
            this.setState({demos: data.demos});
        }.bind(this))
        .fail(function(err) {
            console.log("error");
            console.log(err);
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
        console.log('this.state.demos:'+this.state.demos);
        var demos = this.state.demos.map(function(demo){
            return (
                <DemoCard src={demo.src} title={demo.title} description={demo.description} />
            );
        });
        return (
            <ul>
                {demos}
            </ul>
        )
    }
});


var DemoCard = React.createClass({
    render: function() {
        return (
            <li>
                <h3>
                    <a class="anchor" href={this.props.src} aria-hidden="true">
                        <span class="octicon octicon-link"></span>
                        {this.props.title}
                    </a>
                </h3>
                <p dangerouslySetInnerHTML={{__html: this.props.description}}></p>
            </li>
        )
    }
});

ReactDOM.render(
  <DemoWall url='index/data.json' />,
  document.getElementById('container')
);
