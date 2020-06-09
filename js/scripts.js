$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    $(".results").show();
    let goodLuck = [];
    $("input:checkbox[name=lucky]:checked").each(function() {
      const lucky = $(this).val();
      goodLuck.push(lucky);
    });
    let badLuck = [];
    $("input:checkbox[name=unlucky]:checked").each(function() {
      const unlucky = $(this).val();
      badLuck.push(unlucky);
    });
    
    if (goodLuck > badLuck) {
      $(".results").append("<p>You will have good luck!</p>");
    } else if (goodLuck === badLuck) {
      $(".results").append("<p>You will have neutral luck!</p>");
    } else {
      $(".results").append("<p>You will have bad luck!</p>");
    }
  });
});