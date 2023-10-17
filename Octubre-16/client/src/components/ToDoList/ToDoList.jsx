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

    return (
        <Fragment>
            <li style={{ color: elementColor }} className={item.checked ? styles.checkedElement : null}>
                {item.name}
                <input type="checkbox" checked={item.checked || false} onChange={handleCheck} />
            </li>
        </Fragment>
    )
}

const ToDoList = () => {

    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        console.log(toDoList);
    }, [toDoList])

    return (
        <Fragment>
            <AddForm setToDoList={setToDoList} />
            <ul>
                {toDoList.map((item, index) => {
                    return (
                        <ListElement item={item} key={item.name + index} setToDoList={setToDoList} index={index} />
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default ToDoList;