// api
export const getUsers = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
          .then(res => res.json())
          .then(data => {
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
}
