const cardControllers = document.querySelectorAll("[data-card-controller]");

cardControllers.forEach(controller => {
  controller.addEventListener("click", (e) => {
    const card = e.currentTarget.parentElement.parentElement;
    const isVisible = card.dataset.visible;

    if (isVisible === "false") {
      card.setAttribute("data-visible", true);
    } else {
      card.setAttribute("data-visible", false);
    }
  })
})
