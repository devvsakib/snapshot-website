// submit watcher
document.getElementById("form").addEventListener("submit", (e) => {

  // 1 - check the text input
  const inputs = document.getElementsByClassName("form__to-fill");

  for (let i = 0; i < inputs.length; i++) {

    if (inputs[i].value.trim() === "") inputs[i].parentNode.classList.add('form__item--error')
    else inputs[i].parentNode.classList.remove('form__item--error')
  }

  // 2 - check checkboxe
  const containerCheckboxe = document.getElementsByClassName("form__checkboxe")[0]
  const checkboxe = containerCheckboxe.querySelector("input");
  if (!checkboxe.checked) {
    containerCheckboxe.classList.add("form__checkboxe--error")
  } else {
    containerCheckboxe.classList.remove("form__checkboxe--error")
  }
  // 3 - If no missing fields reset the form
  if (document.getElementsByClassName("form__item--error").length + document.getElementsByClassName("form__checkboxe--error").length === 0) {
    // values
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = ""
    }
    // checkboxe
    checkboxe.checked = false
  }

  // prevent send
  e.preventDefault()
})