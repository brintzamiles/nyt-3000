 $("#search-button").on("click", function () {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        queryURL += '?' + $.param({
            'api-key': "847fa5125de8433bb7908fd48454969c",
            //keyword search based on input
            'q': "",
            //begin date based on input in format yyyymmdd
            'begin_date': "",
            //end date based on input in format yyyymmdd
            'end_date': "",

            //number of records to retrieve based on input
            'page': 5
        });


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);
            console.log(queryURL);


            // Step 2: since the image information is inside of the data key,
            // make a variable named results and set it equal to response.data
            const results = response.data;
            // =============== put step 2 in between these dashes ==================

            // ========================
        });
        getSearchResults();
    });


    function getSearchResults() {

        for (let i = 0; i < results.length; i++) {
            const headline = results[i].headline;
            const webURL = results[i].webURL;
            $("#display-div").prepend(
                `
                    <div>
                     <p> ${headline} </p>
                    <p> src = "${webURL}"/p>
                    </div>`
            )
        }
    }
//clear the display
    $("#clear-button").on("click", function () {
        $("#display-div").empty(
        )
        });