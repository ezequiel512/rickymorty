export function getPersonajeCompleto (id) {

    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
          const data = response.json();
          return data;
    })
}