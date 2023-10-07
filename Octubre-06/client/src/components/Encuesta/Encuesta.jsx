import { Fragment, useState } from "react"



const Encuesta = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const [coodinates, setCoordinates] = useState([0, 0])


    const seguirRaton = (event) => {
        setCoordinates([event.pageX, event.pageY])
    }


    return (
        <Fragment>
            <form onMouseMove={seguirRaton}>
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Constaseña:</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Enviar</button>
                <h1>{username}</h1>
                <h1>{password}</h1>

                <div style={{ height: "20px", width: "20px", backgroundColor: "red", borderRadius: "50%", position: "absolute", top: coodinates[1], left: coodinates[0] }}></div>
            </form>
        </Fragment>
    )
}

export default Encuesta;