//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
