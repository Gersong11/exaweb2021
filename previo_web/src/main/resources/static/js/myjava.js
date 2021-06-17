const section = document.querySelector('#contenedor');

console.log(section)

const requestURL = 'http://demo6497253.mockable.io/noticias';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const noticias = request.response;
    //populateHeader(noticas);
    creartarjetas(noticias);
}

function creartarjetas(jsonObj) {
    const noticias = jsonObj;

    for (var i = 0; i < noticias.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myH3 = document.createElement('h3');
        const descripcion = document.createElement('p');
        const detalle = document.createElement('p');
        const fecha = document.createElement('p');
        const img = document.createElement('img');
        const hr = document.createElement('hr')

        myH2.textContent = noticias[i].titulo;
        myH3.textContent = noticias[i].categoria;
        descripcion.textContent = 'descripcion: ' + noticias[i].descripcion;
        detalle.textContent = 'Detalle: ' + noticias[i].detalle;
        fecha.textContent = 'Fecha:' + noticias[i].fecha;
        img.src = noticias[i].img;





        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(descripcion);
        myArticle.appendChild(detalle);
        myArticle.appendChild(fecha);
        myArticle.appendChild(img);
        myArticle.appendChild(hr);

        section.appendChild(myArticle);
    }
}