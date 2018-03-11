import React from 'react';
import '../css/Title.css';

export class Title extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {  }
    render() {
        return (
            <div>
                <h1 className="Title">{this.props.text}</h1>
            </div>
        );
    }
}

// export default Title;