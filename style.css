body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f4f4f4;
    text-align: center;
    margin: 0;
    padding: 15px; /* Adds spacing on mobile */
    box-sizing: border-box; /* Ensures padding doesn't create overflow */
}

h1 {
    /* Responsive font size: (min, preferred, max) */
    font-size: clamp(2rem, 8vw, 3rem);
}

#puzzle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

#grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    
    /* Responsive width */
    width: 90%; /* Takes up 90% of its container */
    max-width: 300px; /* But won't get bigger than 300px on desktop */
    margin-bottom: 20px;
}

.grid-input {
    /* Replaces fixed width/height */
    width: 100%; /* Fills its grid cell */
    aspect-ratio: 1 / 1; /* Makes it a perfect square */
    
    /* Responsive font size */
    font-size: clamp(1.5rem, 10vw, 2.5rem);
    
    text-align: center;
    border: 2px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box; /* Important for 100% width */
}

/* Removes arrows from number inputs (if you use type="number") */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

#submit-btn {
    padding: 12px 25px;
    font-size: clamp(1rem, 4vw, 1.2rem); /* Responsive font size */
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
}

#submit-btn:hover {
    background-color: #0056b3;
}

#success-image {
    display: none; /* Hidden by default */
    
    /* Responsive width */
    width: 90%;
    max-width: 450px; /* Max size on desktop */
    
    margin-top: 20px;
    border: 3px solid #333;
    border-radius: 10px;
}

/* Shake animation (no changes needed) */
.shake {
    animation: shake 0.5s;
}

@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
    75% { transform: translateX(-10px); }
    100% { translateX(0); }
}
