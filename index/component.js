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
