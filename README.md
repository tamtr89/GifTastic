# GifTastic

Requirements
The app takes the entered search term topics from a user input box and pushes them into array from which it creates buttons in the HTML. Clicking on a button grabs 10 static, non-animated gif images from the GIPHY API and places them on the page.
When the user clicks one of the still GIPHY images, the gif should animate.
If the user clicks the gif again, it should stop playing.
With every gif is displayed its rating (PG, G, etc.).

Technologies Used
HTML
CSS Bootstrap
JavaScript to make the page dynamic
jQuery for Dom Manipulation
AJAX for API GET requests



I created a function that allowed me to make an AJAX request to the Giphy API and then allowed me to further parse through the JSON object that was returned to access the rating, and url for the animated and still versions of the gifs.
The Q parameter of the API was replaced by the search term input by the user and displayed as a button on the page.
Results in the API link were limited to 10. A div for each image was created with Bootstrap column size, class & data state attributes. From the returned JSON object, I included the rating, and static & animated image urls, and prepended that to the #gifArea in the HTML to display the gallery of returned gifs.
