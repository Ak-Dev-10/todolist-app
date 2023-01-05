let submit = document.getElementById("submitBtn")
submit.addEventListener("click" , (e)=>{
  e.preventDefault();
  let todo_title = title.value;
  let todo_desc = desc.value;
  
  localStorage.setItem("todo", JSON.stringify([todo_title , todo_desc]))
  console.log(e);
  todo.innerHTML =`
  <h3>${todo_title}</h3>
  <p>${todo_desc}</p>
  `
  title.value = ""
  desc.value = ""
})
deleteBtn.addEventListener("click" , (e)=>{
  e.preventDefault();
  localStorage.removeItem("todo")
  todo.innerHTML="";
})