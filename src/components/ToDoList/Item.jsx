import "./item.css";
import {useState} from "react";

//  TODO:

export const Item = ({id, title, completed, onEditItem, onRemoveItem, itemNumber}) => {
    const [isEdit, setIsEdit] = useState(true);
    const onEditTask = ()=>{
        onEditItem(id, {title: text})();
        setIsEdit(!isEdit)
    };
    // стейт для инпут
    const [text, setText] = useState(title);
    const onEditText = (e) =>{
        setText(e.target.value);
    }

    return (
        <div className="item__wrap">
            <span className="item-number">{itemNumber}.</span>
            {isEdit ?  <span className={completed ? "item__title_done item__title" : "item__title"}>
            {title}
             </span> : <input className="item__title-edit" value={text} onChange={onEditText}/>}

            <div className="item-edit">
                <button className="item-edit_button" onClick={onEditTask}>
                    {isEdit ? "edit" : "save"}
                </button>
            </div>
            <div className="item-status">
                <input
                checked={completed}
                type="checkbox"
                onChange={onEditItem(id, {completed: !completed})}
            />
            </div>
            <div className="item-remove">
                <button className="item__button" onClick={onRemoveItem(id)}>
                X
            </button>
            </div>
        </div>
    );
};
