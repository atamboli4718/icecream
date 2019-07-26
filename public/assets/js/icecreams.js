$(function() {
    $(".change-devour").on("click", function(event) {
        console.log("In .change-devour function in icecreams.js");
      event.preventDefault();
      var id = $(this).data("id");

      $.ajax("/api/icecream/" + id, {
        type: "PUT",
        data: {devoured:1}
      }).then(
        function() {
          console.log("changed devoured to: devoured");
          location.reload();
        }
      );
    });
  
    $("#submitBtn").on("click", function(event) {
      event.preventDefault();
  
      var iceCream = {
        name: $("#newIceCreamName").val().trim()
      };
      console.log(iceCream);
      $.post("/api/icecream", {data: iceCream}).then(function() {
          console.log("created new iceCream");
          location.reload();
        }
      );
    });
  
  });
  