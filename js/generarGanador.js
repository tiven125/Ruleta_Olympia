// Boton de girar ruleta
// const btn_girar = document.querySelector(`#btn_girar`);
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    girar();
  }
});

function reproducirAudio() {
  var audio = document.getElementById("miAudio");
  audio.play();
}

const verificar = localStorage.getItem("Finalistas");

function girar() {
  if (verificar ==
     "40") {
    let rand = Math.random() * 12000;
    calcularGanador(rand);
    var sonido = document.querySelector("#audio");
    sonido.setAttribute("src", "sonido/ruleta.mp3");

    // Funcion Calcular
    function calcularGanador(rand) {
      var randomNumber = Math.floor(Math.random() * 40); //
      ruleta.style.transform = "rotate(" + rand + "deg)";

      const trarDatosFinalistas = localStorage.getItem("usersFinalistas");

      const datosFinalistas = JSON.parse(trarDatosFinalistas);

      // console.log(randomNumber);

      for (var i = 0; i < datosFinalistas.length; i++) {
        if (i === randomNumber) {
          setTimeout(() => {
            reproducirAudio();
            Swal.fire({
              title: `Felicidades Ganaste Giro Millonario 500.000`,
              html: `
              <span class="nombreGanador">${datosFinalistas[i].nombre}</span>
                         `,
              confirmButtonColor: "#3085d6",
              color: "#716add",
              imageUrl: `https://i.pinimg.com/originals/8f/d4/29/8fd429e6f62ec2bb69e16314f81a2cc4.gif`,
              imageHeight: 600,
              padding: "3em",
              imageAlt: "A tall image",
              backdrop: `
                rgba(0,0,123,0.4)      
              `,
              confirmButtonText: "Aceptar",
              customClass: {
                title: "tituloAlerta",
              },
            });
          }, 5000);

          break;
        }
      }
    }
  } else {
    setTimeout(() => {
      reproducirAudio();
      Swal.fire({
        title: `Debe de tener 40 finalistas para generar el ganador`,
        confirmButtonColor: "#3085d6",
        color: "#716add",
        imageHeight: 600,
        padding: "3em",
        imageAlt: "A tall image",
        backdrop: `
          rgba(0,0,123,0.4)      
        `,
        confirmButtonText: "Aceptar",
        customClass: {
          title: "tituloAlerta",
        },
      });
    }, 1000);
  }
}
