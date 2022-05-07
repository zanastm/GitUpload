document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "ArrowLeft") {
    alert("Ooops that isn't the Enter Key");
  } else if (event.key === "Enter") {
    window.location.href = "../pages/AboutMe.html";
  }
});
