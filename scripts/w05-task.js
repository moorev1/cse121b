// w05-task.js

// Step 2: Declare Global Variables
const templesElement = document.getElementById("temples");
const templeList = [];

// Step 4: Function - displayTemples
const displayTemples = (temples) => {
  templesElement.innerHTML = ""; 

  temples.forEach((temple) => {
    const article = document.createElement("article");

    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

    article.appendChild(h3);
    article.appendChild(img);

    templesElement.appendChild(article);
  });
};

// Step 6: Function - getTemples
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  const data = await response.json();
  templeList.push(...data);

  // Step 7: Call displayTemples function
  displayTemples(templeList);
};

// Step 9: Function - reset
const reset = () => {
  templesElement.innerHTML = ""; 
};

// Step 10: Function - filterTemples
const filterTemples = () => {
  const selectElement = document.getElementById("filtered");
  const selectedValue = selectElement.value;

  let filteredTemples = [];

  switch (selectedValue) {
    case "utah":
      filteredTemples = templeList.filter((temple) => temple.location === "Utah");
      break;
    case "notutah":
      filteredTemples = templeList.filter((temple) => temple.location !== "Utah");
      break;
    case "older":
      filteredTemples = templeList.filter((temple) => temple.year < 1950);
      break;
    case "all":
      filteredTemples = templeList;
      break;
    default:
      break;
  }

  // Step 11: Call displayTemples function with filtered list
  displayTemples(filteredTemples);
};

// Step 14: Function - sortBy
const sortBy = () => {
  const selectElement = document.getElementById("sort");
  const selectedValue = selectElement.value;

  let sortedTemples = [];

  switch (selectedValue) {
    // Implement sorting logic based on selected option values
    //  sort by name, location, or any other criteria
    case "name":
      sortedTemples = templeList.slice().sort((a, b) => a.templeName.localeCompare(b.templeName));
      break;
    case "location":
      sortedTemples = templeList.slice().sort((a, b) => a.location.localeCompare(b.location));
      break;
    default:
      sortedTemples = templeList;
      break;
  }

  // Step 15: Call displayTemples function with sorted list
  displayTemples(sortedTemples);
};

// Step 17: Test your code
getTemples();

// Additional event listeners for select elements
document.getElementById("filtered").addEventListener("change", filterTemples);
document.getElementById("sort").addEventListener("change", sortBy);
