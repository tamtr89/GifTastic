// console.log("hi TAm!");
$(document).ready(function () {
    // var topics = "";
    // var btn;
    // var newTopic = "";

    // array of strings, each one related to a MOVIES topic 
   var topics = ["to all the boy i've love before", "carol", "the conjuring", "black panther", "the witch", "hercules", "friends", "the l world", "scream", "coco"];

    // Function for displaying movie data
    function renderButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();

        // using a loop that appends a button for each string in the array.
        for (var i = 0; i < arrayToUse.length; i++) {
           var btn = $("<button>");
            // class for buttons
            btn.addClass(classToAdd);
            btn.attr("data-type", arrayToUse[i]);
            btn.text(arrayToUse[i]);
            $(areaToAddTo).append(btn);
        }
    }
    // Display gifs show
    $(document).on("click", ".topic-gif", function () {
        
        $("#gifs-view").empty();
        $(".topic-gif").removeClass("active");
        $(this).addClass("active");

        var topicShow = $(this).attr("data-type");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            topicShow + "&api_key=dc6zaTOxFJmzC&limit=10";

        // console.log(this, "gifMovieShow call");

        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
            
        }).then(function (response) {
            var results = response.data;
            console.log("my ajax response", results);
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
        });
        
        // On click funtion for Images animate or still
        $(".topic-img").on("click", function () {
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
    
    // This function handles events where add button is clicked
    $("#add-topic").on("click", function (event) {
        event.preventDefault();
       var newTopic = $("#topic-input").val().trim();
        
        topics.push(newTopic);
        renderButtons(topics, "topic-gif", "#topic-buttons");

    });
    //Button initial list of movies.
    renderButtons(topics, "topic-gif", "#topic-buttons");
});