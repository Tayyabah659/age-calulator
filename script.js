function calculateAge() {
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdate = new Date(birthdateInput); 
    const today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    // Adjust if birth date is in the future or for month/day differences
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12; 
    }
    if (days < 0) {
      months--;
      // Logic to calculate days remaining in previous month
    }

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
  }