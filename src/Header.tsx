import React from 'react';
import './App.css';

import Tab from './Tab';

interface TabSpec {
  enum:Tab;
  title:string;
}
const tabs = [
  {enum:Tab.HOME,title:"Home"},
  {enum:Tab.EVENTS,title:"Events"},
  {enum:Tab.MEMBERS,title:"Members"},
  {enum:Tab.ABOUT,title:"About"},
  {enum:Tab.TUTORIALS,title:"Tutorials"},
  {enum:Tab.MORE,title:"More"},
];

interface HeaderProps {
  handleTabChange: ((tab:Tab) => void);
  currentTab:Tab;
}

interface TabHeaderProps {
  handleTabChange: ((tab:Tab) => void);
  currentTab:Tab;
  myTab:Tab;
  title:string;
}

function TabHeader(props:TabHeaderProps) {
  return <li 
    onClick={e => props.handleTabChange(props.myTab)}
    className={props.currentTab === props.myTab ? 'current' : undefined}
    >
      {props.title}
    </li>
}

function Header(props:HeaderProps) {
    
    return <div id="header">
      <div id="logo">
        <h1>
          <a href="index.php">SYMPOH</a> URBAN <a href="?m=1" className="sneaky">ARTS</a> CREW</h1>
        <img alt="logo" src="logo.png" className="logo"  />
      </div>
      <div id="menubar">
        <ul id="menu">
          {tabs.map(spec => <TabHeader 
            handleTabChange={props.handleTabChange}
            myTab={spec.enum}
            currentTab={props.currentTab}
            title={spec.title}
            />)}
        </ul>
      </div>
    </div>
}

export default Header