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

    // Slide-in effect (from left to center)
    const slideIn = {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out"
    };

    // Slide-out effect (to the right)
    const slideOut = {
        opacity: 0,
        x: 100,
        duration: 0.7,
        ease: "power2.in"
    };

    const animationTimeline = () => {
    const tl = gsap.timeline();

    // Slide-in effect (with wiggle)
    const slideInWiggle = {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out",
        onStart: function () {
            gsap.fromTo(".wiggle", 
                { rotation: -5 }, 
                { rotation: 5, duration: 0.1, repeat: 5, yoyo: true, ease: "sine.inOut" }
            );
        }
    };

    // Slide-out effect (with wiggle)
    const slideOutWiggle = {
        opacity: 0,
        x: 100,
        duration: 0.7,
        ease: "power2.in",
        onStart: function () {
            gsap.fromTo(".wiggle", 
                { rotation: -5 }, 
                { rotation: 5, duration: 0.1, repeat: 5, yoyo: true, ease: "sine.inOut" }
            );
        }
    };

// Timeline animations
    tl.to(".container", 0.7, { visibility: "visible" })
        .from(".text-1", 0.7, ideaTextTrans)
        .to(".text-1", 0.7, ideaTextTransLeave, "+=5")
        .from(".text-2", 0.7, ideaTextTrans)
        .to(".text-2", 0.7, ideaTextTransLeave, "+=5")
        .from(".text-3", 0.7, ideaTextTrans)
        .to(".text-3", 0.7, ideaTextTransLeave, "+=5")
        .from(".text-4", 0.7, ideaTextTrans)
        .to(".text-4", 0.7, ideaTextTransLeave, "+=5")
        .from(".text-5", 0.7, ideaTextTrans)
        .to(".text-5", 0.7, ideaTextTransLeave, "+=5")
        .from(".text-6", 0.7, ideaTextTrans)
        .to(".text-6", 0.7, ideaTextTransLeave, "+=5")
        .from(".text-7", 0.7, ideaTextTrans)
        .to(".text-7", 0.7, ideaTextTransLeave, "+=5")
        .from(".text-8", 0.7, ideaTextTrans)
        .to(".text-8", 0.7, ideaTextTransLeave, "+=5")
        .from(".text-9", 0.7, ideaTextTrans)
        .to(".text-9", 0.7, ideaTextTransLeave, "+=5")
        .from(".text-10", 0.7, ideaTextTrans)
        .to(".text-10", 0.7, ideaTextTransLeave, "+=5")
        

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
