import { useState } from "react";
import "./App.css";

const List = [
    {
        title: "Заказать продукты",
        done: false
    },
    {
        title: "Покормить кошку",
        done: true
    },
    {
        title: "Просмотреть уроки",
        done: false
    },
    {
        title: "Приготовить обед",
        done: false
    }
].map((item) => ({ ...item, id: makeId(6) }));

function makeId(length) {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
const Input = (props) =>{
    return (
        <div className="InputPlace">
            <input
                value={props.inputValue}
                onChange={props.inputChange}
                placeholder="введите новую задачу"
            />
            <button onClick={props.handleAdd}>
                add task
            </button>
        </div>
    )
}
const ListComponent = ({ state }) => {
    return state.map((item) => <Item data={item} />);
};

const Item = ({ data }) => {
    return (
        <div key={data.id}>
            <span>{data.title}</span>
            <input value={data.done} type="checkbox"/>
            <button
                onClick={() => {
                    data.setState(data.state.filter((i) => i.data.title !== data.data.title));
                }}
            >
                   remove
            </button>
        </div>
    );
};


function App() {
    const [state, setState] = useState(List);
    const [inputValue, setInputValue] = useState("");
    const handleAdd =() => {
        setState([...state, { title: inputValue, done: false }]);
        setInputValue("");
    }
    const inputChange =(e)=>{setInputValue(e.target.value)};

    return (
        <div className="App">
            <Input/>
            <ListComponent state={state} setState={setState}></ListComponent>
        </div>
    );
}

export default App;
