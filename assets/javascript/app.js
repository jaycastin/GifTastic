$(document).ready(function(){

    $('button').on('click', function() {
        var dog = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dog + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var dogDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var dogImage = $('<img/>');

                    dogImage.addClass('anImg')

                    dogImage.attr('src', results[i].images.fixed_height.url);

                    dogImage.attr('data-still', results[i].images.fixed_height_still.url)

                    dogImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    dogDiv.append(p);

                    dogDiv.append(dogImage);

                    dogDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var dogs = [''];

    
    
        $('#theButton').on('click', function(){
            var dogButton = $("#gif-input").val();

            var newButton = $("<button/>").addClass( "btn btn-info dog").attr('data-name',dogButton).html(dogButton).css({'margin': '5px'});
            
            $("#dogsbuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dogButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(dogButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var dogDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var dogImage = $('<img/>');

                    dogImage.addClass('anImg')

                    dogImage.attr('src', results[i].images.fixed_height_still.url);

                    dogImage.attr('data-still', results[i].images.fixed_height_still.url)

                    dogImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    dogDiv.append(p);

                    dogDiv.append(dogImage);

                    dogDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});