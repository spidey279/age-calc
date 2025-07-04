const dob = document.querySelector(".datee");
const umar = document.querySelector(".umar");
const button = document.querySelector(".submit");

button.addEventListener("click", () => {
  const option = document.querySelector('input[name="choices"]:checked');
  if (option.value === "male") {
    const dobValue = dob.value;
    const year = new Date(dobValue).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    umar.textContent = `Damn bro, you’re ${age}? That’s not old — that’s ancient`;
  }
});
