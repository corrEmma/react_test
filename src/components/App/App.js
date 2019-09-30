import React, { Component } from 'react';
import DataContainer from '../DataContainer/DataContainer';
import TopNav from "../TopNav/TopNav";

class App extends Component {

    state = {
        selectedTab: 0
    };

    render() {
        return (
            <>
                <TopNav selectedTab={this.state.selectedTab} onTabChange={(e, newValue) => this.setState({selectedTab: newValue})} />
                <DataContainer selectedTab={this.state.selectedTab} />
            </>
        );
    }

}
export default App;
