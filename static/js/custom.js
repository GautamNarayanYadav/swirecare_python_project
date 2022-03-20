function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

$(document).on("submit", "#footer-contact-form", function (e) {
  var csrf_token = getCookie("csrftoken");
  e.preventDefault();
  var formData = new FormData(this);
  $.ajax({
    url: "/contactapi/",
    method: "POST",
    headers: { "X-CSRFToken": csrf_token },
    data: formData,
    cache: false,
    processData: false,
    contentType: false,
    success: function (data) {
      document.getElementById("footer-contact-form").reset();
      alert("Details saved successfully.");
    },
    error: function () {
      alert("Something went wrong.");
    },
  });
});
