function checkAge() {
  try {
    const name = prompt("Enter your name:");
    if (!name) {
      throw new Error("The field is empty! Please enter your name.");
    }

    const ageInput = prompt("Enter your age:");
    if (!ageInput) {
      throw new Error("The field is empty! Please enter your age.");
    }
    const age = parseInt(ageInput);

    if (isNaN(age)) {
      throw new EvalError("Invalid age input. Please enter a valid number.");
    }

    if (age < 18 || age > 70) {
      throw new RangeError("Age must be between 18 and 70.");
    }

    const status = prompt("Enter your status (admin, moderator, user):");
    if (!status) {
      throw new Error("The field is empty! Please enter your status.");
    }
    if (status !== "admin" && status !== "moderator" && status !== "user") {
      throw new EvalError("Invalid status input.");
    }

    alert("You have access to watch the movie.");
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

checkAge();
