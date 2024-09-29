const users = [
    {
      email: "n@email.com",
      password: "password"
    },
    {
      email: "a@email.com",
      password: "password"
    },
    {
      email: "b@email.com",
      password: "password"
    }
  ]
  
  export const getUserByEmail = (email) => {
    const found = users.find(user => user.email === email);
    return found;
  }
