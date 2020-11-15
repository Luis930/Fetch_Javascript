let div = document.createElement('div');
div.className='division';
let contenido = '';
fetch('https://pokeapi.co/api/v2/pokemon')
.then(res=>res.json())
.then(res=>{
    res.results.forEach(element => {
    let dig_name = element.name;
    let dig_picture = element.url;
    let mostrar = `Digimón: ${dig_name} -- URL: ${dig_picture} <br>`;
    contenido += mostrar;
    });
    div.innerHTML = contenido;
    document.body.append(div);
  })


