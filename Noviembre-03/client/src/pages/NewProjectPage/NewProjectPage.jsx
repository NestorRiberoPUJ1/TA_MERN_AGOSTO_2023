import axios from "axios"
import { Fragment, useState } from "react";




const NewProjectPage = () => {

    const [name, setName] = useState("");
    const [due_time, setDue_time] = useState(new Date());


    const handleCreateProject = async () => {
        console.log(name, due_time);
        const data = {
            name,
            due_time
        }
        try {
            const result = await axios.post("http://localhost:8000/api/project", data, { withCredentials: true })
            console.log(result);
            const response = await result.data;
            console.log(response);
            setName("");
            setDue_time(new Date())
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <Fragment>
            <h1>Project Manager</h1>
            <a href="/">Back to dashboard</a>
            <div>
                <h3>Plan a new Project</h3>
                <div>
                    <label htmlFor="projectInput">Project</label>
                    <input
                        type="text"
                        name="projectInput"
                        id="projectInput"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="dateInput">Due Date</label>
                    <input
                        type="date"
                        name="dateInput"
                        id="dateInput"
                        value={due_time}
                        onChange={(e) => setDue_time(e.target.value)}
                    />
                </div>
                <button onClick={handleCreateProject}>Plan Project</button>
            </div>
        </Fragment>
    )
}


export default NewProjectPage;