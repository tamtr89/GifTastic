console.log("hi TAm!");

    // array of strings, each one related to a MOVIES topic 
    var topics = ["to all the boy i've love before", "carol", "the conjuring", "black panther", "the witch", "hercules", "friends", "the l world", "scream", "coco"];

    // Display gifs show
    function gifsMovieShow() {
        
        var topicShow = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topicShow + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(topicShow, "TTTTTTTTTTTTTTTT");
        
        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"

        }).then(function(response) {
            $("#gifs-view").empty();
            var results = response.data;
            console.log("response:::", results);
            //  
            for (var i = 0; i < results.length; i++) {
                var topicDiv = $("<div>");
                topicDiv.addClass("movie-gif");

                // Under every gif, display its rating (PG, G, so on).
                var rating = results[i].rating;
                var p = $("<h4>").text("Rating: " + rating);

                // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

                var topicImage = $("<img>");
                topicImage.addClass("topic-img");
                topicImage.attr("src", results[i].images.fixed_height_still.url);
                topicImage.attr("data-still", results[i].images.fixed_height_still.url);
                topicImage.attr("data-animate", results[i].images.fixed_height.url);
                topicImage.attr("data-state", "still");

                //Display on page
                topicDiv.append(p);
                topicDiv.append(topicImage);
                $("#gifs-view").prepend(topicDiv);
            }

            // On click funtion for Images animate or still
            $(".topic-img").on("click", function() {
                var state = $(this).attr("data-state");
                console.log(state, "state");

                // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                // Then, set the image's data-state to animate
                // Else set src to the data-still value
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });
        });
    }

    // Function for displaying movie data
    function renderButtons() {
        $("#topic-buttons").empty();

        // using a loop that appends a button for each string in the array.
        for (var i = 0; i < topics.length; i++) {
            var btn = $("<button>");
            // class for buttons
            btn.addClass("topic-gif");
            btn.attr("data-name", topics[i]);
            btn.text(topics[i]);
            $("#topic-buttons").append(btn);
        }
    }
    // This function handles events where add button is clicked
    $("#add-topic").on("click", function(event) {
        event.preventDefault();
        var newTopic = $("#topic-input").val().trim();
        topics.push(newTopic);
        renderButtons();
    });

    // Adding click event to all elements
    $(document).on("click", ".topic-gif", gifsMovieShow);

    //Button initial list of movies.
    renderButtons();
