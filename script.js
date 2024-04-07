let txt = document.querySelector("textarea")
txt.addEventListener("input",()=>{
  let count = txt.value.length
  document.querySelector("span").textContent = count
})