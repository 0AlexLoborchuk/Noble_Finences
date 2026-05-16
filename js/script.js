let viewWidth = window.innerWidth;
let headerButton = document.querySelector("#headerButton");
if (viewWidth > 799) {
  headerButton.innerHTML = "Book an appointment";
}

feedback_item = document.querySelectorAll(".feedback__items");
comment = document.querySelector(".comment");
autor_icon = document.querySelector(".author__icon");
autor_name = document.querySelector(".author__name");
function changeDescription(item) {
  if (item == "Graphic Designer") {
    feedback_item[1].classList.remove("feedback__items_active");
    feedback_item[2].classList.remove("feedback__items_active");
    feedback_item[0].classList.add("feedback__items_active");
    comment.innerHTML =
      '"Managing my taxes as a freelancer used to be overwhelming, but Noble Finance made it effortless.”';
    autor_icon.setAttribute("src", "./image/icons/Taylor.png");
    autor_name.innerHTML = "Taylor M., 28 years old";
  } else if (item == "Commercial Photographer") {
    feedback_item[0].classList.remove("feedback__items_active");
    feedback_item[2].classList.remove("feedback__items_active");
    feedback_item[1].classList.add("feedback__items_active");
    comment.innerHTML =
      '"From invoicing to tax prep, Noble Finance has been a game-changer for my freelance business.”';
    autor_icon.setAttribute("src", "./image/icons/Markus.png");
    autor_name.innerHTML = "Markus N., 31 years old";
  } else {
    feedback_item[0].classList.remove("feedback__items_active");
    feedback_item[1].classList.remove("feedback__items_active");
    feedback_item[2].classList.add("feedback__items_active");
    comment.innerHTML =
      '"I used to worry about missing deductions, but with Noble Finance, I know I’m maximizing my savings.”';
    autor_icon.setAttribute("src", "./image/icons/Margaret_L.png");
    autor_name.innerHTML = "Margaret L., 24 years old";
  }
}
