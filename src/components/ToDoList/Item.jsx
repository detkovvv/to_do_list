import "./item.css";

export const Item = ({ id, title, done, onEditItem, onRemoveItem }) => {
    return (
        <div className="item__wrap">
      <span className={done ? "item__title_done item__title" : "item__title"}>
        {title}
      </span>
            <input
                checked={done}
                type="checkbox"
                onChange={onEditItem(id, { done: !done })}
            />
            <button className="item__button" onClick={onRemoveItem(id)}>
                X
            </button>
        </div>
    );
};
