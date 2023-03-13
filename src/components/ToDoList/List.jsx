import { Item } from "./Item";


export const List = ({ data, onEditItem, onRemoveItem, onClearAll}) => {
    // // фильтруем список по степени готовности
    const done = data.filter(({ completed }) => completed);

    // // показываем выполненные всегда в конце
    const undone = data.filter(({ completed }) => !completed);

    return (
        <div>
            {/*кнопка очистить список*/}
            <div className="clear-button">
                <button className="item__button" onClick={onClearAll}>
                    clear all
                </button>
            </div>
            {/*Шапка*/}
            <div className="headlines item__wrap">
                <span className="headlines-number item-number">#</span>
                <span className="headlines-task_name item__title">Task Name</span>
                <span className="headlines-edit item-edit">Edit</span>
                <span className="headlines-task_status item-status">Status</span>
                <span className="headlines-remove item-remove">Remove</span>
            </div>
            {undone.map((item, index) => (
                <Item
                    {...item}
                    key={item.id}
                    onEditItem={onEditItem}
                    itemNumber={index+1}
                    onRemoveItem={onRemoveItem}
                />
            ))}
            {done.map((item) => (
                <Item
                    {...item}
                    key={item.id}
                    onEditItem={onEditItem}
                    onRemoveItem={onRemoveItem}
                />
            ))}
        </div>
    );
};
