document.addEventListener("DOMContentLoaded", function() {
    const musicContainer = document.getElementById("music-container");

    const musiques = [
        { titre: "Tomorrow is Another Day", fichier: "Tomorrow is Another Day.wav" },
        { titre: "I'm Sorry, My Baby", fichier: "Someone Else.wav" },
        { titre: "Pls, Read My Texts", fichier: "The End.wav" },
        { titre: "She Won't Come Back", fichier: "She Won't Come Back.wav" },
        { titre: "Teenage Years", fichier: "I'm Sorry, My Baby.wav" },
        { titre: "For Today", fichier: "Bully.wav" },
        { titre: "Burn", fichier: "I've Seen It All.wav" },
        { titre: "Love Song", fichier: "I'm Not Okay.wav" },
        { titre: "The End", fichier: "You'll Find Peace.wav" },
        { titre: "Drain You", fichier: "For Today.wav" },
        { titre: "Unknown", fichier: "Unknown.wav" },
        { titre: "Void", fichier: "Rage 135.wav" }
    ];

    musiques.forEach(musique => {
        const musicElement = document.createElement("div");
        musicElement.classList.add("music-item");

        // Créer un élément de titre pour chaque musique
        const titleElement = document.createElement("h3");
        titleElement.textContent = musique.titre;

        const audioElement = document.createElement("audio");
        audioElement.controls = true;
        audioElement.src = musique.fichier;

        musicElement.appendChild(titleElement); // Ajouter le titre au conteneur musical
        musicElement.appendChild(audioElement); // Ajouter le lecteur audio
        musicContainer.appendChild(musicElement); // Ajouter le tout au conteneur de musique
    });
});

// Ouvrir la fenêtre modale
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Fermer la fenêtre modale
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Fonction pour avancer/reculer dans les images
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Fonction pour afficher une image spécifique
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
d