$(document).ready(function(){
    // Copy contents from source list to target list
    $('#copyButton').click(function(){
        // Clear existing items in target list
        $('#targetList').empty();
        
        // Copy items from source list to target list
        $('#sourceList li').each(function(){
            $('#targetList').append($(this).clone());
        });
    });

    // Create a new element and append it to the container
    $('#createButton').click(function(){
        var newElement = $('<p>New Element Created</p>'); // Create new element
        $('#newElementContainer').append(newElement); // Append new element to container
    });
});
