// Tareas almacenadas
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

// Elementos del DOM
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list");
const pendingCount = document.getElementById("pending-count");
const completedCount = document.getElementById("completed-count");

// Guardar tareas en LocalStorage
const saveTasks = () => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
    updateTaskCounts(); // Actualizamos los contadores
};

// Actualizar contadores
const updateTaskCounts = () => {
    const tareasPendientes = tareas.filter(tarea => !tarea.completada).length;
    const tareasCompletadas = tareas.filter(tarea => tarea.completada).length;

    pendingCount.textContent = `Tareas pendientes: ${tareasPendientes}`;
    completedCount.textContent = `Tareas completadas: ${tareasCompletadas}`;
};

// Renderizar tareas
const verTareas = () => {
    // Limpiar listas
    pendingList.innerHTML = "";
    completedList.innerHTML = "";

    // Tareas pendientes
    const pendientes = tareas.filter(tarea => !tarea.completada);
    if (pendientes.length === 0) {
        pendingList.innerHTML = "<p>No hay tareas pendientes.</p>";
    } else {
        pendientes.forEach((tarea, index) => {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                ${tarea.nombre}
                <div>
                    <button aria-label="Marcar como completada" onclick="marcarTareaCompletada(${index})">✔</button>
                    <button aria-label="Eliminar tarea" onclick="eliminarTarea(${index})">✖</button>
                </div>
            `;
            pendingList.appendChild(taskItem);
        });
    }

    // Tareas completadas
    const completadas = tareas.filter(tarea => tarea.completada);
    if (completadas.length === 0) {
        completedList.innerHTML = "<p>No hay tareas completadas.</p>";
    } else {
        completadas.forEach((tarea, index) => {
            const taskItem = document.createElement("li");
            taskItem.className = "completed";
            taskItem.innerHTML = `
                ${tarea.nombre}
                <div>
                    <button aria-label="Marcar como pendiente" onclick="marcarTareaPendiente(${index})">↩</button>
                    <button aria-label="Eliminar tarea" onclick="eliminarTarea(${index})">✖</button>
                </div>
            `;
            completedList.appendChild(taskItem);
        });
    }
};

// Agregar tarea
const agregarTarea = (nuevaTarea) => {
    if (nuevaTarea) {
        tareas.push({ nombre: nuevaTarea, completada: false });
        saveTasks();
        verTareas();
    }
};

// Marcar tarea como completada
const marcarTareaCompletada = (index) => {
    if (tareas[index]) {
        tareas[index].completada = true;
        saveTasks();
        verTareas();
    }
};

// Marcar tarea como pendiente
const marcarTareaPendiente = (index) => {
    if (tareas[index]) {
        tareas[index].completada = false;
        saveTasks();
        verTareas();
    }
};

// Eliminar tarea
const eliminarTarea = (index) => {
    if (tareas[index]) {
        tareas.splice(index, 1);
        saveTasks();
        verTareas();
    }
};

// Evento para el formulario
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nuevaTarea = taskInput.value.trim();
    agregarTarea(nuevaTarea);
    taskInput.value = ""; // Limpiar el input
});

// Mostrar tareas al cargar la página
verTareas();
``
