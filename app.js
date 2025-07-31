// Arreglo para guardar los amigos
    let amigos = [];

    // Función para agregar un amigo a la lista
    function agregarAmigo() {
      // Obtener y limpiar el valor ingresado
      let input = document.getElementById("amigo");
      let nombreAmigo = input.value.trim();

      // Validar que no esté vacío
      if (nombreAmigo === "") {
        alert('Por favor, inserte un nombre');
        return;
      }
        
        // Agregar el nombre al arreglo
      amigos.push(nombreAmigo);

      // Mostrar lista actualizada
      mostrarAmigos();
 
      // Limpiar input y dejar foco para nuevo ingreso
      input.value = "";
    }

    // Función para mostrar la lista de amigos en pantalla
    function mostrarAmigos() {
      let lista = document.getElementById("listaAmigos");
      lista.innerHTML = ""; // Limpiar la lista antes de mostrar

      // Crear un <li> por cada amigo y agregarlo a la lista
      for (let amigo of amigos) {
        let li = document.createElement("li");
        li.innerText = amigo;
        lista.appendChild(li);
      }
    }

    // Función para sortear un amigo secreto al azar
    function sortearAmigo() {
      // Validar que haya al menos un amigo
      if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
      }

      // Obtener un nombre aleatorio
      let sorteado = Math.floor(Math.random() * amigos.length);
      let nombreSorteado = amigos[sorteado];

      // Mostrar el resultado en pantalla
      document.getElementById("resultado").innerHTML = ` El amigo secreto es: 🎉${nombreSorteado}`; 

      // Limpiar la lista visible para que no aparezcan los nombres
      document.getElementById("listaAmigos").innerHTML = "";
      
    }

       
      
    
