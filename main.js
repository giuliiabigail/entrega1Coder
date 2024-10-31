
let tareas = [];
let quiereEntrar = confirm ("¿Queres organizar tus tareas?");


function mostrarMenu() {
    let opcion = '';

    while (opcion !== '5') {
        opcion = prompt("Elige una opción:\n1. Agregar tarea\n2. Ver tareas\n3. Marcar tarea completada\n4. Eliminar tarea\n5. Salir");

        switch (opcion) {
            case '1':
                agregarTarea();
                break;
            case '2':
                verTareas();
                break;
            case '3':
                marcarTareaCompletada();
                break;
            case '4':
                eliminarTarea();
                break;
            case '5':
                alert("Saliendo...");
                break;
            default:
                alert("Opción inválida. Inténtalo de nuevo.");
        }
    }
}



const agregarTarea = () => {
    const nuevaTarea = prompt("Introduce la nueva tarea:");
    if (nuevaTarea) {
        tareas.push({ nombre: nuevaTarea, completada: false });
        alert("Tarea agregada.");
    }
};

function verTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas.");
        return;
    }

    let listaTareas = "Tareas:\n\nPendientes:\n";

    for (let index = 0; index < tareas.length; index++) {
    const tarea = tareas[index];
    if (!tarea.completada) {
        listaTareas += `${index + 1}. ${tarea.nombre} - Pendiente\n`;
    }
}

listaTareas += "\nCompletadas:\n";
for (let index = 0; index < tareas.length; index++) {
    const tarea = tareas[index];
    if (tarea.completada) {
        listaTareas += `${index + 1}. ${tarea.nombre} - Completada\n`;
    }
}

alert(listaTareas);

}
function marcarTareaCompletada() {
    if (tareas.length === 0) {
        alert("No hay tareas para completar.");
        return;
    }

    const indice = parseInt(prompt("Introduce el número de la tarea que quieres marcar como completada:")) - 1;

    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        alert("Tarea marcada como completada.");
    } else {
        alert("Índice inválido.");
    }
}



function eliminarTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas para eliminar.");
        return;
    }

    const indice = parseInt(prompt("Introduce el número de la tarea a eliminar:")) - 1;
    
    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
        alert("Tarea eliminada.");
    } else {
        alert("Índice inválido.");
    }
}

mostrarMenu();