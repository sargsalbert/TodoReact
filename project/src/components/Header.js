import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div>
                <input type="text" value={this.props.todoName} onChange={this.props.handleChange} />
                <button onClick={this.props.onAddBtn}>Add</button>
            </div>
        )
    }
}


export default Header;
