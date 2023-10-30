document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const menuBtn = document.querySelector(".site-nav__menu-icon"),
    menuContent = document.querySelector(".site-nav-menu"),
    containerEl = document.querySelector(".container"),
    modal = document.querySelector(".modal"),
    modalClose = document.querySelector(".modal__close"),
    openModalBtns = document.querySelectorAll(".open__modal-btn"),
    inputEl = document.querySelectorAll(".contact__input"),
    form = document.querySelector(".modal__form")

  //
  function openNavMenu() {
    menuContent.classList.add("site-nav-menu__active")
    document.body.style.overflow = "hidden"
  }

  function closeNavMenu() {
    menuContent.classList.remove("site-nav-menu__active")
    document.body.style.overflow = ""
  }

  menuBtn.addEventListener("click", () => {
    if (!menuContent.classList.contains("site-nav-menu__active")) {
      openNavMenu()
    } else {
      closeNavMenu()
    }
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeNavMenu()
    }
  })

  // Hover link
  const linkImages = document.querySelectorAll(".portfolio__link-img")

  linkImages.forEach((linkImage) => {
    const portfolioItemLink = linkImage
      .closest(".portfolio__item")
      .querySelector(".portfolio__item-link")

    linkImage.addEventListener("mouseenter", () => {
      portfolioItemLink.classList.add("hovered")
    })

    linkImage.addEventListener("mouseleave", () => {
      portfolioItemLink.classList.remove("hovered")
    })
  })

  // MODAL
  // modal close
  function closeModal() {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
    // form.reset();
  }

  // modal open
  function openModal() {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
  }

  modalClose.addEventListener("click", (e) => {
    closeModal()
  })

  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape" && modal.classList.contains("show")) {
      closeModal()
    }
  })

  openModalBtns.forEach((item) => {
    item.addEventListener("click", openModal)
  })

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal__content")) {
      closeModal()
    }
  })

  inputEl.forEach((input) => {
    input.addEventListener("focus", () => {
      const label = input
        .closest(".input__wrapper")
        .querySelector(".input__label")
      label.classList.add("focused__label")
    })

    input.addEventListener("blur", () => {
      const label = input
        .closest(".input__wrapper")
        .querySelector(".input__label")
      if (input.value === "") {
        label.classList.remove("focused__label")
      }
    })
  })
})
