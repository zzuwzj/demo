/**
 * index react component react js file
 */
var DemoWall = React.createClass({
    render: function() {
        var demos = this.props.demos.map(function(demo){
            return (
                <DemoCard src={this.props.src} title={this.props.title} description={this.props.description} />
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
