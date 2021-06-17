const section = document.querySelector('#contenedor');
const listadod = document.querySelector('#listadod');
const listadot = document.querySelector('#listadot');

const button = document.createElement("button");
fetch('https://demo6497253.mockable.io/noticias')
    .then(function(response) {
        return response.json();

    })
    .then(function(data) {
        creartarjetas(data);
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });

function creartarjetas(jsonObj) {
    const noticias = jsonObj;

    for (var i = 0; i < noticias.length - 1; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h3');
        const descripcion = document.createElement('p');
        //const detalle = document.createElement('p');
        //const img = document.createElement('img');
        const hr = document.createElement('hr');
        const a = document.createElement('a');
        myH2.textContent = noticias[i].titulo + " - " + noticias[i].categoria + " - " + noticias[i].fecha;
        a.textContent = "Ver mas...";
        descripcion.textContent = noticias[i].descripcion;

        myH2.setAttribute("style", "color:blue")
        descripcion.setAttribute("class", "border")
            //detalle.textContent = noticias[i].detalle;

        //img.src = noticias[i].img;





        myArticle.appendChild(myH2);

        myArticle.appendChild(descripcion);
        // myArticle.appendChild(detalle);
        //myArticle.appendChild(img);
        myArticle.appendChild(a);
        myArticle.appendChild(hr);


        section.appendChild(myArticle);

    }

    button.textContent = "Ver Todos";
    button.setAttribute("style", "width:100%");
    button.setAttribute("class", "btn btn-info");
    button.addEventListener("click", vertodo);
    section.appendChild(button);

}


fetch('https://demo6497253.mockable.io/categoria/deporte')
    .then(function(response) {
        return response.json();

    })
    .then(function(data) {
        creartarjetas2(data);
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });




function creartarjetas2(jsonObj) {
    const noticias = jsonObj;

    for (var i = 0; i < noticias.length; i++) {
        const myArticle = document.createElement('div');
        const myH5 = document.createElement('h5');
        //const descripcion = document.createElement('p');
        //const detalle = document.createElement('p');
        //const img = document.createElement('img');
        const hr = document.createElement('hr');
        // const a = document.createElement('a');
        myH5.textContent = noticias[i].titulo;

        //descripcion.textContent = noticias[i].descripcion;
        //a.textContent = "Ver mas...";

        //detalle.textContent = noticias[i].detalle;

        //img.src = noticias[i].img;





        myArticle.appendChild(myH5);

        //myArticle.appendChild(descripcion);
        // myArticle.appendChild(detalle);
        //myArticle.appendChild(img);
        //myArticle.appendChild(a);
        myArticle.appendChild(hr);


        listadod.appendChild(myArticle);

    }
}

fetch('https://demo6497253.mockable.io/categoria/tecnologia')
    .then(function(response) {
        return response.json();

    })
    .then(function(data) {
        creartarjetas3(data);
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });




function creartarjetas3(jsonObj) {
    const noticias = jsonObj;

    for (var i = 0; i < noticias.length; i++) {
        const myArticle = document.createElement('div');
        const myH5 = document.createElement('h5');
        //const descripcion = document.createElement('p');
        //const detalle = document.createElement('p');
        //const img = document.createElement('img');
        const hr = document.createElement('hr');
        // const a = document.createElement('a');
        myH5.textContent = noticias[i].titulo;

        //descripcion.textContent = noticias[i].descripcion;
        //a.textContent = "Ver mas...";

        //detalle.textContent = noticias[i].detalle;

        //img.src = noticias[i].img;





        myArticle.appendChild(myH5);

        //myArticle.appendChild(descripcion);
        // myArticle.appendChild(detalle);
        //myArticle.appendChild(img);
        //myArticle.appendChild(a);
        myArticle.appendChild(hr);


        listadot.appendChild(myArticle);

    }

}


function vertodo() {

    fetch('https://demo6497253.mockable.io/noticias')
        .then(function(response) {
            return response.json();

        })
        .then(function(data) {
            creartarjetas4(data);
            console.log('data = ', data);
        })
        .catch(function(err) {
            console.error(err);
        });


}

function creartarjetas4(jsonObj) {

    section.removeChild(button);
    const noticias = jsonObj;

    for (var i = 3; i < noticias.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h3');
        const descripcion = document.createElement('p');
        //const detalle = document.createElement('p');
        //const img = document.createElement('img');
        const hr = document.createElement('hr');
        const a = document.createElement('a');
        myH2.textContent = noticias[i].titulo + " - " + noticias[i].categoria + " - " + noticias[i].fecha;
        a.textContent = "Ver mas...";
        descripcion.textContent = noticias[i].descripcion;

        myH2.setAttribute("style", "color:blue")
        descripcion.setAttribute("class", "border")
            //detalle.textContent = noticias[i].detalle;

        //img.src = noticias[i].img;





        myArticle.appendChild(myH2);

        myArticle.appendChild(descripcion);
        // myArticle.appendChild(detalle);
        //myArticle.appendChild(img);
        myArticle.appendChild(a);
        myArticle.appendChild(hr);


        section.appendChild(myArticle);

    }


}