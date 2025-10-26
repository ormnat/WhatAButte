// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    
    // The correct code sequence
    const correctCode = ['3', '1', '1', '2', '2', '2', '2', '4', '2'];

    // Get references to all the important elements
    const submitButton = document.getElementById("submit-btn");
    const gridContainer = document.getElementById("grid-container");
    const allInputs = document.querySelectorAll(".grid-input");
    const successImage = document.getElementById("success-image");
    const header = document.querySelector("h1"); // Get the header

    // --- NEW: Auto-focus and Backspace Logic ---
    allInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            // If a character is entered and it's not the last input box
            if (input.value.length === 1 && index < allInputs.length - 1) {
                // Move focus to the next input box
                allInputs[index + 1].focus();
            }
        });

        // If user hits backspace on an empty box, move to the previous box
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
                e.preventDefault(); // Prevents default backspace behavior
                allInputs[index - 1].focus();
            }
        });
    });
    // --- End of new logic ---


    // Add a click event listener to the submit button
    submitButton.addEventListener("click", () => {
        
        // Create an array of the values currently in the input boxes
        const userInput = [];
        allInputs.forEach(input => {
            userInput.push(input.value);
        });

        // Convert arrays to strings to easily compare them
        if (JSON.stringify(userInput) === JSON.stringify(correctCode)) {
            // --- SUCCESS ---
            // Hide the header, grid, and button
            header.style.display = "none";
            gridContainer.style.display = "none";
            submitButton.style.display = "none";
            
            // Show the success image
            successImage.style.display = "block";

        } else {
            // --- FAILURE ---
            // 1. Add the 'shake' class to the grid
            gridContainer.classList.add("shake");

            // 2. Clear all the inputs
            allInputs.forEach(input => {
                input.value = "";
            });

            // 3. Set the focus back to the first input box
            allInputs[0].focus();

            // 4. Remove the 'shake' class after the animation finishes (500ms)
            //    so it can shake again on the next wrong attempt
            setTimeout(() => {
                gridContainer.classList.remove("shake");
            }, 500);
        }
    });
});
