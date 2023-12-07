const user = {
    id: 1,
    name: "John",
    age: 25,
  };
  
  const userJson = JSON.stringify(user);
  
  function saveLocalStorage() {
    localStorage.setItem("user", userJson);
  }
  
  saveLocalStorage();
  