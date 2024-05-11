const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#enter');

// FUNCIÓN AGREGAR TAREA //

function agregarTarea(tarea) {
  const elemento =  `   <li id="elemento"> 
                        <i class="fa-regular fa-circle" data="realizado" id="0"></i>
                        <p class="text">${tarea}</p>
                        <i class="fa-solid fa-trash-can" data="eliminado" id="0"></i>
                        </li>
                    `;
  lista.insertAdjacentHTML("beforeend",elemento);
}

botonEnter.addEventListener('click',()=> {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea);
  }
  input.value='';
});
