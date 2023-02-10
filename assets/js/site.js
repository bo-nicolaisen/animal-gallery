
// data for site


const myData = {
    elephant: { name: 'elefant', picture: '/img/elephant.jpg', description: 'Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are the only surviving members of the family Elephantidae and the order Proboscidea. The order was formerly much more diverse during the Pleistocene, but most species became extinct during the Late Pleistocene epoch. Distinctive features of elephants include a long proboscis called a trunk, tusks, large ear flaps, pillar-like legs, and tough but sensitive skin. The trunk is used for breathing, bringing food and water to the mouth, and grasping objects. Tusks, which are derived from the incisor teeth, serve both as weapons and as tools for moving objects and digging. The large ear flaps assist in maintaining a constant body temperature as well as in communication. African elephants have larger ears and concave backs, whereas Asian elephants have smaller ears, and convex or level backs.' },
    tiger: { name: 'tiger', picture: '/img/standard_tiger.jpg', description: '' },
    spider: { name: 'edderkop', picture: '/img/Brachypelma_smithi.jpg', description: 'Mexican red knee tarantula spider Brahipelma Smitti on coconut substrate shortly after molting' },
    koala: { name: 'koala', picture: '/img/_WW236934.jpg', description: 'nice fellow' },
    shark: { name: 'haj', picture: '/img/_WW236934.jpg', description: 'not a nice fellow' },
};



// CSS class for gallery cards
let galleryCardClass = 'galleryCard';

// the app lives here
const myApp = document.getElementById('app');



buildGallery();




function buildGallery() {

    for (let myIndex in myData) {

        let myName = myData[myIndex].name;
        let myUrl = myData[myIndex].picture;
        let myDescription = myData[myIndex].description;

        buildCard(myName, myUrl, myDescription);
    }

}


function buildCard(myHeadline, myUrl, myDescription, clearParent) {

    if (clearParent) {
        myApp.innerHTML = '';
    }


    // card elements
    const myCard = document.createElement('figure');
    const cardHeadline = document.createElement('h2');
    const cardImage = document.createElement('img');
    const cardDescription = document.createElement('p');



    // modular method
    //console.log(cardImage);


    cardHeadline.innerText = myHeadline;
    cardImage.src = myUrl;

    cardDescription.innerText = myDescription;




    myCard.appendChild(cardHeadline);
    myCard.appendChild(cardImage);
    myCard.appendChild(cardDescription);

    // styling add a class
    myCard.classList.add(galleryCardClass);

    // append card
    myApp.appendChild(myCard);
}
