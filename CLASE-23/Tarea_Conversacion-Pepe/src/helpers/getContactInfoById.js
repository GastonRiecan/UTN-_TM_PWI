import data from "../data/data.js";


export function getContactInfoById(id) {
    return data.find((chat) => Number(chat.id) === Number(id));
}


