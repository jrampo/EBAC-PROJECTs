$(document).ready(function () {
  $("#task-form").submit(function (e) {
    e.preventDefault();

    const taskName = $("#task-input").val();

    if (taskName.trim() !== "") {
      const listItem = $("<li>").text(taskName);
      listItem.click(function () {
        $(this).toggleClass("completed");
      });
      $("#task-list").append(listItem);
      $("#task-input").val("");
    }
  });

  $();
});
