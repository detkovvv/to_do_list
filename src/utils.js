export const getId = () => crypto.randomUUID();

export const list = [
    {
        title: "Покормить кошку",
        done: false,
    },
    {
        title: "Приготовить обед",
        done: true,
    },
    {
        title: "Просмотреть уроки",
        done: false,
    },
    {
        title: "Заказать подарок",
        done: false,
    },
].map((item) => ({ ...item, id: getId() }));
