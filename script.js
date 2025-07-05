const plantDatabase = [
  {
    name: "Spinach",
    nutrients: ["Iron", "Calcium", "Vitamin K"],
    suitableFor: ["Infant", "Youth", "Adult", "Senior"],
    genderSuitability: ["Male", "Female", "Diverse"]
  },
  {
    name: "Broccoli",
    nutrients: ["Vitamin C", "Folate", "Potassium"],
    suitableFor: ["Adult", "Senior"],
    genderSuitability: ["Female", "Diverse"]
  },
  {
    name: "Carrot",
    nutrients: ["Beta-Carotene", "Vitamin A"],
    suitableFor: ["Infant", "Youth", "Adult"],
    genderSuitability: ["Male", "Female"]
  },
  {
    name: "Kale",
    nutrients: ["Vitamin K", "Vitamin C", "Calcium"],
    suitableFor: ["Youth", "Adult", "Senior"],
    genderSuitability: ["Male", "Female", "Diverse"]
  },
  {
    name: "Peas",
    nutrients: ["Protein", "Iron", "Zinc"],
    suitableFor: ["Infant", "Youth", "Adult"],
    genderSuitability: ["Diverse", "Male"]
  },
  {
    name: "Beetroot",
    nutrients: ["Folate", "Manganese", "Iron"],
    suitableFor: ["Adult", "Senior"],
    genderSuitability: ["Female"]
  },
  {
    name: "Lettuce",
    nutrients: ["Vitamin A", "Vitamin K", "Fiber"],
    suitableFor: ["Infant", "Youth", "Adult", "Senior"],
    genderSuitability: ["Male", "Female", "Diverse"]
  },
  {
    name: "Tomato",
    nutrients: ["Lycopene", "Vitamin C", "Potassium"],
    suitableFor: ["Youth", "Adult", "Senior"],
    genderSuitability: ["Male", "Diverse"]
  },
  {
    name: "Sweet Potato",
    nutrients: ["Beta-Carotene", "Fiber", "Vitamin B6"],
    suitableFor: ["Infant", "Youth", "Adult"],
    genderSuitability: ["Female", "Diverse"]
  }
];

function generateSuggestions() {
  const gender = document.getElementById("genderSelect").value;
  const age = document.getElementById("ageSelect").value;
  const resultSection = document.getElementById("results");

  resultSection.innerHTML = ""; // Reset output

  if (!gender || !age) {
    resultSection.innerHTML = "<p class='warning'>Please select both gender and age group.</p>";
    return;
  }

  const matches = plantDatabase.filter(
    plant =>
      plant.suitableFor.includes(age) &&
      plant.genderSuitability.includes(gender)
  );

  if (matches.length === 0) {
    resultSection.innerHTML = `<p>No plant recommendations found for a ${age} (${gender}).</p>`;
    return;
  }

  const list = document.createElement("ul");
  matches.forEach(plant => {
    const item = document.createElement("li");
    item.className = "result-item";
    item.innerHTML = `
      <strong>${plant.name}</strong><br />
      Nutrients: ${plant.nutrients.join(", ")}
    `;
    list.appendChild(item);
  });

  resultSection.appendChild(list);
}