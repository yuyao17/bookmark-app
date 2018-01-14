import React, { Component } from 'react';
import Switch from 'rc-switch';
import DatePicker from 'react-date-picker';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBook: true,
            mediaData: {},
            date: new Date()
        }
        this.toggleUpdate = this.toggleUpdate.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    componentWillMount () {
        let datePicker = new DatePicker(document.getElementById('datepicker'), {});
    }
    toggleUpdate () {
        const { isBook } = this.state;
        this.setState({isBook:!isBook});
    }
    formSubmit (event) {
        let { isBook } = this.state;
        event.preventDefault();
        const target = event.target;
        const params = {
            media : isBook ? 'book' : 'movie',
            name : target[0].value || '',
            date : target[1].value || new Date(),
            comments : target[2].value || ''
        }
        this.setState({mediaData : params});
    }
    render () {
        const { isBook, mediaData, date } = this.state;
        console.log(mediaData);
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
                <form className="marg-top-2" onSubmit={this.formSubmit}>
                    <div className="field">
                        <label className="label">What's the name of the {isBook ? 'book' : 'movie'}?</label>
                        <div className="control">
                            <input id="name" className="input" type="text" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">When did you {isBook ? 'read' : 'watch'}?</label>
                        <div className="control">
                            <input id="datepicker" class="input" type="text" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Any comments?</label>
                        <div className="control">
                            <textarea id="comments" className="textarea" type="text" />
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button type="submit" className="button is-link">Submit</button>
                        </div>
                    </div>
                </form>    
            </div>
        )
    }
}

export default Sidebar;