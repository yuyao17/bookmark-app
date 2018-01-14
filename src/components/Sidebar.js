import React, { Component } from 'react';
import Switch from 'rc-switch';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBook: true
        }
        this.toggleUpdate = this.toggleUpdate.bind(this);
    }

    toggleUpdate () {
        const { isBook } = this.state;
        this.setState({isBook:!isBook});
    }
    render () {
        const { isBook } = this.state;
        return (
            <div className="column is-4 full-h marg-top-2 marg-left-2">
                <div>
                    Movie&nbsp;&nbsp;
                    <Switch 
                    onChange={this.toggleUpdate}
                    checked={isBook}
                    style={{
                        backgroundColor: "rgb(43, 158, 235)",
                        border: "1px solid rgb(43, 158, 235)"
                    }} />
                    &nbsp;&nbsp;Book
                </div>
                <form className="marg-top-2" action="">
                    <div className="field">
                        <label className="label">What's the name of the {isBook ? 'book' : 'movie'}?</label>
                        <div className="control">
                            <input className="input" type="text" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">When did you {isBook ? 'read' : 'watch'}?</label>
                        <div className="control">
                            <input className="input" type="text" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Any comments?</label>
                        <div className="control">
                            <textarea className="textarea" type="text" />
                        </div>
                    </div>
                </form>    
            </div>
        )
    }
}

export default Sidebar;