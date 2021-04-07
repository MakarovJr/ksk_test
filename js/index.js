window.addEventListener("DOMContentLoaded", () => {
  //   accordion

  $(() => {
    $("#accordion").accordion({
      active: false,
      collapsible: true,
      heightStyle: "content",
    });
  });

  document
    .querySelector(".sort__accordion-title")
    .addEventListener("click", () => {
      document
        .querySelector(".sort__accordion-title-icon")
        .classList.toggle("icon-active");
    });
  //   card menu
  document.querySelectorAll(".card__menu").forEach((menuBtn) => {
    menuBtn.addEventListener("click", (event) => {
      const path = event.currentTarget.dataset.path;
      
    //   document.querySelectorAll(".card__menu-list").forEach((activeMenu) => {
    //     activeMenu.classList.remove("card__menu-list-active");
    //   });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.toggle("card__menu-list-active");
    });
  });
});
