import React, { Component } from 'react'; 
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import View from './View';

class BookmarkApp extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
        <div>
            <Navbar />
            <div className="columns">
                <Sidebar />
                <View />
            </div>
        </div>
        )
    }
}

export default BookmarkApp;