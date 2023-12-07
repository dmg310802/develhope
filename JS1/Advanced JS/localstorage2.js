const user = {
    id: 1,
    name: "John",
    age: 25,
  };
  
  function saveLocalStorage() {
    const userJson = JSON.stringify(user);
    localStorage.setItem("user", userJson);
  }
  
  saveLocalStorage();
  
  function loadLocalStorage() {
    const userJSON = localStorage.getItem("user");
    if (userJSON) {
      const user = JSON.parse(userJSON);
      console.log(user);
    } else {
      console.log(
        "No user info was found on this server"
      );
    }
  }
  
  loadLocalStorage();