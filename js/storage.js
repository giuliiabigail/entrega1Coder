
export const saveTasksToLocalStorage = (tareas) => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
};

export const getTasksFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("tareas")) || [];
};
