$(document).ready(function() {
    $("#comment-form").submit(function(event) {
      event.preventDefault();
  
      let name = $("#name-input").val();
      let comment = $("#comment-input").val();
      
      let commentElement = $("<div>").addClass("comment");
      let username = $(`<h4 id="stack1">`).addClass("comment-username").text(name);
      let content = $( `<p id="stack2">`).text(comment);
      let editButton = $(`<button id="noStack2">`).text("Edit").addClass("edit-btn");
      let deleteButton = $(`<button id="noStack2">`).text("Delete").addClass("delete-btn");

      commentElement.append('<img id="noStack" class="theImg" src="profile-logo.avif" />', username, content, editButton, deleteButton);
      $("#comments-list").prepend(commentElement);
  
      $("#name-input").val("");
      $("#comment-input").val("");

      //$('.comment-username').prepend('<img id="theImg" src="profile-logo.avif" />')
    });
  
    $(document).on("click", ".delete-btn", function() {
      $(this).closest(".comment").remove();
    });
  
    $(document).on("click", ".edit-btn", function() {
      let commentElement = $(this).closest(".comment");
      let contentElement = commentElement.find("p");
      let content = contentElement.text();
      let inputElement = $("<textarea>").val(content);
      let saveButton = $("<button>").text("Save").addClass("save-btn");
  
    contentElement.replaceWith(inputElement);
    $(this).replaceWith(saveButton);


});
  
    $(document).on("click", ".save-btn", function() {
    let commentElement = $(this).closest(".comment");
    let inputElement = commentElement.find("textarea");
    let content = inputElement.val();
  
inputElement.replaceWith($("<p>").text(content));
$(this).replaceWith($("<button>").text("Edit").addClass("edit-btn"));
    });
});
  
  