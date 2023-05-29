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

function girar() {
  // Obtener el valor actual almacenado en localStorage (si existe)
  var valorActual = localStorage.getItem("turnos");
  // Verificar si el valor existe y convertirlo a número
  var numeroActual = valorActual ? parseInt(valorActual) : 0;
  // Sumar 1 al número actual
  var nuevoNumero = numeroActual + 1;

  if (nuevoNumero < 2001) {
    localStorage.setItem("turnos", nuevoNumero);

    let rand = Math.random() * 10000;
    calcular(rand);
    var sonido = document.querySelector("#audio");
    sonido.setAttribute("src", "sonido/ruleta.mp3");
    document.querySelector(".contador").innerHTML = "TURNOS: " + nuevoNumero;
  }

  // Alertas Swal

  SigueIntentando = () => {
    Swal.fire({
      title: `Sigue Intentando`,
      confirmButtonColor: "#3085d6",
      color: "#716add",
      imageUrl: `https://i.pinimg.com/originals/8f/d4/29/8fd429e6f62ec2bb69e16314f81a2cc4.gif`,
      imageHeight: 600,
      padding: "3em",
      imageAlt: "A tall image",
      backdrop: `
      #ffd00020     
      `,
      confirmButtonText: "Aceptar",
      customClass: {
        title: "tituloAlerta",
      },
    });
  };

  finalista = () => {
    Swal.fire({
      confirmButton: "btn btn-success",
      title: `Felicitaciones Eres finalista`,
      html: `
      <a class="ctoFormulario" href="../RuletaCasino/finalista.html">Llenar Formulario</a>
      `,
      confirmButtonText: "Cerrar",
      imageUrl: `https://i.pinimg.com/originals/8f/d4/29/8fd429e6f62ec2bb69e16314f81a2cc4.gif`,
      imageHeight: 600,
      padding: "3em",
      imageAlt: "A tall image",
      backdrop: `
      #ffd00020     
        `,
      customClass: {
        title: "tituloAlerta",
      },
    });
  };

  ganasteRaspa = () => {
    Swal.fire({
      title: `Felicidades Ganaste Raspa y gana`,
      confirmButtonColor: "#3085d6",
      color: "#716add",
      imageUrl: `https://i.pinimg.com/originals/8f/d4/29/8fd429e6f62ec2bb69e16314f81a2cc4.gif`,
      imageHeight: 600,
      padding: "3em",
      imageAlt: "A tall image",
      backdrop: `
      #ffd00020     
      `,
      confirmButtonText: "Aceptar",
      customClass: {
        title: "tituloAlerta",
      },
    });
  };

  ganaste20 = () => {
    Swal.fire({
      title: `Felicidades Ganaste 20.000`,
      confirmButtonColor: "#3085d6",
      color: "#716add",
      imageUrl: `https://i.pinimg.com/originals/8f/d4/29/8fd429e6f62ec2bb69e16314f81a2cc4.gif`,
      imageHeight: 600,
      padding: "3em",
      imageAlt: "A tall image",
      backdrop: `
      #ffd00020     
      `,
      confirmButtonText: "Aceptar",
      customClass: {
        title: "tituloAlerta",
      },
    });
  };

  ganaste30 = () => {
    Swal.fire({
      title: `Felicidades Ganaste 30.000`,
      confirmButtonColor: "#3085d6",
      color: "#716add",
      imageUrl: `https://i.pinimg.com/originals/8f/d4/29/8fd429e6f62ec2bb69e16314f81a2cc4.gif`,
      imageHeight: 600,
      padding: "3em",
      imageAlt: "A tall image",
      backdrop: `
      #ffd00020     
      `,
      confirmButtonText: "Aceptar",
      customClass: {
        title: "tituloAlerta",
      },
    });
  };

  ganaste40 = () => {
    Swal.fire({
      title: `Felicidades Ganaste 40.000`,
      confirmButtonColor: "#3085d6",
      color: "#716add",
      imageUrl: `https://i.pinimg.com/originals/8f/d4/29/8fd429e6f62ec2bb69e16314f81a2cc4.gif`,
      imageHeight: 600,
      padding: "3em",
      imageAlt: "A tall image",
      backdrop: `
      #ffd00020     
      `,
      confirmButtonText: "Aceptar",
      customClass: {
        title: "tituloAlerta",
      },
    });
  };

  ganaste100 = () => {
    Swal.fire({
      title: `Felicidades Ganaste 100.000`,
      confirmButtonColor: "#3085d6",
      color: "#716add",
      imageUrl: `https://i.pinimg.com/originals/8f/d4/29/8fd429e6f62ec2bb69e16314f81a2cc4.gif`,
      imageHeight: 600,
      padding: "3em",
      imageAlt: "A tall image",
      backdrop: `
      #ffd00020     
      `,
      confirmButtonText: "Aceptar",
      customClass: {
        title: "tituloAlerta",
      },
    });
  };

  // Funcion Calcular

  function calcular(rand) {
    ruleta.style.transform = "rotate(" + rand + "deg)";

    //  Calcular Random Dia uno
    function generarPremios(totalGiros, premiosDia) {
      var numerosGiro = Array.from(
        { length: totalGiros },
        (_, index) => index + 1
      );
      var premios = [];

      for (var i = 0; i < premiosDia; i++) {
        var indiceAleatorio = Math.floor(Math.random() * numerosGiro.length);
        var numeroPremio = numerosGiro.splice(indiceAleatorio, 1)[0];
        premios.push(numeroPremio);
      }

      return premios;
    }

    var totalGiros = 2001;
    var premiosDia = 209;

    // Verificar si los premios ya han sido generados anteriormente
    if (!localStorage.getItem("premiosDiauno")) {
      var resultado = generarPremios(totalGiros, premiosDia);

      localStorage.setItem("premiosDiauno", JSON.stringify(resultado));
    } else {
      // Los premios ya han sido generados, obtenerlos del localStorage
      var premiosGuardados = JSON.parse(localStorage.getItem("premiosDiauno"));
      // console.log("Premios previamente generados:", premiosGuardados);
    }

    const valor = Number(localStorage.getItem(`turnos`));

    // Contadores de los premios Ganados

    function contadorFinalistas() {
      // Obtener el valor actual almacenado en localStorage (si existe)
      var valorActual = localStorage.getItem("Finalistas");
      // Verificar si el valor existe y convertirlo a número
      var numeroActual = valorActual ? parseInt(valorActual) : 0;
      // Sumar 1 al número actual
      var nuevoNumero = numeroActual + 1;
      localStorage.setItem("Finalistas", nuevoNumero);
    }

    function contadorpre40() {
      var valorActual = localStorage.getItem("intentos40");
      // Verificar si el valor existe y convertirlo a número
      var numeroActual = valorActual ? parseInt(valorActual) : 0;
      // Sumar 1 al número actual
      var nuevoNumero = numeroActual + 1;
      localStorage.setItem("intentos40", nuevoNumero);
    }

    function contadorpre30() {
      var valorActual = localStorage.getItem("intentos30");
      // Verificar si el valor existe y convertirlo a número
      var numeroActual = valorActual ? parseInt(valorActual) : 0;
      // Sumar 1 al número actual
      var nuevoNumero = numeroActual + 1;
      localStorage.setItem("intentos30", nuevoNumero);
    }
    function contadorpre20() {
      var valorActual = localStorage.getItem("intentos20");
      // Verificar si el valor existe y convertirlo a número
      var numeroActual = valorActual ? parseInt(valorActual) : 0;
      // Sumar 1 al número actual
      var nuevoNumero = numeroActual + 1;
      localStorage.setItem("intentos20", nuevoNumero);
    }
    function contadorpre100() {
      var valorActual = localStorage.getItem("intentos100");
      // Verificar si el valor existe y convertirlo a número
      var numeroActual = valorActual ? parseInt(valorActual) : 0;
      // Sumar 1 al número actual
      var nuevoNumero = numeroActual + 1;
      localStorage.setItem("intentos100", nuevoNumero);
    }
    function contadorpreRaspa() {
      var valorActual = localStorage.getItem("intentosRaspa");
      // Verificar si el valor existe y convertirlo a número
      var numeroActual = valorActual ? parseInt(valorActual) : 0;
      // Sumar 1 al número actual
      var nuevoNumero = numeroActual + 1;
      localStorage.setItem("intentosRaspa", nuevoNumero);
    }

    setTimeout(() => {
      switch (true) {
        // premios Finalistas

        case valor === premiosGuardados[1]: // Eres Finalista  Premio 1
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;

        case valor === premiosGuardados[2]: // Eres Finalista  Premio 2
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[3]: // Eres Finalista  Premio 3
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;

        case valor === premiosGuardados[4]: // Eres Finalista  Premio 4
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;

        case valor === premiosGuardados[5]: // Eres Finalista  Premio 5
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;

        case valor === premiosGuardados[6]: // Eres Finalista  Premio 6
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[7]: // Eres Finalista  Premio 7
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[8]: // Eres Finalista  Premio 8
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[9]: // Eres Finalista  Premio 9
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[10]: // Eres Finalista  Premio 10
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[11]: // Eres Finalista  Premio 11
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[12]: // Eres Finalista  Premio 12
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[13]: // Eres Finalista  Premio 13
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[14]: // Eres Finalista  Premio 14
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[15]: // Eres Finalista  Premio 15
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[16]: // Eres Finalista  Premio 16
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[17]: // Eres Finalista  Premio 17
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[18]: // Eres Finalista  Premio 18
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[19]: // Eres Finalista  Premio 19
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[20]: // Eres Finalista  Premio 20
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[21]: // Eres Finalista  Premio 21
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[22]: // Eres Finalista  Premio 22
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[23]: // Eres Finalista  Premio 23
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[24]: // Eres Finalista  Premio 24
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[25]: // Eres Finalista  Premio 25
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[26]: // Eres Finalista  Premio 26
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[27]: // Eres Finalista  Premio 27
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[28]: // Eres Finalista  Premio 28
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[29]: // Eres Finalista  Premio 29
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[30]: // Eres Finalista  Premio 30
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[31]: // Eres Finalista  Premio 31
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[32]: // Eres Finalista  Premio 32
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[33]: // Eres Finalista  Premio 33
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[34]: // Eres Finalista  Premio 34
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[35]: // Eres Finalista  Premio 35
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[36]: // Eres Finalista  Premio 36
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[37]: // Eres Finalista  Premio 37
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[38]: // Eres Finalista  Premio 38
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[39]: // Eres Finalista  Premio 39
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;
        case valor === premiosGuardados[40]: // Eres Finalista  Premio 40
          reproducirAudio();
          finalista(); // Alerta
          contadorFinalistas();
          break;

        // premio de 40

        case valor === premiosGuardados[41]: //  Ganaste 40  Premio 1
          reproducirAudio();
          ganaste40(); // Alerta
          contadorpre40();
          break;

        case valor === premiosGuardados[42]: //  Ganaste 40  Premio 2
          reproducirAudio();
          ganaste40(); // Alerta
          contadorpre40();
          break;

        case valor === premiosGuardados[43]: //  Ganaste 40  Premio 3
          reproducirAudio();
          ganaste40(); // Alerta
          contadorpre40();
          break;

        case valor === premiosGuardados[44]: //  Ganaste 40  Premio 4
          reproducirAudio();
          ganaste40(); // Alerta
          contadorpre40();
          break;
        case valor === premiosGuardados[45]: //  Ganaste 40  Premio 5
          reproducirAudio();
          ganaste40(); // Alerta
          contadorpre40();
          break;

        // premio de 30

        case valor === premiosGuardados[46]: //  Ganaste 30  Premio 1
          reproducirAudio();
          ganaste30(); // Alerta
          contadorpre30();
          break;
        case valor === premiosGuardados[47]: //  Ganaste 30  Premio 2
          reproducirAudio();
          ganaste30(); // Alerta
          contadorpre30();
          break;
        case valor === premiosGuardados[48]: //  Ganaste 30  Premio 3
          reproducirAudio();
          ganaste30(); // Alerta
          contadorpre30();
          break;
        case valor === premiosGuardados[49]: //  Ganaste 30  Premio 4
          reproducirAudio();
          ganaste30(); // Alerta
          contadorpre30();
          break;
        case valor === premiosGuardados[50]: //  Ganaste 30  Premio 5
          reproducirAudio();
          ganaste30(); // Alerta
          contadorpre30();
          break;

        // premio de 20

        case valor === premiosGuardados[51]: //  Ganaste  Raspa  Premio 1
          reproducirAudio();
          ganaste20(); // Alerta
          contadorpre20();
          break;
        case valor === premiosGuardados[52]: //  Ganaste  Raspa  Premio 2
          reproducirAudio();
          ganaste20(); // Alerta
          contadorpre20();
          break;
        case valor === premiosGuardados[53]: //  Ganaste  Raspa  Premio 3
          reproducirAudio();
          ganaste20(); // Alerta
          contadorpre20();
          break;
        case valor === premiosGuardados[54]: //  Ganaste  Raspa  Premio 4
          reproducirAudio();
          ganaste20(); // Alerta
          contadorpre20();
          break;
        case valor === premiosGuardados[55]: //  Ganaste  Raspa  Premio 5
          reproducirAudio();
          ganaste20(); // Alerta
          contadorpre20();
          break;

        // premio de 100

        case valor === premiosGuardados[56]: //  Ganaste  Raspa  Premio 1
          reproducirAudio();
          ganaste100(); // Alerta
          contadorpre100();
          break;

        case valor === premiosGuardados[57]: //  Ganaste  Raspa  Premio 2
          reproducirAudio();
          ganaste100(); // Alerta
          contadorpre100();
          break;

        // premios Raspa

        case valor === premiosGuardados[58]: //   Ganaste  Raspa  Premio 1
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;

        case valor === premiosGuardados[59]: //   Ganaste  Raspa  Premio 2
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[60]: //   Ganaste  Raspa  Premio 3
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[61]: //   Ganaste  Raspa  Premio 4
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[62]: //   Ganaste  Raspa  Premio 5
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[63]: //   Ganaste  Raspa  Premio 6
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[64]: //   Ganaste  Raspa  Premio 7
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[65]: //   Ganaste  Raspa  Premio 8
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[66]: //   Ganaste  Raspa  Premio 9
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[67]: //   Ganaste  Raspa  Premio 10
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[68]: //   Ganaste  Raspa  Premio 11
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[69]: //   Ganaste  Raspa  Premio 12
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[70]: //   Ganaste  Raspa  Premio 13
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[71]: //   Ganaste  Raspa  Premio 14
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[72]: //   Ganaste  Raspa  Premio 15
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[73]: //   Ganaste  Raspa  Premio 16
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[74]: //   Ganaste  Raspa  Premio 17
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[75]: //   Ganaste  Raspa  Premio 18
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[76]: //   Ganaste  Raspa  Premio 19
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[77]: //   Ganaste  Raspa  Premio 20
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[78]: //   Ganaste  Raspa  Premio 21
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[79]: //   Ganaste  Raspa  Premio 22
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[80]: //   Ganaste  Raspa  Premio 23
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[81]: //   Ganaste  Raspa  Premio 24
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[82]: //   Ganaste  Raspa  Premio 25
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[83]: //   Ganaste  Raspa  Premio 26
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[84]: //   Ganaste  Raspa  Premio 27
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[85]: //   Ganaste  Raspa  Premio 28
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[86]: //   Ganaste  Raspa  Premio 29
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[87]: //   Ganaste  Raspa  Premio 30
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[88]: //   Ganaste  Raspa  Premio 31
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[89]: //   Ganaste  Raspa  Premio 32
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[90]: //   Ganaste  Raspa  Premio 33
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[91]: //   Ganaste  Raspa  Premio 34
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[92]: //   Ganaste  Raspa  Premio 35
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[93]: //   Ganaste  Raspa  Premio 36
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[94]: //   Ganaste  Raspa  Premio 37
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[95]: //   Ganaste  Raspa  Premio 38
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[96]: //   Ganaste  Raspa  Premio 39
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[97]: //   Ganaste  Raspa  Premio 40
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[98]: //   Ganaste  Raspa  Premio 41
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[99]: //   Ganaste  Raspa  Premio 42
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[100]: //   Ganaste  Raspa  Premio 43
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[101]: //   Ganaste  Raspa  Premio 44
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[102]: //   Ganaste  Raspa  Premio 45
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[103]: //   Ganaste  Raspa  Premio 46
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[104]: //   Ganaste  Raspa  Premio 47
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[105]: //   Ganaste  Raspa  Premio 48
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[106]: //   Ganaste  Raspa  Premio 49
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[107]: //   Ganaste  Raspa  Premio 50
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[108]: //   Ganaste  Raspa  Premio 51
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[109]: //   Ganaste  Raspa  Premio 52
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[110]: //   Ganaste  Raspa  Premio 53
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[111]: //   Ganaste  Raspa  Premio 54
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[112]: //   Ganaste  Raspa  Premio 55
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[113]: //   Ganaste  Raspa  Premio 56
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[114]: //   Ganaste  Raspa  Premio 57
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[115]: //   Ganaste  Raspa  Premio 58
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[116]: //   Ganaste  Raspa  Premio 59
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[117]: //   Ganaste  Raspa  Premio 60
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[118]: //   Ganaste  Raspa  Premio 61
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[119]: //   Ganaste  Raspa  Premio 62
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[120]: //   Ganaste  Raspa  Premio 63
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[121]: //   Ganaste  Raspa  Premio 64
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[122]: //   Ganaste  Raspa  Premio 65
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[123]: //   Ganaste  Raspa  Premio 66
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[124]: //   Ganaste  Raspa  Premio 67
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[125]: //   Ganaste  Raspa  Premio 68
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[126]: //   Ganaste  Raspa  Premio 69
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[127]: //   Ganaste  Raspa  Premio 70
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[128]: //   Ganaste  Raspa  Premio 71
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[129]: //   Ganaste  Raspa  Premio 72
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[130]: //   Ganaste  Raspa  Premio 73
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[131]: //   Ganaste  Raspa  Premio 74
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[132]: //   Ganaste  Raspa  Premio 75
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[133]: //   Ganaste  Raspa  Premio 76
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[134]: //   Ganaste  Raspa  Premio 77
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[135]: //   Ganaste  Raspa  Premio 78
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[136]: //   Ganaste  Raspa  Premio 79
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[137]: //   Ganaste  Raspa  Premio 80
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[138]: //   Ganaste  Raspa  Premio 81
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[139]: //   Ganaste  Raspa  Premio 82
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[140]: //   Ganaste  Raspa  Premio 83
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[141]: //   Ganaste  Raspa  Premio 84
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[142]: //   Ganaste  Raspa  Premio 85
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[143]: //   Ganaste  Raspa  Premio 86
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[144]: //   Ganaste  Raspa  Premio 87
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[145]: //   Ganaste  Raspa  Premio 88
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[146]: //   Ganaste  Raspa  Premio 89
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[147]: //   Ganaste  Raspa  Premio 89
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[148]: //   Ganaste  Raspa  Premio 90
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[149]: //   Ganaste  Raspa  Premio 91
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[150]: //   Ganaste  Raspa  Premio 92
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[151]: //   Ganaste  Raspa  Premio 93
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[152]: //   Ganaste  Raspa  Premio 94
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[153]: //   Ganaste  Raspa  Premio 95
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[154]: //   Ganaste  Raspa  Premio 96
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[155]: //   Ganaste  Raspa  Premio 97
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[156]: //   Ganaste  Raspa  Premio 98
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[157]: //   Ganaste  Raspa  Premio 99
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[158]: //   Ganaste  Raspa  Premio 100
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[159]: //   Ganaste  Raspa  Premio 101
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[160]: //   Ganaste  Raspa  Premio 102
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[161]: //   Ganaste  Raspa  Premio 103
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[162]: //   Ganaste  Raspa  Premio 104
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[163]: //   Ganaste  Raspa  Premio 105
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[164]: //   Ganaste  Raspa  Premio 106
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[165]: //   Ganaste  Raspa  Premio 107
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[166]: //   Ganaste  Raspa  Premio 108
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[167]: //   Ganaste  Raspa  Premio 109
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[168]: //   Ganaste  Raspa  Premio 110
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[169]: //   Ganaste  Raspa  Premio 111
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[170]: //   Ganaste  Raspa  Premio 112
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[171]: //   Ganaste  Raspa  Premio 113
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[172]: //   Ganaste  Raspa  Premio 114
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[173]: //   Ganaste  Raspa  Premio 115
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[174]: //   Ganaste  Raspa  Premio 116
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[175]: //   Ganaste  Raspa  Premio 117
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[176]: //   Ganaste  Raspa  Premio 118
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[177]: //   Ganaste  Raspa  Premio 119
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[178]: //   Ganaste  Raspa  Premio 120
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[179]: //   Ganaste  Raspa  Premio 121
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[180]: //   Ganaste  Raspa  Premio 122
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[181]: //   Ganaste  Raspa  Premio 123
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[182]: //   Ganaste  Raspa  Premio 124
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[183]: //   Ganaste  Raspa  Premio 125
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[184]: //   Ganaste  Raspa  Premio 126
          reproducirAudio();
          1;
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[185]: //   Ganaste  Raspa  Premio 127
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[186]: //   Ganaste  Raspa  Premio 128
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[187]: //   Ganaste  Raspa  Premio 129
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[188]: //   Ganaste  Raspa  Premio 130
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[189]: //   Ganaste  Raspa  Premio 131
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[190]: //   Ganaste  Raspa  Premio 132
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[191]: //   Ganaste  Raspa  Premio 133
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[192]: //   Ganaste  Raspa  Premio 134
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[193]: //   Ganaste  Raspa  Premio 135
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[194]: //   Ganaste  Raspa  Premio 136
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[195]: //   Ganaste  Raspa  Premio 137
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[196]: //   Ganaste  Raspa  Premio 138
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[197]: //   Ganaste  Raspa  Premio 139
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[198]: //   Ganaste  Raspa  Premio 140
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[199]: //   Ganaste  Raspa  Premio 141
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[200]: //   Ganaste  Raspa  Premio 142
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[201]: //   Ganaste  Raspa  Premio 143
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[202]: //   Ganaste  Raspa  Premio 144
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[203]: //   Ganaste  Raspa  Premio 145
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[204]: //   Ganaste  Raspa  Premio 146
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[205]: //   Ganaste  Raspa  Premio 147
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[206]: //   Ganaste  Raspa  Premio 148
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;
        case valor === premiosGuardados[207]: //   Ganaste  Raspa  Premio 149
          reproducirAudio();
          ganasteRaspa(); // Alerta
          contadorpreRaspa();
          break;

        default:
          reproducirAudio();
          SigueIntentando();
      }
    }, 5000);
  }
}

// Formulario Turnos

// Finalistas
const finalistaElement = document.querySelector(`.finalista`);
finalistaElement
  ? (finalistaElement.innerHTML = localStorage.getItem("Finalistas") || "")
  : undefined;

// Turnos
const forTurnoElement = document.querySelector(`.forTurno`);
forTurnoElement
  ? (forTurnoElement.innerHTML = localStorage.getItem("turnos") || "")
  : undefined;

// intentosRaspa
const forRaspaElement = document.querySelector(`.forRaspa`);
forRaspaElement
  ? (forRaspaElement.innerHTML = localStorage.getItem("intentosRaspa") || "")
  : undefined;

// intentos100
const for100Element = document.querySelector(`.for100`);
for100Element
  ? (for100Element.innerHTML = localStorage.getItem("intentos100") || "")
  : undefined;

// intentos40
const for40Element = document.querySelector(`.for40`);
for40Element
  ? (for40Element.innerHTML = localStorage.getItem("intentos40") || "")
  : undefined;

// intentos30
const for30Element = document.querySelector(`.for30`);
for30Element
  ? (for30Element.innerHTML = localStorage.getItem("intentos30") || "")
  : undefined;

// intentos20
const for20Element = document.querySelector(`.for20`);
for20Element
  ? (for20Element.innerHTML = localStorage.getItem("intentos20") || "")
  : undefined;
// mostar Datos del local Storage

// Paso 1: Obtener los datos del localStorage
var datosLocalStorage = localStorage.getItem("usersFinalistas");

// Paso 2: Parsear los datos a un objeto JavaScript
var datos = JSON.parse(datosLocalStorage);
// Paso 3: Crear una tabla en el documento HTML
const contenedor = document.querySelector(".usuariosFinalistas");

// Iterar sobre el arreglo de objetos y crear elementos HTML para cada objeto
datos.forEach(function (objeto, index) {
  var elemento = document.createElement("tbody");
  elemento.innerHTML = `
  <td>${index + 1}</td>
  <td>${objeto.nombre}</td>
  `;
  contenedor.appendChild(elemento);
});
