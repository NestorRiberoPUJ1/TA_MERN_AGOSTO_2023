import { Fragment, useEffect, useState } from "react"

import styles from "./DashboardPage.module.css"
import axios from "axios"
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const DashboardPage = () => {

    const [projects, setProjects] = useState([]);

    const getAllProjects = async () => {
        const result = await axios.get("http://localhost:8000/api/project", { withCredentials: true });
        const response = await result.data;
        console.log(response);
        setProjects(response);
    }

    useEffect(() => {
        getAllProjects();
    }, [])


    return (
        <Fragment>
            <h1 className={styles.mainTitle}>Project Manager</h1>
            <div className={styles.mainContainer}>
                <div>
                    <h2 color="blue">Backlog</h2>
                    {
                        projects.filter((item) => item.status === "backlog").map((item, idx) => {
                            return (
                                <ProjectCard key={idx} item={item} />
                            )
                        })
                    }
                </div>
                <div>
                    <h2 color="yellow">In Progress</h2>
                    {
                        projects.filter((item) => item.status === "in progress").map((item, idx) => {
                            return (
                                <ProjectCard key={idx} item={item} />
                            )
                        })
                    }
                </div>
                <div>
                    <h2 color="green">Completed</h2>
                    {
                        projects.filter((item) => item.status === "completed").map((item, idx) => {
                            return (
                                <ProjectCard key={idx} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}


export default DashboardPage;