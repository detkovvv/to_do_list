import "./item.css";


export const Item = ({id, title, completed, onEditItem, onTextEditItem, onRemoveItem, itemNumber}) => {
    return (
        <div className="item__wrap">
            <span className="item-number">{itemNumber(id)}.</span>
            <span className={completed ? "item__title_done item__title" : "item__title"}>
            {title}
             </span>
            <div className="item-edit">
                <button className="item-edit_button" onClick={onTextEditItem}>
                    edit
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
