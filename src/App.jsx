import {useState, useEffect} from "react";

import {AddItem} from "./components/AddItem/AddItem";
import {List} from "./components/ToDoList";
import {Title} from "./components/Title/Title";

import "./App.css";

// TODO: Добавить LocalStorage

const App = () => {
    // стейт для списка
    const [state, setState] = useState([]);

    useEffect(() => {
        // if есть что-то в localStorage {}, если нет то fetch
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setState(json))
    }, [])

    const onRemoveItem = (id) => () => {
        setState(state.filter((item) => item.id !== id));
    };

    const addToState = (item) => setState([...state, item]);

    const onEditItem = (id, newProps) => () => {
        console.log(id, newProps)
        setState(
            state.map((item) => {
                if (item.id === id)
                {item.title = newProps;
                    return {...item, ...newProps};}
                return item;
            })
        );
    };

    return (
        <div className="App">
            <Title/>
            <AddItem onAdd={addToState}/>
            <List data={state} onRemoveItem={onRemoveItem} onEditItem={onEditItem} onAdd={addToState}/>
        </div>
    );
};

export default App;
