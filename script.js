
/* =================================
   CREATE FLOATING PARTICLES
================================= */

const particles = document.querySelector(".particles");

for (let i = 0; i < 70; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (4 + Math.random() * 6) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.transform =
        `scale(${0.5 + Math.random()})`;

    particles.appendChild(particle);
}


/* =================================
   BLESSING BUTTON
================================= */

const button = document.getElementById("blessBtn");

const message = document.getElementById("message");

button.addEventListener("click", function () {

    message.innerHTML =
        "✨ गणपति बप्पा मोरया! ✨";

    message.style.animation = "appear 1s ease";

    button.innerHTML = "🌺 Blessings Received";

    createFlowers();
});


/* =================================
   FLOWER EFFECT
================================= */

function createFlowers() {

    const flowers = ["🌸", "🌺", "🌼", "🪷"];

    for (let i = 0; i < 25; i++) {

        const flower = document.createElement("div");

        flower.innerHTML =
            flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.position = "fixed";

        flower.style.left =
            Math.random() * 100 + "vw";

        flower.style.top = "-50px";

        flower.style.fontSize =
            (15 + Math.random() * 20) + "px";

        flower.style.zIndex = "100";

        document.body.appendChild(flower);

        const duration =
            3 + Math.random() * 4;

        flower.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(360deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            flower.remove();
        }, duration * 1000);
    }
}


/* =================================
   DOUBLE CLICK EFFECT
================================= */

document.addEventListener("dblclick", function () {

    createFlowers();

});
