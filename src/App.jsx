import { useState } from "react";

import { AddItem } from "./components/AddItem/AddItem";
import { List } from "./components/ToDoList";
import { list } from "./utils";

import "./App.css";

const Title = ()=>{
    return (
        <div className="title-main">
            <h1>To Do List Demo App</h1>
            <h2>Do it today</h2>
        </div>
    )
}
const App = () => {
    // стейт для списка
    const [state, setState] = useState(list);

    const onRemoveItem = (id) => () => {
        console.log(id);
        setState(state.filter((item) => item.id !== id));
    };

    const addToState = (item) => setState([...state, item]);

    const onEditItem = (id, newProps) => () => {
        setState(
            state.map((item) => {
                if (item.id === id) return { ...item, ...newProps };
                return item;
            })
        );
    };

    return (
        <div className="App">
            <Title/>
            <AddItem onAdd={addToState} />
            <List data={state} onRemoveItem={onRemoveItem} onEditItem={onEditItem} />
        </div>
    );
};

export default App;
