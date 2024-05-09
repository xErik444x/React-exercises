export const getVar = (item) => {
    return JSON.parse(localStorage.getItem(item));
}

export const setVar = ({obj, name}) => {
    localStorage.setItem(name, JSON.stringify(obj));
}
