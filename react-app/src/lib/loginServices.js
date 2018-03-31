// .json() method read and parse .json file
// JSON.stringify() method convert js object to json format
// body: use JSON string to find the target data

// 31. prepare for production
// get system environment value from .env file
// because the .env.production and json-server in the same location
// so we use the ./items relative address
const baseUrl = process.env.REACT_APP_BASE_URL

// 11. add get services for login
export const getLogin = () => {
  return fetch('http://localhost:8080/login')
    .then(res => res.json())
}

export const getLoginList = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}

// 16. create services for item
export const createItem = (name) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name, isComplete: false})
  })
    .then(res => res.json())
}

// 28. update service for item
// use template literal syntax so that we can use ${expression}

// if you pass all item to json body, just like `body: JSON.stringify({item})`
// you will get the error json object
// {
//   items: {
//     "id": 2,
//     isComplete: true,
//     "name": "sb"
//   },
//   "id": 2
// }
// so you should spread the item property and then to pass all of them
// `body: JSON.stringify({...item})`

export const updateItem = (item) => {
  // console.log(item.id)
  return fetch(`${baseUrl}${item.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...item})
  })
    .then(res => res.json())
}

// 29-1. delete item services

// we will remove the body and response
// because we are not concerned with them any more

export const destroyItem = (id) => {
  return fetch(`${baseUrl}${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
