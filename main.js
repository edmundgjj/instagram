$(function () {
  $("#submitInstagram").on("click", function (e) {
    e.preventDefault();

    let query = $("#inputProfile").val();
    let output = "";
    let nameOutput = "";
    $.ajax({
      async: true,
      crossDomain: true,
      url: "https://instagram-2698.restdb.io/rest/userdata",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5f50da4dc5e01c1e033b8be4",
        "cache-control": "no-cache",
      },
      type: "GET",
      success: function (data) {
        console.log(data);
        for (x of data) {
          console.log(x);
          if (x["username"] == query) {
            output = x["id"];
            nameOutput = query;
          } else {
            console.log("not found");
          }
          console.log(output);
        }
        $("#userid").empty();
        $("#userid").append(`${nameOutput}: ${output}`);
      },
    });
  });
});
