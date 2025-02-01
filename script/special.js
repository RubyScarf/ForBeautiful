
const animationTimeline = () => {
    // Initialize GSAP timeline
    const tl = gsap.timeline();

    // Split chars that need to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];
    const audio = document.getElementById("audio-player");

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
        .to(".when", 0.7, ideaTextTransLeave, "+=4")
        .add(() => {
            audio.play(); 
        }, "+=0")
        .from(".PS", 0.7, ideaTextTrans)
        .to(".PS", 0.7, ideaTextTransLeave, "+=6")
        

};

// Start the animation
animationTimeline();
