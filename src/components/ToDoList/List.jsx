import { Item } from "./Item";


export const List = ({ data, onEditItem, onRemoveItem, onTextEditItem }) => {
    // // фильтруем список по степени готовности
    const done = data.filter(({ completed }) => completed);

    // // показываем выполненные всегда в конце
    const undone = data.filter(({ completed }) => !completed);
    // // задаем нумерацию списку задач
    const itemNumber = (id) =>{
         data.findIndex(item => item === id);
       }

    return (
        <div>
            <div className="headlines">
                <span className="headlines-number">#</span>
                <span className="headlines-task_name">task name</span>
                <span className="headlines-remove">edit</span>
                <span className="headlines-task_status">status</span>
                <span className="headlines-remove">remove</span>
            </div>
            {undone.map((item) => (
                <Item
                    {...item}
                    key={item.id}
                    onEditItem={onEditItem}
                    itemNumber={itemNumber}
                    onRemoveItem={onRemoveItem}
                    onTextEditItem={onTextEditItem}
                />
            ))}
            {done.map((item) => (
                <Item
                    {...item}
                    key={item.id}
                    itemNumber={itemNumber}
                    onEditItem={onEditItem}
                    onRemoveItem={onRemoveItem}
                    onTextEditItem={onTextEditItem}
                />
            ))}
        </div>
    );
};
