import React from 'react';

const DEFAULT_LOADER_CHARACTERS = '\\|/—';
const DEFAULT_LOADER_SPEED_MS = 100;
const LOADER_STYLE = {
  fontFamily: 'Consolas, \"Liberation Mono\", Courier, monospace'
};

export default class Toto extends React.Component {

    static propTypes = {
        characters: React.PropTypes.string,
        speed: React.PropTypes.number
    }

    static defaultProps = {
        characters: DEFAULT_LOADER_CHARACTERS,
        speed: DEFAULT_LOADER_SPEED_MS
    }

    constructor(props) {
        super(props);
        this.state = { tick: 0 };
    }

    componentWillMount() {
        this.interval = setInterval(::this.nextStep, this.props.speed);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    nextStep() {
        this.setState({
            tick: (this.state.tick + 1) % this.props.characters.length
        });
    }

    render() {
      return (
        <span style={LOADER_STYLE}>{ this.props.characters[this.state.tick] }</span>
      );
    }

}
