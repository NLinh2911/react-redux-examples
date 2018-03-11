import React from 'react';
import '../css/Search.css';

export class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange (e) {
        this.props.filter(e.target.value)
    }
    render() {
        return (
            <div className="Search">
                <input onChange={this.handleChange.bind(this)} type="text" placeholder="Search your pokemon?" />
            </div>
                );
            }
        }
        
// export default Search;