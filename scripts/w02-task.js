// Step 1: Declare and instantiate variables
const fullName = 'Vincent Moore'; 
const currentYear = new Date().getFullYear();
const profilePicture = 'images/vincent.jpg'; 

// Step 2: Set HTML Element Variables
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const profileImage = document.querySelector('#home picture img');

// Step 3: Adding Content to the Document
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

// Check if the profileImage exists before setting attributes
if (profileImage) {
  profileImage.setAttribute('src', profilePicture);
  profileImage.setAttribute('alt', `Profile image of ${fullName}`);
}

// Step 4: Arrays
const favoriteFoods = ['Pizza', 'Ice Cream', 'Sushi']; 

// Add another favorite food
const newFavoriteFood = 'Burgers';
favoriteFoods.push(newFavoriteFood);

// Remove the first element
favoriteFoods.shift();

// Append the array output showing the modified array, using a line break
foodElement.innerHTML = favoriteFoods.map(food => `${food}<br>`).join('');

// Add another array with favorite foods
const moreFavoriteFoods = ['Fruit: Banana', 'Mango', 'Apple', 'Dinner: Fufu with Groundnut Soup', 'Rice with Stew', 'Meat Pie', 'Fried Rice with Chicken'];

// Append the new array values onto the displayed content of the HTML element with the id of food
foodElement.innerHTML += moreFavoriteFoods.map(food => `${food}<br>`).join(' ');

// Remove the last element in the favorite food array
favoriteFoods.pop();

// Append the array output with this final modified favorite foods array
foodElement.innerHTML += favoriteFoods.map(food => `${food}<br>`).join('');
