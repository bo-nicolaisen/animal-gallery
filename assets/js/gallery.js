

/*delay på data hentning i ms */
const myLoadTime = 2000;
//const myData = fetchData();
let myData = null;
let myGalleryElement = null;


/* kicks off app when the DOM is loaded */
window.addEventListener("load", initApp);

function initApp() {
    console.log('init');
    myGalleryElement = document.getElementById('app');
    displayLoadingIcon();
    fetchData();
}



function initGallery(fetchedData) {
    myData = fetchedData;

    createGallery();

}


function createGallery() {
    //myData

    resetGallery();

    myIndex = 0;
    myData.map((myAnimal) => {

        createCard(myAnimal, myIndex);
        myIndex++;
    });
}


function resetGallery() {
    myGalleryElement.innerHTML = "";
}

function displayLoadingIcon() {

    let myLoadingIcon = document.createElement('lottie-player');
    myLoadingIcon.classList.add('loadingIcon');
    myLoadingIcon.src = "https://assets2.lottiefiles.com/packages/lf20_rwq6ciql.json";
    myLoadingIcon.background = "transparent";
    myLoadingIcon.setAttribute('autoplay', '');
    myGalleryElement.appendChild(myLoadingIcon);

}


function createCard(myCardData, myIndex) {

    let galleryCard = document.createElement("article");

    galleryCard.setAttribute('data-index', myIndex);

    galleryCard.classList.add('galleryCard');
    galleryCard.style.cursor = 'Pointer';

    galleryCard.addEventListener('click', (e) => {

        e.stopPropagation();
        console.log(e.target);
        myIndex = e.currentTarget.dataset.index;
        createDetailedView(myIndex);

    });

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





function createDetailedView(myIndex) {


    let myCardData = myData[myIndex];

    resetGallery();

    let detailCard = document.createElement("article");

    detailCard.setAttribute('data-index', myIndex);

    detailCard.classList.add('detailView');
    detailCard.style.cursor = 'Pointer';

    detailCard.addEventListener('click', (e) => {

        e.stopPropagation();
        createGallery();

    });

    let galleryName = document.createElement("h2");
    galleryName.innerText = myCardData.name;


    let galleryImage = document.createElement("img");
    galleryImage.src = myCardData.picture;

    let galleryDes = document.createElement("p");
    galleryDes.innerText = myCardData.description;

    detailCard.appendChild(galleryImage);
    detailCard.appendChild(galleryName);
    detailCard.appendChild(galleryDes);

    myGalleryElement.appendChild(detailCard);



}











/*  get data function
denne funktion vil typisk være en funktion der henter data fra et API
*/



async function fetchData() {
    // data object
    console.log('fetching data');
    await new Promise(resolve => setTimeout(resolve, myLoadTime));

    const myData = [

        {
            name: 'Elefant',
            picture: 'assets/img/elephant.jpg',
            description: 'Loxodonta africana, også kendt som afrikansk elefant, er verdens største landdyr. Den har en grå hud og store ører, som den bruger til at regulere kropstemperaturen og kommunikere med andre elefanter. Afrikanske elefanter lever i store flokke og spiser op til 150 kg planter om dagen. De er også kendt for deres stærke intelligens og følelsesmæssige bånd til deres familie og flok. På grund af ulovlig jagt og tab af levesteder er afrikanske elefanter klassificeret som truede og er beskyttet af lovgivning'
            , shortDescription: 'Loxodonta africana, også kendt som afrikansk elefant.'
        },

        {
            name: 'Tiger',
            picture: 'assets/img/standard_tiger.jpg',
            description: 'Panthera tigris, også kendt som tigeren, er en stor kat, der er hjemmehørende i Asien. Tigeren har en gul eller orange pels med mørke striber og har normalt en lang kraftig hale. Der findes forskellige underarter af tigeren, og størrelsen og farven kan variere afhængigt af underarten og habitatet. Tigeren er kendt for sin styrke, hurtighed og smidighed, og den er en top-rovdyr i sit økosystem. Desværre er mange af underarterne af tigeren truede på grund af tab af levesteder og ulovlig jagt, og bevaring af tigeren og dens levesteder er en vigtig bevaringsindsats.',
            shortDescription: 'Panthera tigris, også kendt som tigeren.'
        },

        {
            name: 'Tarantel',
            picture: 'assets/img/Brachypelma_smithi.jpg',
            description: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel, er en stor og farverig edderkop, der er hjemmehørende i Mexico. Den har en mørk krop med røde og orange striber på benene og en karakteristisk rød knæled. Brachypelma smithi er en populær art blandt edderkoppeentusiaster på grund af dens smukke farver og rolige natur.',
            shortDescription: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel.'
        },

        {
            name: 'Koala',
            picture: 'assets/img/_WW236934.jpg',
            description: 'Phascolarctos cinereus, også kendt som koala, er en pungdyrart, der er hjemmehørende i Australien. Den har en blød, tyk pels, store ører og en stor næse, og dens krop er tilpasset til at leve hovedsageligt af eukalyptusblade. Koalaer lever hovedsageligt i trætoppene og er kendt for deres afslappede og søvnige opførsel, da de sover op til 20 timer om dagen.',
            shortDescription: 'Phascolarctos cinereus, også kendt som koala.'
        },

        {
            name: 'Haj',
            picture: 'assets/img/great-white.jpg',
            description: 'Carcharodon carcharias, også kendt som en hvidhaj eller great white haj, er en stor rovdyr, der lever i kystfarvande over hele verden. Den har en grå-blå krop med en trekantet finne på ryggen og en stor kraftig kæbe med skarpe tænder. Carcharodon carcharias er kendt for at være en top-rovdyr og jager primært sæler og fisk. Den er også kendt for dens sjældne, men berygtede, angreb på mennesker, selvom sådanne angreb ofte er utilsigtede og sjældne.',
            shortDescription: 'Carcharodon carcharias, også kendt som en hvidhaj.'
        }
    ];
    initGallery(myData);
    //return myData;

}




/* async function test() {
    console.log('start timer');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('after 1 second');
}

test(); */