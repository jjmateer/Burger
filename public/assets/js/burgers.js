$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burgerInput").val().trim(),
      devoured: 0
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("devoured");

    var DevouredState = {
      devoured: newDevoured
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(
      function () {
        console.log("changed sleep to", newDevoured);
        location.reload();
      }
    );
  });
});