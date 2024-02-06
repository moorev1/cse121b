// w04-task.js

// Object Literal
let myProfile = {
    name: "Vincent Moore", 
    photo: "images/vincent.jpg", 
    // My favorite foods
    favoriteFoods: [
        'Fried Rice',
        'Jollof Rice',
        'Beans'
    ], 
    // My actual hobbies
    hobbies: [
        'Football',
        'Reading',
        'Instructor'
    ], 
    placesLived: []
};

//  placesLived array
myProfile.placesLived.push(
    {
        place: 'Ghana, Western, Takoradi',
        length: '15 years'
    },
    // additional places as needed
    {
        place: 'Accra',
        length: '1 year'
    }
);

// DOM Manipulation (Output)
document.querySelector('#name').textContent = myProfile.name;

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

// Display favorite foods
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

// Display hobbies
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

// Display places lived
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
