// Write Javascript code here!

const wrapper = document.querySelector(".wrapper");
const items = document.querySelectorAll(".item");

wrapper.addEventListener("click", function (e) {
  const targetElem = e.target;
  e.stopPropagation();
  if (!targetElem.classList.contains("item")) return;
  targetElem.classList.toggle("open");
  items.forEach(function(elem) {
    if(elem !== targetElem) elem.classList.remove("open");
  })
});

document.body.addEventListener("click", function (e){
  const targetClassList = e.target.classList;

  if(targetClassList.contains("context")) return;
  items.forEach(function(elem){
    elem.classList.remove("open");
  })
})