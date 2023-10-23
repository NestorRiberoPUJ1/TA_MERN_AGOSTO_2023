import { Fragment } from "react"
import { useParams } from "react-router-dom";



const PlanetPage = () => {
    const { id } = useParams();

    return (
        <Fragment>
            <h1>{id}</h1>
        </Fragment>
    )
}

export default PlanetPage;