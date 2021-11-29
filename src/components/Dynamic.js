import React from 'react';

class Dynamic extends React.Component {
    state = {
        counter: 0
    };

    count = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div>
               <form></form>
            </div>
        )
    }
}

export default Dynamic;