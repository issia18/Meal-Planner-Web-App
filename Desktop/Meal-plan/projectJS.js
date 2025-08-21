// Add an event listener to the "Generate Meal Plan" button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generateButton").addEventListener("click", generateMealPlan);
});

// Function to generate the meal plan page
function generateMealPlan() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;
    var breakfast = document.getElementById("breakfast").value;
    var snack1 = document.getElementById("snack1").value;
    var lunch = document.getElementById("lunch").value;
    var snack2 = document.getElementById("snack2").value;
    var dinner = document.getElementById("dinner").value;

    // Validation checks
    var isValid = true;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    if (!name || !goal || !breakfast || !snack1 || !lunch || !snack2 || !dinner) {
        alert("Please fill out all fields.");
        isValid = false;
    }

    // Continue only if all inputs are valid
    if (isValid) {
        var mealPlanContent = `
<!DOCTYPE html>
<head>
    <title>Meal Plan</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .meal-plan { margin: 20px; }
        .meal-plan h2 { text-align: center; }
        .meal-plan p { margin: 10px 0; }
        .meal-plan div { margin: 5px 0; }
        button { margin: 10px; padding: 10px; }
    </style>
</head>
<body>
    <div class="meal-plan">
        <h2>${name}'s Weekly Meal Plan</h2>
        <p><strong>Goal for the Week:</strong> ${goal}</p>
        <h3>Monday – Sunday</h3>
        <div><strong>Breakfast:</strong> ${breakfast}</div>
        <div><strong>Snack 1:</strong> ${snack1}</div>
        <div><strong>Lunch:</strong> ${lunch}</div>
        <div><strong>Snack 2:</strong> ${snack2}</div>
        <div><strong>Dinner:</strong> ${dinner}</div>
        <button onclick="window.print()">Print</button>
        <button onclick="downloadPage()">Download</button>
    </div>
    <script>
        function downloadPage() {
            var blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'meal-plan.html';
            link.click();
        }
    </script>
</body>
</html>
        `;

        // Open a new page to display the meal plan
        var mealPlanWindow = window.open();
        mealPlanWindow.document.write(mealPlanContent);
        mealPlanWindow.document.close();
    }
}

// Function to clear the form
function clearForm() {
    document.getElementById("mealPlanForm").reset();
}

// Function validating email address
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
