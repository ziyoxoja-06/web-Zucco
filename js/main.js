function checkThis() {
  if (
    document.getElementById("userName").value != "" &&
    document.getElementById("mobile-number").value != "" &&
    document.getElementById("userCourse").value != "Kursni tanlang"
  ) {
    document.getElementById("formPanel").action =
      "https://submit-form.com/W5-Sku-P81i6LYzvQdhO7";
    document.getElementById("formPanel").onsubmit = "true";
  } else {
    document.getElementById("errorMessage").style.maxHeight = "150px";
    document.getElementById("errorMessage").style.paddingBottom = "25px";
  }
}

function errorMessageClose() {
  document.getElementById("errorMessage").style.maxHeight = "0";
  document.getElementById("errorMessage").style.paddingBottom = "0";
}

function openBotLink() {
  if (document.getElementById("onOff").innerHTML === "on") {
    document.getElementById("telegramBot").style.transform = "translateX(0)";
    document.getElementById("telegramBotOpenIcon").style.transform = "rotate(360deg)";
    document.getElementById("onOff").innerHTML = "off"
  }
  else {
    document.getElementById("telegramBot").style.transform = "translateX(89%)";
    document.getElementById("telegramBotOpenIcon").style.transform = "rotate(180deg)";
    document.getElementById("onOff").innerHTML = "on"
  }
}

function payFunction() {
  let coursSelect = document.getElementById("coursSelect").value;
  let userName = document.getElementById("userName").value;
  let userPhoneNumber = document.getElementById("userPhoneNumber").value;

  if (userName == "") {
    document.getElementById("error1").style.display = "block"
  } else {
    document.getElementById("error1").style.display = "none"
  }
  if (userPhoneNumber == "") {
    document.getElementById("error2").style.display = "block"
  } else {
    document.getElementById("error2").style.display = "none"
  }
  if (coursSelect == "Kursni tanlang") {
    document.getElementById("error3").style.display = "block"
  } else {
    document.getElementById("error3").style.display = "none"
  }


  if (userName !== "" && userPhoneNumber !== "" && coursSelect !== "Kursni tanlang") {
    if (coursSelect == "WEB-dasturlash" || coursSelect == "PHP" || coursSelect == "Java" || coursSelect == "Python") {
      document.getElementById("summa").value = "555000.00";
      document.getElementById("nameNameIn").value = userName;
    } else if (coursSelect == "AutoCAD" || coursSelect == "Cinema 4D") {
      document.getElementById("summa").value = "600000.00";
      document.getElementById("nameNameIn").value = userName;
    } else if (coursSelect == "English 4 IT") {
      document.getElementById("summa").value = "400000.00";
      document.getElementById("nameNameIn").value = userName;
    } else if (coursSelect == "Unreal Engine 4") {
      document.getElementById("summa").value = "900000.00";
      document.getElementById("nameNameIn").value = userName;
    }
    document.getElementById("userCourseForGmail").value = coursSelect;
    document.getElementById("userNameForGmail").value = userName;
    document.getElementById("userPhoneForGmail").value = userPhoneNumber;
    document.getElementById("payButton").click();
    document.getElementById("sendToGmail").click();
  }
}