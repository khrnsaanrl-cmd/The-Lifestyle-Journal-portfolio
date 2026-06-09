function openGallery(type){

const modal = document.getElementById("galleryModal");
const gallery = document.getElementById("galleryImages");
const title = document.getElementById("galleryTitle");

gallery.innerHTML = "";

let images = [];

if(type === "photography"){

title.innerText = "Photography";

images = [
"images/photography1.jpeg",
"images/photography2.jpeg",
"images/photography3.jpeg",
"images/photography4.jpeg",
"images/photography5.jpeg",
"images/photography6.jpeg",
"images/photography7.jpeg",
"images/photography8.jpeg"
];

}

if(type === "food"){

title.innerText = "Food Hunting";

images = [
"images/food1.jpeg",
"images/food2.jpeg",
"images/food3.jpeg",
"images/food4.jpeg",
"images/food5.jpeg",
"images/food6.jpeg",
"images/food7.jpeg",
"images/food8.jpeg"
];

}

if(type === "travel"){

title.innerText = "Travel Diaries";

images = [
"images/travel1.jpeg",
"images/travel2.jpeg",
"images/travel3.jpeg",
"images/travel4.jpeg",
"images/travel5.jpeg",
"images/travel6.jpeg",
"images/travel7.jpeg",
"images/travel8.jpeg"
];

}

if(type === "project"){

title.innerText = "Creative Projects";

images = [
"images/project1.jpg",
"images/project2.jpg",
"images/project3.jpg",
"images/project4.jpg",
"images/project5.png",
"images/project6.png",
"images/project7.png",
"images/project8.png"
];

}

images.forEach(img => {

gallery.innerHTML += `
<img src="${img}">
`;

});

modal.style.display = "flex";
}

function closeGallery(){
document.getElementById("galleryModal").style.display = "none";
}