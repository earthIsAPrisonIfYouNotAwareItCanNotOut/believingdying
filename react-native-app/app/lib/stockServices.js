export const getLogin = () => {
  return fetch('http://localhost:8080/login')
    .then(res => res.json())
}
