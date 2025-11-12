const characterList = document.getElementById('character-list');
const prevBtn = document.getElementById('prev-page');
const nextBtn = document.getElementById('next-page');

let currentPage = 1;
let totalPages = 1;


async function fetchCharacters(page = 1) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json();

    
    totalPages = data.info.pages;

    
    characterList.innerHTML = '';

    
    data.results.forEach(character => {
      const li = document.createElement('li');
      li.classList.add('character-card');
      li.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>${character.species}</p>
      `;
      characterList.appendChild(li);
    });

    
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;

  } catch (error) {
    console.error('Error al obtener los personajes:', error);
  }
}


prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchCharacters(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchCharacters(currentPage);
  }
});


fetchCharacters(currentPage);

























// const  pages = [1,2,3];
// const request = pages.map (page=>
//     fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
//     .then(response=> response.json())
// );

// Promise.all(request)
//     .then(results=> {
//         results.forEach((data, index)=>{
//             console.log(`Página ${pages[index]}:`);
//             console.log(data);
//         })
//     })
//     .catch(error => {
//         console.error("Error al obtener los datos:", error);
//     });








// const pages = [1, 2, 3];

//   // Hacemos una solicitud por cada página
//   const requests = pages.map(page =>
//     fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
//       .then(response => response.json())
//   );

//   // Esperamos que terminen todas las solicitudes
//   Promise.all(requests)
//     .then(results => {
//       // results es un array con los JSON de cada página
//       // Extraemos los personajes de cada página y los unimos
//       const allCharacters = results.flatMap(result => result.results);

//       console.log("✅ Total de personajes combinados:", allCharacters.length);
//       console.log(allCharacters);

//       // Ejemplo: mostrar solo los nombres
//       allCharacters.forEach(character => {
//         console.log(character.name);
//       });
//     })
//     .catch(error => {
//       console.error("❌ Error al obtener los datos:", error);
//     });