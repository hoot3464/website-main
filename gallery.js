//gallery.js

const images = [
    {
        src: "assets/grimace.jpg",
        description: "Crazy Grimace design"
    },
    {
        src: "assets/grimace2_ignreview.png",
        description: "Grimace in action in a race"
    },
    {
        src: "assets/grimace_double.jpg",
        description: "A fearsome fast bike facing against its greatest foe... itself."
    },
    {
        src: "assets/Asphalt.jpg",
        description: "Asphalt 9 Legends N64 -custom design."
    },
    {
        src: "assets/neon2.png",
        description: "Neon shooting down through a corkscrew."
    },
    {
        src: "assets/neon_by_zxc6749_deviantart.jpg",
        description: "Neon Spotlight by DeviantArt."
    },
    {
        src: "assets/neon35.jpg",
        description: "Neon down the field at blazing fast speeds."
    },
    {
        src: "assets/xg_title.png",
        description: "Extreme G 64 Title Screen"
    }
];

let currentIndex = 0;

function updateGallery() {
    const image = images[currentIndex];
    document.getElementById('galleryImage').src = image.src;
    document.getElementById('imageDescription').innerText = image.description;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
}