 var tablacarta = document.querySelector("#tabla");
 formagregar = document.querySelector("#formulario");
 formagregar.addEventListener("submit", agregarcarta);
 var contenedorimg = document.querySelector("#cartasimg")


 var datainicial = [{ "numero": "8", "carta": "TREBOL", "contador": "0" },
     { "numero": "6", "carta": "TREBOL", "contador": "0" },
     { "numero": "2", "carta": "DIAMANTE", "contador": "0" },
     { "numero": "7", "carta": "DIAMANTE", "contador": "0" },
     { "numero": "5", "carta": "CORAZON", "contador": "0" }
 ];

 localStorage.setItem("datos", JSON.stringify(datainicial));


 recreartabla(ordenar());
 pintarcartas();

 /*function creartabla(data) {



     for (i in data) {


         var tr = document.createElement("tr");
         var td1 = document.createElement("td");
         var td2 = document.createElement("td");
         var td3 = document.createElement("td");

         td1.textContent = data[i].numero;
         td2.textContent = data[i].carta;
         td3.textContent = data[i].contador;

         tr.appendChild(td1);
         tr.appendChild(td2);
         tr.appendChild(td3);
         tablacarta.appendChild(tr);

     }

 }
*/


 function eliminartabla() {
     var tr = document.getElementsByTagName("tbody");
     var tabla = document.getElementById("tabla")

     tr.innerHTML = "";
     tabla.innerHTML = "";

 }



 function recreartabla(data) {

     eliminartabla();

     for (let i in data) {

         var tr = document.createElement("tr");
         var td1 = document.createElement("td");
         var td2 = document.createElement("td");
         var td3 = document.createElement("td");

         td1.textContent = data[i].numero;
         td2.textContent = data[i].carta;
         td3.textContent = data[i].contador;

         tr.appendChild(td1);
         tr.appendChild(td2);
         tr.appendChild(td3);

         tablacarta.appendChild(tr);



     }






 }



 function incrementarcarta() {

     var data = JSON.parse(localStorage.getItem("datos"));
     var numero = this.dataset.numero;
     var carta = this.dataset.carta;




     for (let i in data) {

         if (data[i].numero == numero && data[i].carta == carta) {

             console.log("si sumo")
             data[i].contador = parseInt(data[i].contador) + 1;



         }
     }
     localStorage.setItem("datos", JSON.stringify(data));
     recreartabla(ordenar());
 }

 function ordenar() {
     var data = JSON.parse(localStorage.getItem("datos"));

     data = data.sort(function(a, b) {
         return (b.contador - a.contador)
     })

     return data;

 }

 function pintarcartas() {
     var data = JSON.parse(localStorage.getItem("datos"));

     for (const i in data) {

         var img = document.createElement("img");
         var carta = data[i].carta.toUpperCase();
         var numero = data[i].numero;


         img.setAttribute("src", "./img/" + carta + "-" + numero + ".png");

         img.setAttribute("width", "100%");
         img.setAttribute("style", "margin-top:40px");
         img.setAttribute("data-numero", numero);
         img.setAttribute("data-carta", carta);




         var div = document.createElement("div");
         div.setAttribute("class", "col-md-3 col-sm-6")
         div.appendChild(img);

         contenedorimg.appendChild(div);

         img.addEventListener("click", incrementarcarta);



     }




 }

 function repintarcartas() {
     var data = JSON.parse(localStorage.getItem("datos"));

     i = data.length - 1;

     var img = document.createElement("img");
     var carta = data[i].carta.toUpperCase();
     var numero = data[i].numero;


     img.setAttribute("src", "./img/" + carta + "-" + numero + ".png");

     img.setAttribute("width", "100%");
     img.setAttribute("style", "margin-top:40px")
     img.setAttribute("data-numero", numero);
     img.setAttribute("data-carta", carta);
     var div = document.createElement("div");
     div.setAttribute("class", "col-md-3 col-sm-6")
     div.appendChild(img);

     contenedorimg.appendChild(div);

     img.addEventListener("click", incrementarcarta);








 }






 function agregarcarta(e) {

     e.preventDefault();
     var numero = document.getElementById('numero');
     var carta = document.getElementById("nombrecarta");

     if (cartaexiste(carta, numero) == false) {

         var datos = JSON.parse(localStorage.getItem("datos"));
         var dato = { "numero": numero.value.toUpperCase(), "carta": carta.value.toUpperCase(), "contador": "0" }
         datos.push(dato)
         localStorage.removeItem("datos");
         localStorage.setItem("datos", JSON.stringify(datos));
         formagregar.reset();
         //  this.submit();
         recreartabla(ordenar());
         repintarcartas();
     } else {

         var mensaje = document.querySelector("#mensaje");

         var rp = document.createElement("div");
         rp.setAttribute("class", "alert alert-danger");
         rp.textContent = "Ya Existe La Carta Que Intenta Agregar.";
         mensaje.appendChild(rp);
         formagregar.reset();

         setTimeout(() => {
             mensaje.removeChild(rp);

         }, 3000);

     }






 }

 function cartaexiste(carta, numero) {

     var data = JSON.parse(localStorage.getItem("datos"));

     for (const i in data) {
         if (data[i].numero == numero.value.toUpperCase() && data[i].carta == carta.value.toUpperCase()) {

             return true;

         }
     }
     return false;

 }