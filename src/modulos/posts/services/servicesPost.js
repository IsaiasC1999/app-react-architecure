const url = "https://jsonplaceholder.typicode.com"


export function getAllPost() {

    
    return fetch(`${url}/posts`)
      .then(res => res.json())
      .then(datos => {
        return datos
  
      })
  }