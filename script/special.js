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
        .from(".words-1", 0.7, ideaTextTrans)
        .to(".words-1", 0.9, ideaTextTransLeave, "+=18")
        .from(".words-2", 0.7, ideaTextTrans)
        .to(".words-2", 2, ideaTextTransLeave, "+=19.5")
        .from(".when", 0.5, ideaTextTrans)
        .to(".when", 0.7, ideaTextTransLeave, "+=4")
        .from(".part-0", 0.7, ideaTextTrans)
        .to(".part-0", 0.7, ideaTextTransLeave, "+=3")
        .from(".part-1", 0.7, ideaTextTrans)
        .to(".part-1", 0.7, ideaTextTransLeave, "+=4")
        .from(".part-2", 0.7, ideaTextTrans)
        .to(".part-2", 0.7, ideaTextTransLeave, "+=3.5")
        .from(".part-3", 0.7, ideaTextTrans)
        .to(".part-3", 0.7, ideaTextTransLeave, "+=5")
        .from(".PS", 0.7, ideaTextTrans)
        .to(".PS", 3.5, ideaTextTransLeave, "+=6")
        

    // Restart animation on button click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });

    // Redirect on button click
    const myBtn = document.getElementById("giftbox");
    myBtn.addEventListener("click", () => {
        window.location.href = "testing.html";
    });
};

// Start the animation
animationTimeline();
