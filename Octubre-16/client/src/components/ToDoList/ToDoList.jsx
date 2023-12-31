import { Fragment, useEffect, useState } from "react"
import styles from "./ToDoList.module.css"

const categorias = [
    { label: "Hogar", value: "HOME", color: "rgb(255, 217, 0)" },
    { label: "Trabajo", value: "WORK", color: "rgb(26, 255, 0)" },
    { label: "Estudio", value: "STUDIES", color: "rgb(0, 179, 255)" },
]

const AddForm = ({ setToDoList }) => {

    const [toDo, setToDo] = useState("");
    const [category, setCategory] = useState("WORK");

    const handleNewToDo = (e) => {
        e.preventDefault();
        const data = { name: toDo, category: category };
        setToDoList((prevValue) => {
            return (
                [...prevValue, data]
            )
        })

    }

    return (
        <Fragment>
            <form onSubmit={handleNewToDo}>
                <div>
                    <input type="text" value={toDo} onChange={(e) => setToDo(e.target.value)} />
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        {categorias.map((item, idx) => {
                            return (
                                <option value={item.value} key={item.label + idx}>{item.label}</option>
                            )
                        })}
                    </select>
                </div>
                <button type="submit">ADD</button>
            </form>
        </Fragment>
    )
}

const ListElement = ({ item, setToDoList, index }) => {

    const elementColor = categorias.filter((element) => element.value === item.category)[0].color;

    const handleCheck = (e) => {
        const checked = e.target.checked;
        console.log(checked);
        setToDoList((prevValue) => {
            const aux = [...prevValue];
            prevValue[index].checked = checked;
            return aux;
        })
    }


    const handleDelete = () => {
        setToDoList((prevValue) => {
            const aux = [...prevValue];
            const newList = aux.filter((item, idx) => idx !== index);
            return newList;
        })
    }


    return (
        <Fragment>
            <li style={{ color: elementColor }} className={item.checked ? styles.checkedElement : null}>
                {item.name}
                <input type="checkbox" checked={item.checked || false} onChange={handleCheck} />
                <button onClick={handleDelete}>Delete</button>
            </li>
        </Fragment>
    )
}

const ToDoList = () => {

    const [toDoList, setToDoList] = useState([]);

    const [filter, setFilter] = useState("");
    const [category, setCategory] = useState("ALL");
    const [status, setStatus] = useState("ALL");

    useEffect(() => {
        console.log(toDoList);
    }, [toDoList])


    const filteredTasks = () => {
        let filtered = toDoList.filter((value, indice, lista) => {
            return value.name.includes(filter);
        })
        filtered = filtered.filter((value, indice, lista) => {
            if (category === "ALL") {
                return true;
            }
            return value.category === category;
        })
        filtered = filtered.filter((value, indice, lista) => {
            let checkStatus = value.checked || false;
            console.log(checkStatus, status);
            if (status === "ALL") {
                return true;
            }
            else if (status === "COMPLETED") {
                return checkStatus;
            }
            return !checkStatus;
        })

        return filtered;
    }


    const completedTasks = () => {
        const completed = toDoList.filter((item) => item.checked === true).length;
        const total = toDoList.length;
        return `#${completed}/${total}`;
    }

    const handleDeleteCompleted = () => {
        setToDoList((prevValue) => {
            const pending = prevValue.filter((item) => !item.checked);
            return pending;
        })
    }

    useEffect(() => {
        filteredTasks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])


    return (
        <Fragment>
            <AddForm setToDoList={setToDoList} />
            <button onClick={handleDeleteCompleted}>Borrar completadas</button>
            <hr />
            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="ALL" >Todos</option>
                {categorias.map((item, idx) => {
                    return (
                        <option value={item.value} key={item.label + idx}>{item.label}</option>
                    )
                })}
            </select>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="ALL" >Todos</option>
                <option value={"COMPLETED"} >Finalizados</option>
                <option value={"PENDING"} >Pendientes</option>
            </select>
            <hr />
            <h3>{completedTasks()}</h3>
            <ul>
                {filteredTasks().map((item, index) => {
                    return (
                        <ListElement item={item} key={item.name + index} setToDoList={setToDoList} index={index} />
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default ToDoList;