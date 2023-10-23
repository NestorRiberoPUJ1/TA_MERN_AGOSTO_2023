import { Fragment, useEffect, useState } from "react"

import axios from 'axios';

const HomePage = () => {

    const [categories, setCategories] = useState([]);

    const [category, setCategory] = useState("");
    const [id, setId] = useState("");

    const [result, setResult] = useState({});


    const getCategories = async () => {
        const response = await axios.get("https://swapi.dev/api/");
        const result = await response.data;
        setCategories(Object.keys(result));
    }

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://swapi.dev/api/${category}/${id}`);
            const result = await response.data;
            console.log(result);
            setResult(result);
        } catch (error) {
            setResult({
                Resultado: "Estos no son los droides que estas buscando",
                ObiWan: <img alt="obi" src="https://upload.wikimedia.org/wikipedia/en/c/c5/Obiwan1.jpg" />,
            })
        }

    }


    useEffect(() => {
        getCategories();
    }, [])

    return (
        <Fragment>
            <div>
                <label htmlFor="category">Category:</label>
                <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="" disabled>Select</option>
                    {
                        categories.map((item, idx) => {
                            return (
                                <option value={item} key={item + idx}>{item}</option>
                            )
                        })
                    }
                </select>
                <input
                    type="number"
                    name="id"
                    id="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <hr />
            {
                Object.keys(result).length > 0 &&
                Object.keys(result).map((item, idx) => {
                    return (
                        <h3>{item}: {result[item]}</h3>
                    )
                })

            }
        </Fragment>
    )
}

export default HomePage;