/*modal*/
window.onload = () => {
    // Your JavaScript code here
    const hamburgerButton = document.getElementById("hamburger-button");
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("close-button");
  
    
    hamburgerButton.addEventListener("click", () => {
      modal.classList.add("modal-open");
      modal.classList.add("modal-animation");
      //animatedText.classList.add("slide-in");
    });
    
    closeButton.addEventListener("click", () => {
      modal.classList.remove("modal-open");
      modal.classList.add("modal-animation-out");
    });
  
    modal.addEventListener("transitionend", () => {
      modal.classList.remove("modal-animation-out");
    });
  };
  /**/