// Formulario Finalistas
const openModal = document.getElementById(`openRegistroModal`);
const modal = document.getElementById(`modal`);
const cerrarModal = document.getElementById(`cerrarRegistrer`);
const registreForm = document.getElementById(`regitro-form`);

const showRegistrerModal = () => {
  modal.classList.toggle(`is-active`);
};

openModal.addEventListener(`click`, showRegistrerModal);
cerrarModal.addEventListener(`click`, showRegistrerModal);

registreForm.addEventListener(`submit`, async (e) => {
  e.preventDefault();
  const nombre = registreForm[`nombre`];
  const cedula = registreForm[`cedula`];
  const telefono = registreForm[`telefono`];

  const finalista = {
    nombre: nombre.value,
    cedula: cedula.value,
    telefono: telefono.value,
  };

  let getFinalistas = JSON.parse(await localStorage.getItem(`usersFinalistas`));

  Array.isArray(getFinalistas)
    ? getFinalistas.push(finalista)
    : (getFinalistas = [finalista]);

  localStorage.setItem(`usersFinalistas`, JSON.stringify(getFinalistas));

  alert(`Finalista Agregado`);
  showRegistrerModal();
  registreForm.reset();
  mostrarFinalistas();
});

async function delFinalista(id) {
  const pregunta = confirm("¿Estas seguro de eliminar este finalista?");
  if (pregunta) {
    const finalistas = JSON.parse(
      await localStorage.getItem("usersFinalistas")
    );
    finalistas.splice(id, 1);
    localStorage.setItem("usersFinalistas", JSON.stringify(finalistas));
    mostrarFinalistas();
  }
}

async function mostrarFinalistas() {
  const finalistas = JSON.parse(localStorage.getItem(`usersFinalistas`));
  const tabla = document.querySelector(`.table`);
  tabla.innerHTML = "";

  finalistas?.map((finalista, index) => {
    const fila = document.createElement(`tbody`);
    fila.innerHTML = `
  
  <td>${index + 1}</td>
  <td>${finalista.nombre}</td>
  <td>${finalista.cedula}</td>
  <td>${finalista.telefono}</td>
  <td>
    <button onclick="delFinalista(${index})" id="del${index}" class="btnDel button is-danger is-light"><i class="fa-solid fa-trash"></i></button>
  </td>
  `;
    tabla.appendChild(fila);
  });
}

mostrarFinalistas();

window.delFinalista = delFinalista;
