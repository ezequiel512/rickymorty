export function getAllPersonajes (page) {

    return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(response => {
          const data = response.json();
          return data;
    })
}