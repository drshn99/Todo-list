let input = document.querySelector(".entered-list");
let addbtn = document.querySelector(".add-list");
let tasks = document.querySelector(".task");

addbtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newitem = document.createElement("div");
    newitem.classList.add("item");
    newitem.innerHTML = `
<p>${input.value}</p>
<div class="item-btn">
  <i class="fa-solid fa-pen-to-square" ></i>
  <i class="fa-solid fa-xmark"></i>
</div>`;
    tasks.appendChild(newitem);
    input.value = "";
  } else {
    alert("please enter a task");
  }
});

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.remove();
  }
});

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentElement.parentElement.children[0].classList.toggle(
      "completed"
    );
  }
});
