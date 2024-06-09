// Select all elements with the class 'answer-box'
document.querySelectorAll('.answer-box').forEach(box => {
    // Add a click event listener to each 'answer-box'
    box.addEventListener('click', function() {
        // For each 'answer-box', remove the 'answer-selected' class
        document.querySelectorAll('.answer-box').forEach(box => {
            box.classList.remove('answer-selected');
        });
        // Add the 'answer-selected' class to the clicked 'answer-box'
        this.classList.add('answer-selected');
    });
});
