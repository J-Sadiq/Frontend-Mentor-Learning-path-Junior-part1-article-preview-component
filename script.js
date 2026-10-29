const btnShare = document.querySelector(".btn-share");
const popUpShare = document.querySelector("#share-popup");

btnShare.addEventListener("click", () => {
  const isOpen = !popUpShare.hidden;
  console.log(popUpShare.hidden);

  popUpShare.hidden = isOpen;
  btnShare.setAttribute("aria-expanded", String(!isOpen));
});
