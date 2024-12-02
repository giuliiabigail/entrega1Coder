// Este archivo maneja solo el almacenamiento de datos, no es necesario modificarlo.

export const saveTasksToLocalStorage = (tareas) => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
};

export const getTasksFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("tareas")) || [];
};
