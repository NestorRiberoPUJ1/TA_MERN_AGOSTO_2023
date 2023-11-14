import { Fragment } from "react"

import styles from "./ProjectCard.module.css";
import axios from "axios";

const ProjectCard = ({ item }) => {

    const handlePromoteStatus = async () => {
        switch (item.status) {
            case "backlog":
                const bresult = await axios.put("http://localhost:8000/api/project/" + item._id,
                    { status: "in progress" }, { withCredentials: true });

                break;
            case "in progress":
                const iresult = await axios.put("http://localhost:8000/api/project/" + item._id,
                    { status: "completed" }, { withCredentials: true });
                break;
            case "completed":
                const dresult = await axios.delete("http://localhost:8000/api/project/" + item._id, { withCredentials: true });
                break;

            default:
                break;
        }
    }


    return (
        <Fragment>
            <div className={styles.projectCard}>
                <h2>{item.name}</h2>
                <h2>Due: {item.due_time.split("T")[0]}</h2>
                {
                    item.status === "backlog" ?
                        <button onClick={handlePromoteStatus}>Start Project</button>
                        :
                        item.status === "in progress" ?
                            <button onClick={handlePromoteStatus}>Move To completed</button>
                            :
                            <button onClick={handlePromoteStatus}>Remove Project</button>
                }
            </div>
        </Fragment>
    )
}


export default ProjectCard;