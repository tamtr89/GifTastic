$(document).ready(function () {

    // array of strings, each one related to a topic 
    var topics = ["to all the boy i've love before", "carol", "below her mouth", "the conjuring", "black panther", "the witch", "hercules", "friends", "the l world", "scream", "coco"]

 

    // Function for displaying movie data
    function renderButtons() {
        $("#gif-btn-view").empty();

        // using a loop that appends a button for each string in the array.
        for (var i = 0; i < topics.length; i++) {
            var btn = $("<button>");
            btn.addClass("btn-movie");
            btn.attr("data-name", topics[i]);
            btn.text(topics[i]);
            $("#gif-btn-view").append(btn);
        }
    }
    // This function handles events where one button is clicked
    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        var topicAdd = $("#gif-input").val().trim();
        topics.push(topicAdd);
        renderButtons();
    });


    renderButtons();
});