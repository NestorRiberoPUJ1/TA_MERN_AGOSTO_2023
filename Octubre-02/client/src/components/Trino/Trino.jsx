import { Component } from "react";


class Trino extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
    }

    render() {
        return (
            <div>
                <h1>{this.props.user}</h1>
                <p>{this.props.value}</p>
                <p>{this.state.likes} likes</p>
                <img src={this.props.logo} alt="logo" height={50} />
                <button onClick={() => this.setState({ likes: this.state.likes + 1 })}>Like</button>
            </div>
        );

    }

}

export default Trino;