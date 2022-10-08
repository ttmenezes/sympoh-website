import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import HomeTab from './HomeTab';

import Tab from './Tab'
import EventsTab from './EventsTab';
import MembersTab from './MembersTab';
import AboutTab from './AboutTab';
import TutorialsTab from './TutorialsTab';
import MoreTab from './MoreTab';

function renderTab(tab:Tab) {
    switch (tab) {
        case Tab.HOME:
            return <HomeTab/>
        case Tab.EVENTS:
            return <EventsTab/>
        case Tab.MEMBERS:
            return <MembersTab/>
        case Tab.ABOUT:
            return <AboutTab/>
        case Tab.TUTORIALS:
            return <TutorialsTab/>
        case Tab.MORE:
            return <MoreTab/>
        default:
            return <HomeTab/>
    }
}

interface SiteContentProps {
    tab:Tab
}

export default class SiteContent extends React.Component<SiteContentProps> {
    render() {
        const footer =<div id="footer">
        <p>Copyright &copy; SYMPOH | <a href="http://validator.w3.org/check?uri=referer">HTML5</a> | <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a> | <a href="http://www.html5webtemplates.co.uk">design from HTML5webtemplates.co.uk</a> | &nbsp;Maintained by Hollis Ma '22&nbsp;
        </p>
        </div>
        return <div id="site_content">
                <Sidebar/>
                {renderTab(this.props.tab)}
                {footer}
                </div>
                
        }
}
