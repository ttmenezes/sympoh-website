import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SiteContent from './SiteContent';

import Tab from './Tab';

interface AppState {
  tab:Tab
}

class App extends React.Component<any,AppState> {
  constructor(props:any) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.state = {tab:Tab.HOME};
  }

  handleTabChange(tab:Tab) {
    this.setState({tab:tab});
  }

  render() {
    return (
        <div id="main">
        <Header handleTabChange={this.handleTabChange} currentTab={this.state.tab}/>
        <SiteContent tab={this.state.tab}/>
        </div>
    );
  }
}

export default App;
