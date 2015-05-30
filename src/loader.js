import React from 'react';

const LOADER_CHARACTERS = "\\|/—";

const LOADER_STYLE = {
  fontFamily: "Consolas, \"Liberation Mono\", Courier, monospace"
};

export default class Toto {
    constructor() {
        this.state = { tick: 0 };
    }

    componentWillMount() {
    	this.interval = setInterval(::this.nextStep(), 100);
    }
    
    componentWillUnmount() {
    	clearInterval(this.interval);
    }

    nextStep() {
    	this.setState({
            tick: (this.state.tick + 1) % LOADER_CHARACTERS.length
        });
    }

    render() {
      return (
        <span style={LOADER_STYLE}>{ loading[this.state.tick] }</span>
      );
    }

}