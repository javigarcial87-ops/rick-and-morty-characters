const  pages = [1,2,3];
const request = pages.map (page=>
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response=> response.json())
);

Promise.all(request)
    .then(results=> {
        results.forEach((data, index)=>{
            console.log(`Página ${pages[index]}:`);
            console.log(data);
        })
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
    });