var Strings = new Typed(".text", {
  strings: ["Frontend Developer", "Editor", "Web Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  BackDelay: 1000,
  loop: true,
});

const neonCircle = document.getElementById("neonCircle");
const neonLines = document.getElementById("neonLines");
let isLoading = false;

function breatheAnimation() {
    neonCircle.animate([
        { boxShadow: "0 0 50px rgba(255, 0, 0, 0.7)" },
        { boxShadow: "0 0 60px rgba(255, 0, 0, 6.7)" },
        { boxShadow: "0 0 50px(255, 0, 0, 0.7)" }
    ], {
        duration: 1000,
        iterations: Infinity
    });
}

function createNeonLine() {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "50%");
    line.setAttribute("y1", "0");
    line.setAttribute("x2", "50%");
    line.setAttribute("y2", "100%");
    line.setAttribute("stroke", "rgba(0, 22, 145, 0.7)");
    line.setAttribute("stroke-width", "2");
    neonLines.appendChild(line);
}


setInterval(() => {
    if (!isLoading) {
        startLoadingAnimation();
    } else {
        stopLoadingAnimation();
    }
}, 5000); // Ubah sesuai kecepatan yang Anda inginkan

breatheAnimation();

