export const loginFetch = (user) => {
  return fetch(`www.example.com/login?name=${user.name}&pwd=${user.pwd}`)
    .then(res => res.json())
}
