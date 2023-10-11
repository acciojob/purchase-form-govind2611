document.addEventListener("DOMContentLoaded", function () {
    // Get references to the stepper elements and continue button
    const stepper = document.querySelector(".stepper");
    const stepperItems = stepper.querySelectorAll("li");
    const continueButton = document.getElementById("continue-button");

    // Add a click event listener to the stepper items
    stepperItems.forEach((step) => {
        step.addEventListener("click", function () {
            // Remove the "selected" class from all steps
            stepperItems.forEach((item) => item.classList.remove("selected"));
            
            // Add the "selected" class to the clicked step
            step.classList.add("selected");
        });
    });

    // Add a click event listener to the continue button
    continueButton.addEventListener("click", function () {
        // Find the currently selected step
        const selectedStep = stepper.querySelector(".selected");

        if (selectedStep) {
            const stepNumber = selectedStep.getAttribute("data-step");
            // You can perform an action based on the selected step
            alert(`Continue to step ${stepNumber}`);
        }
    });
});
