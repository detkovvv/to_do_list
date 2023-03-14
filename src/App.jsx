import {useState, useEffect} from "react";

import {AddItem} from "./components/AddItem/AddItem";
import {List} from "./components/ToDoList";
import {Title} from "./components/Title/Title";


import "./App.css";

// TODO: Добавить LocalStorage

const App = () => {
    // стейт для списка
    const [state, setState] = useState(
        JSON.parse(localStorage.getItem('state')) || []
    );

    useEffect(() => {
        console.log(localStorage.state);
        localStorage.state === [] ? fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => setState(json)) : localStorage.setItem('state', JSON.stringify(state))
    }, []);

    const onClearAll = () => {
        localStorage.clear();
        setState([]);
    };
    const onRemoveItem = (id) => () => {
        console.log(id)
        localStorage.removeItem(id);
        setState(state.filter((item) => item.id !== id));
    };

    const addToState = (item) => {
        setState([...state, item]);
        localStorage.setItem('state', JSON.stringify([...state, item]));
    }

    const onEditItem = (id, newProps) => () => {
        console.log(id, newProps)
        setState(
            state.map((item) => {
                if (item.id === id)
                    return {...item, ...newProps};
                return item;
            })
        );
    };

    return (
        <div className="App">
            <Title/>
            <AddItem onAdd={addToState}/>
            <List data={state} onClearAll={onClearAll} onRemoveItem={onRemoveItem} onEditItem={onEditItem}
                  onAdd={addToState}/>
        </div>
    );
};

export default App;
