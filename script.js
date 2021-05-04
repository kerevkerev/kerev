const out = document.querySelector(".out");
const btn = document.querySelector(".btn");
btn.addEventListener("click", inner);
function inner() {
  setTimeout(function() {
    out.innerHTML = 123;
  }, 2000);
}
