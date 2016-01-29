var Switcher = React.createClass({
      getInitialState: function () {
        return {
          on: this.props.on
        };
      },
      clickHandler: function () {
        this.setState({
          on: !this.state.on
        });
      },

      render: function () {
        return (
            <button onClick={this.clickHandler}>
                {this.state.on ? 'On' : 'Off'}
            </button>
            );
      }
});

ReactDOM.render(
    <Switcher />,
    document.getElementById('switch')
);