// Haley Lind

/* Section */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

/* 
 *  Open image modals
 */
function openModal(src) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = src;
}

/* 
 * Close image modals
*/
function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}

  /*
   * Image Galleries to Display one at a time
  */ 
 const galleries = {
    pcb: [
        "assets/journal/june_2025/designing_a_footprint.png",
        "assets/journal/june_2025/fp_2.png",
        "assets/journal/june_2025/fp_3.png",
        "assets/journal/june_2025/pcb_design_1.png",
        "assets/journal/june_2025/pcb_design_2.png",
        "assets/journal/june_2025/pcb_layout_1.png",
        "assets/journal/june_2025/pcb_layout_done.png"
    ],
    csce790: [
      "assets/journal/spring_2025/selfie.jpg",
      "assets/journal/spring_2025/setup.jpg"
    ],
    csce212: [
      "assets/counter/main.png",
      "assets/counter/JKFF.png",
      "assets/counter/3bit.png"
    ]
    // Add more galleries as needed
};

let currentGallery = [];
let currentIndex = 0;

function openGallery(projectKey) {
    currentGallery = galleries[projectKey];
    currentIndex = 0;
    showImage();
    document.getElementById("imgModal").style.display = "flex";
}

function showImage() {
    const modalImg = document.getElementById("modalImg");
    modalImg.src = currentGallery[currentIndex];
}

function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % currentGallery.length;
    showImage();
}

function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    showImage();
}

function closeModal(event) {
    // Only close if clicking on the background or close button
    if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
        document.getElementById("imgModal").style.display = "none";
    }
}
