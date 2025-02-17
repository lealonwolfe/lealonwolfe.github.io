/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
async function bubbleSort(array) {
    for (var i = 0; i < array.length - 1; i++) { // Iterate through the array, outer loop
        for (var j = array.length - 1; j > i; j--) { // Iterate backwards, inner loop for comparisons
            if (array[j].value < array[j - 1].value) { // Compare adjacent values
                swap(array, j, j - 1); // Swap them if out of order
                updateCounter(bubbleCounter); // Update the bubble sort counter
                await sleep(); // Pause execution for visualization
            }
        }
    }
}

// TODO 3: Implement quickSort
async function quickSort(array, left, right) {
    if (right - left > 0) { // Base case: only sort if there are at least two elements
        var index = await partition(array, left, right); // Partition the array and get the pivot index
        if (left < index - 1) { // Recursively sort left part if it has more than one element
            await quickSort(array, left, index - 1);
        }
        if (right > index) { // Recursively sort right part if it has more than one element
            await quickSort(array, index, right);
        }
    }
}


// TODOs 4 & 5: Implement partition
async function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)].value; // Choose pivot as middle value
    while (left < right) { // Loop until left and right cross
        while (array[left].value < pivot) { // Move left index until value is >= pivot
            left++;
        }
        while (array[right].value > pivot) { // Move right index until value is <= pivot
            right--;
        }
        if (left < right) { // If indices haven’t crossed, swap values
            swap(array, left, right);
            updateCounter(quickCounter); // Update quick sort counter
            await sleep(); // Pause execution for visualization
        }
    }
    return left + 1; // Return the partition index
}

// TODO 1: Implement swap
function swap(array, i, j) {
    var temp = array[i]; // Store the value at index i in a temporary variable
    array[i] = array[j]; // Assign the value at index j to index i
    array[j] = temp; // Assign the temporary value to index j
    drawSwap(array, i, j); // Call drawSwap to visualize the swap
}

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}