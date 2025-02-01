const animationTimeline = () => {
    // Initialize GSAP timeline
    const tl = gsap.timeline();

    // Split chars that need to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    if (textBoxChars) {
        textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
            .split("")
            .join("</span><span>")}</span>`;
    }

    if (hbd) {
        hbd.innerHTML = `<span>${hbd.innerHTML
            .split("")
            .join("</span><span>")}</span>`;
    }

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    };

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    };

// Timeline animations
    tl.to(".container", 0.6, { visibility: "visible" })
        .from(".when", 0.7, ideaTextTrans)
        .to(".when", 0.7, ideaTextTransLeave, "+=3")
        .from(".words", 0.7, ideaTextTrans)
        .to(".words", 0.7, ideaTextTransLeave, "+=4.5")
        .from(".PS", 0.7, ideaTextTrans)
        .to(".PS", 0.7, ideaTextTransLeave, "+=3.5")
        

    // Restart animation on button click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });

    // Redirect on button click
    const myBtn = document.getElementById("giftbox");
    myBtn.addEventListener("click", () => {
        window.location.href = "special.html";
    });
};

// Start the animation
animationTimeline();
