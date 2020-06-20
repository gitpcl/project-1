// Select modal overlay class
const modalOverlay = document.querySelector('.modal-overlay');

//Select cards - 6 cards total
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    //get first card at one event
    // addEventListener ("action", function (){})
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    })
}

// remove ACTIVE
const closeModal = document.querySelectorAll(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")

    modalOverlay.querySelector("iframe").src = ""
})
