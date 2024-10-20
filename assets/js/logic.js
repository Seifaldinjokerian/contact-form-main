const fName = document.querySelector("#firstName"),
  lName = document.querySelector("#lastName"),
  email = document.querySelector("#emailField"),
  queryType = document.getElementsByName("QueryType"),
  message = document.querySelector("#msg"),
  checkBox = document.querySelector("#consent"),
  requirment = document.querySelector(".requirmentCont");

document.forms[0].addEventListener("submit", (e) => {
  fNameChecker();
  lNameChecker();
  emailChecker();
  queryTypeChecker();
  messageChecker();
  contactedChecker();
  e.preventDefault();
  if (
    fNameChecker() &&
    lNameChecker() &&
    emailChecker() &&
    queryTypeChecker() &&
    messageChecker() &&
    contactedChecker()
  ) {
    document.querySelector(".alert").classList.add("success");
    setTimeout(() => {
      document.querySelector(".alert").classList.remove("success");
    }, 2000);

    fName.value = "";
    lName.value = "";
    email.value = "";
    message.value = "";
    Array.from(queryType)[0].checked = false;
    Array.from(queryType)[1].checked = false;
    checkBox.checked = false;
    if (document.querySelector(".alert").classList.contains("success")) {
      Array.from(queryType)[0].parentElement.style.backgroundColor =
        "hsl(0, 0%, 100%)";
      Array.from(queryType)[1].parentElement.style.backgroundColor =
        "hsl(0, 0%, 100%)";
    }
  }
});

function fNameChecker() {
  if (fName.value === "") {
    fName.parentElement
      .querySelector(".requirmentCont")
      .classList.remove("valid");
    return false;
  } else {
    fName.parentElement.querySelector(".requirmentCont").classList.add("valid");

    return true;
  }
}

function lNameChecker() {
  if (lName.value === "") {
    lName.parentElement
      .querySelector(".requirmentCont")
      .classList.remove("valid");
    return false;
  } else {
    lName.parentElement.querySelector(".requirmentCont").classList.add("valid");

    return true;
  }
}

function emailChecker() {
  if (email.value === "") {
    email.parentElement
      .querySelector(".requirmentCont")
      .classList.remove("valid");
    return false;
  } else if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(">+"))@((\[[0-9]{1,3}\.[0-9]\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.value.toLowerCase()
    ) == false
  ) {
    email.parentElement
      .querySelector(".requirmentCont")
      .classList.remove("valid");
    return false;
  } else {
    email.parentElement.querySelector(".requirmentCont").classList.add("valid");
    return true;
  }
}

function queryTypeChecker() {
  if (!Array.from(queryType)[0].checked && !Array.from(queryType)[1].checked) {
    document
      .querySelector(".QueryType-container")
      .querySelector(".requirmentCont")
      .classList.remove("valid");
    return false;
  } else {
    document
      .querySelector(".QueryType-container")
      .querySelector(".requirmentCont")
      .classList.add("valid");
    if (Array.from(queryType)[0].checked) {
      Array.from(queryType)[0].parentElement.classList.add("checkedIn");

      return true;
    }
    if (Array.from(queryType)[1].checked) {
      Array.from(queryType)[1].parentElement.classList.add("checkedIn");

      return true;
    }
  }
}

function messageChecker() {
  if (message.value === "") {
    message.parentElement
      .querySelector(".requirmentCont")
      .classList.remove("valid");
    return false;
  } else if (message.value.length < 20) {
    message.parentElement
      .querySelector(".requirmentCont")
      .classList.remove("valid");
    message.parentElement.querySelector(
      ".requirmentCont"
    ).children[0].innerHTML = "The message must be at least 20 characters";
    return false;
  } else {
    message.parentElement
      .querySelector(".requirmentCont")
      .classList.add("valid");
    return true;
  }
}

function contactedChecker() {
  if (!checkBox.checked) {
    document
      .querySelector(".contacted")
      .querySelector(".requirmentCont")
      .classList.remove("valid");
    return false;
  } else {
    document
      .querySelector(".contacted")
      .querySelector(".requirmentCont")
      .classList.add("valid");
    return true;
  }
}
