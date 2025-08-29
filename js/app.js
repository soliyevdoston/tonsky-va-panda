const elImg = document.getElementById("img");

document.querySelectorAll(".btn").forEach((el) => {
  el.addEventListener("click", (e) => {
    elImg.src = `/images/${e.target.innerText}.png`;
  });
});

btnd.onclick = () => {
  document.body.classList.toggle("dark");
};
console.log(flash);

window.onmousemove = ({ clientX, clientY }) => {
  flash.style.cssText = `
  top: ${clientY - 125}px;
  left: ${clientX - 125}px;
  `;
};
