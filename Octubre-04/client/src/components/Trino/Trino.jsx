import { Component } from "react";
import styles from "./Trino.module.css";

const btnStyle = {
    border: '0',
    padding: '12px 15px',
    background: 'black',
    fontSize: '1em',
    color: 'white',
    fontWeight: 'bold',
    position:"absolute",
    bottom:"4px",
    right:"4px"
};


class Trino extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
    }

    render() {
        return (
            <div className={styles.cardStyle}>
                <div className={styles.cardHeader}>
                    <img src={this.props.logo} alt="logo" height={50} />
                    <h1>{this.props.user}</h1>
                </div>

                <p>{this.props.value}</p>
                <p>{this.state.likes} likes</p>
                <button style={btnStyle} onClick={() => this.setState({ likes: this.state.likes + 1 })}>Like</button>
            </div>
        );

    }

}

export default Trino;