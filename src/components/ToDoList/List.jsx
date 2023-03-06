import { Item } from "./Item";

export const List = ({ data, onEditItem, onRemoveItem }) => {
    // // фильтруем список по степени готовности
    const done = data.filter(({ done }) => done);

    // // показываем выполненные всегда в конце
    const undone = data.filter(({ done }) => !done);

    return (
        <>
            {undone.map((item) => (
                <Item
                    {...item}
                    key={item.id}
                    onEditItem={onEditItem}
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
        </>
    );
};
