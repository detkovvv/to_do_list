import {useState, useEffect} from "react";

import {AddItem} from "./components/AddItem/AddItem";
import {List} from "./components/ToDoList";
import {Title} from "./components/Title/Title";


import "./App.css";

// TODO:

const App = () => {
    // стейт для списка
    const [state, setState] = useState([]);

    const setNewState = (newState) => {
        setState(newState);
        localStorage.setItem('state', JSON.stringify(newState))
    }

    useEffect(() => {
        const localStorageItem = JSON.parse(localStorage.getItem('state', JSON.stringify(state)));
        // console.log(Array.isArray(localStorageItem), localStorageItem);

        localStorageItem ? setState(localStorageItem)
            : fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => setNewState(json))
    }, []);

    const onClearAll = () => {
        setNewState([]);
    };
    const onRemoveItem = (id) => () => {
        setNewState(state.filter((item) => item.id !== id));

    };

    const addToState = (item) => {
        setNewState([...state, item]);

    }

    const onEditItem = (id, newProps) => () => {
        // console.log(id, newProps)
        setNewState(
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
