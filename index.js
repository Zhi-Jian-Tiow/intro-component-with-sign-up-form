let inputs = document.querySelectorAll("input");
let button = document.querySelector("button");
let form = document.querySelector("form");

const errorMssgStyle = {
  color: "red",
  "font-size": "10px",
  position: "relative",
  left: "-14em",
  top: "-0.8em",
  margin: "0",
};

const handleFirstNameValidation = (e) => {
  if (!inputs[0].value.match(/^[A-Za-z]+$/)) {
    e.preventDefault();
    const errorTag = document.createElement("p");
    const errorMssg = document.createTextNode("*Invalid first name!");
    errorTag.appendChild(errorMssg);
    errorTag.className = "error-mssg";
    form.insertBefore(errorTag, inputs[1]);
  }
};

const handleLastNameValidation = (e) => {
  if (!inputs[1].value.match(/^[A-Za-z]+$/)) {
    e.preventDefault();
    const errorTag = document.createElement("p");
    const errorMssg = document.createTextNode("*Invalid last name!");
    errorTag.appendChild(errorMssg);
    errorTag.className = "error-mssg";
    form.insertBefore(errorTag, inputs[2]);
  }
};

const handleEmailValidation = (e) => {
  if (
    !inputs[2].value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    e.preventDefault();
    const errorTag = document.createElement("p");
    const errorMssg = document.createTextNode("*Invalid email address!");
    errorTag.appendChild(errorMssg);
    errorTag.className = "error-mssg";
    form.insertBefore(errorTag, inputs[3]);
  }
};

const handlePasswordValidation = (e) => {
  if (!inputs[3].value) {
    e.preventDefault();
    const errorTag = document.createElement("p");
    const errorMssg = document.createTextNode("*This field cannot be empty!");
    errorTag.appendChild(errorMssg);
    errorTag.className = "error-mssg";
    form.insertBefore(errorTag, button);
  }
};

button.addEventListener("click", handleFirstNameValidation);
button.addEventListener("click", handleLastNameValidation);
button.addEventListener("click", handleEmailValidation);
button.addEventListener("click", handlePasswordValidation);
