const elements = document.querySelectorAll(".form-input");
elements.forEach((element) => {
  const label = element.parentElement.querySelector("label").textContent;
  const value = element.value;
  console.log(`${label}: ${value}`);
});
