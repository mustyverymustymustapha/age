function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    if (isNaN(dob.getTime())) {
        document.getElementById('result').textContent = "Please enter a valid date.";
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    const years = age;
    const months = monthDiff < 0 ? monthDiff + 12 : monthDiff;
    const days = today.getDate() - dob.getDate();

    let result = `Your age is: ${years} years`;
    if (months > 0) {
        result += `, ${months} month${months !== 1 ? 's' : ''}`;
    }
    if (days > 0) {
        result += `, and ${days} day${days !== 1 ? 's' : ''}`;
    }

    document.getElementById('result').textContent = result;
}