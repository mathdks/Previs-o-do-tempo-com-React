import React from "react";

class cityButton extends React.Component {

    render() {
        return (
            <button class="button" onClick={() => this.props.method(this.props.city)}>
                {this.props.city}
            </button>
        )
    }

}

export default cityButton;