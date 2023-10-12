import { Fragment, useState } from "react"
import styles from "./Formulario.module.css"


const defaultData = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirm: "",
}

const Formulario = () => {
    const [data, setData] = useState(defaultData);

    const handleDataChange = (e) => {
        setData((prev) => {
            const newData = { ...prev };
            newData[`${e.target.name}`] = e.target.value;
            return newData;
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        setData(defaultData);
    }

    return (
        <Fragment>
            <form className={styles.formData} onSubmit={handleFormSubmit}>
                <div className={styles.formInput}>
                    <div>
                        <label htmlFor="nombreInput">Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombreInput"
                            value={data.nombre}
                            onChange={handleDataChange}
                        />
                    </div>
                    {
                        data.nombre.length < 2 && data.nombre.length > 0 &&
                        <p> Nombre debe ser mayor a 2 caracteres </p>
                    }
                </div>

                <div className={styles.formInput}>
                    <div>
                        <label htmlFor="apellidoInput">Apellido:</label>
                        <input
                            type="text"
                            name="apellido"
                            id="apellidoInput"
                            value={data.apellido}
                            onChange={handleDataChange}
                        />
                    </div>
                    {
                        data.apellido.length < 2 && data.apellido.length > 0 &&
                        <p> Apellido debe ser mayor a 2 caracteres </p>
                    }
                </div>
                <div className={styles.formInput}>
                    <div>
                        <label htmlFor="emailInput">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="emailInput"
                            value={data.email}
                            onChange={handleDataChange}
                        />
                    </div>
                    {
                        data.email.length < 5 && data.email.length > 0 &&
                        <p> Email debe ser mayor a 5 caracteres </p>
                    }
                </div>
                <div className={styles.formInput}>
                    <div>
                        <label htmlFor="passwordInput">Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            id="passwordInput"
                            value={data.password}
                            onChange={handleDataChange}
                        />
                    </div>
                    {
                        data.password.length < 8 && data.password.length > 0 &&
                        <p> Contraseña debe ser mayor a 8 caracteres </p>
                    }
                </div>
                <div className={styles.formInput}>
                    <div>
                        <label htmlFor="confirmInput">Confirmar Contraseña:</label>
                        <input
                            type="password"
                            name="confirm"
                            id="confirmInput"
                            value={data.confirm}
                            onChange={handleDataChange}
                        />
                    </div>
                    {
                        data.password !== data.confirm && data.confirm.length > 0 &&
                        <p> Las contraseñas no coinciden </p>
                    }
                </div>
                <button type="submit">Enviar</button>
            </form>
            {data.nombre}
            {data.apellido}
            {data.email}
            {data.password}
            {data.confirm}
        </Fragment>
    )
}


export default Formulario;