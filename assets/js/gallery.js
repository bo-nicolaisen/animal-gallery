

/*Starter på data hentning */

const myData = fetchData();
let myGalleryElement = null;


/* kicks off app when the DOM is loaded */
window.addEventListener("load", initGallery);


function initGallery() {
    myGalleryElement = document.getElementById('app');
    createGallery();

}


function createGallery() {
    //myData

    console.log('elefenten er: ' + myData.elephant.description)



    for (let myAnimal in myData) {

        createCard(myData[myAnimal]);
    }
}

function resetGallery() {


}


function createCard(myCardData) {



    let galleryCard = document.createElement("article");
    galleryCard.classList.add('galleryCard');

    let galleryName = document.createElement("h2");
    galleryName.innerText = myCardData.name;



    let galleryImage = document.createElement("img");
    galleryImage.src = myCardData.picture;

    let galleryShortDes = document.createElement("p");
    galleryShortDes.innerText = myCardData.shortDescription;


    galleryCard.appendChild(galleryName);
    galleryCard.appendChild(galleryImage);
    galleryCard.appendChild(galleryShortDes);

    myGalleryElement.appendChild(galleryCard);


}








/*  get data function
denne funktion vil typisk være en funktion der henter data fra et API
*/

function fetchData() {
    // data object

    const myData = {

        elephant: {
            name: 'elefant',
            picture: 'assets/img/elephant.jpg',
            description: 'Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are the only surviving members of the family Elephantidae and the order Proboscidea. The order was formerly much more diverse during the Pleistocene, but most species became extinct during the Late Pleistocene epoch. Distinctive features of elephants include a long proboscis called a trunk, tusks, large ear flaps, pillar-like legs, and tough but sensitive skin. The trunk is used for breathing, bringing food and water to the mouth, and grasping objects. Tusks, which are derived from the incisor teeth, serve both as weapons and as tools for moving objects and digging. The large ear flaps assist in maintaining a constant body temperature as well as in communication. African elephants have larger ears and concave backs, whereas Asian elephants have smaller ears, and convex or level backs.'
            , shortDescription: 'nice elephant.'
        },

        tiger: {
            name: 'tiger',
            picture: 'assets/img/standard_tiger.jpg',
            description: 'tiger-liger, er farlig',
            shortDescription: 'nice tiger.'
        },

        spider: {
            name: 'edderkop',
            picture: 'assets/img/Brachypelma_smithi.jpg',
            description: 'Mexican red knee tarantula spider Brahipelma Smitti on coconut substrate shortly after molting',
            shortDescription: 'nice spider.'
        },

        koala: {
            name: 'koala',
            picture: 'assets/img/_WW236934.jpg',
            description: 'nice fellow looks cute',
            shortDescription: 'nice coala.'
        },

        shark: {
            name: 'haj',
            picture: 'assets/img/_WW236934.jpg',
            description: 'not a nice fellow',
            shortDescription: 'nice shark.'
        },
    };

    return myData;

}