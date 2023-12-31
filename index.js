document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(e) {
        if (e.target.classList.contains("gallery-item")) {
            const src = e.target.getAttribute("src");
            const title = e.target.getAttribute("data-title");

            const modalImg = document.querySelector(".modal-img");
            modalImg.src = src;

            const modalTitle = document.getElementById("modal-title");
            modalTitle.textContent = title;

            const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
            myModal.show();
        }
    });
});
function downloadImage() {
    const modalImg = document.querySelector(".modal-img");
    const imageURL = modalImg.src;

    const anchor = document.createElement("a");
    anchor.href = imageURL;
    anchor.download = "downloaded_image";
    anchor.click();
}


