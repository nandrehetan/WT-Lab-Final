// Quick Sort function
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Function to search integer array
function searchInteger() {
    const inputArray = $('#integer-array').val().split(',').map(Number);
    const searchValue = parseInt(prompt("Enter the integer to search:"));
    const found = inputArray.includes(searchValue);
    if (found) {
        $('#integer-output').text(searchValue + ' found in the array.');
    } else {
        $('#integer-output').text(searchValue + ' not found in the array.');
    }
}

// Function to sort integer array
function sortInteger() {
    const inputArray = $('#integer-array').val().split(',').map(Number);
    const sortedArray = quickSort(inputArray);
    $('#integer-output').text('Sorted Array: ' + sortedArray.join(', '));
}

// Function to search named entity array
function searchNamedEntity() {
    const inputArray = $('#named-entity-array').val().split(',');
    const searchValue = prompt("Enter the named entity to search:");
    const found = inputArray.includes(searchValue);
    if (found) {
        $('#named-entity-output').text(searchValue + ' found in the array.');
    } else {
        $('#named-entity-output').text(searchValue + ' not found in the array.');
    }
}

// Function to sort named entity array
function sortNamedEntity() {
    const inputArray = $('#named-entity-array').val().split(',');
    const sortedArray = inputArray.sort();
    $('#named-entity-output').text('Sorted Array: ' + sortedArray.join(', '));
}

// Event listeners
$(document).ready(function() {
    $('#search-integer-btn').click(searchInteger);
    $('#sort-integer-btn').click(sortInteger);
    $('#search-named-entity-btn').click(searchNamedEntity);
    $('#sort-named-entity-btn').click(sortNamedEntity);
});
