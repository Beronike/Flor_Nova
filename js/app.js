let boton= document.getElementById("contactar");
function contactar(){
   let resultado= document.getElementById("formulario");
  if (document.getElementById("miFormulario")) {
    return;
  }

  const formulario = document.createElement("form");
  formulario.id = "miFormulario";

  formulario.innerHTML = `
        <input type="text" name="nombre" placeholder="Nombre" required><br>

        <input type="email" name="email" placeholder="Correo electrónico" required><br>

        <input type="tel" name="telefono" placeholder="Teléfono de contacto" required><br>

        <textarea name="comentario" placeholder="Comentario" rows="6" required></textarea><br>

        <button type="submit">Enviar</button>
      `;

  formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Formulario enviado");
  });

 resultado.appendChild(formulario);

}
boton.onclick=contactar;
