const user = localStorage.getItem("lge_user");
if (!user) {
  window.location.href = "index.html";
}
