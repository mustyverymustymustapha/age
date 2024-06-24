
const dobInput = document.getElementById('inputDob');
const currentDateInput = document.getElementById('cdate');
const currentAgeDiv = document.getElementById('currentAge');


function getDOB() {
    const dob = new Date(dobInput.value);
    const currentDate = new Date(currentDateInput.value);


    const ageInMillis = currentDate - dob;

  
    const ageDate = new Date(ageInMillis);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate();

    
    currentAgeDiv.textContent = `You age is ${years} years, ${months} months, and ${days} days.`;
}

