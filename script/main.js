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
        .from(".one", 0.7, { opacity: 0, y: 10 })
        .from(".two", 0.4, { opacity: 0, y: 10 })
        .to(".one", 0.7, { opacity: 0, y: 10 }, "+=3.5")
        .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
        .from(".three", 0.7, { opacity: 0, y: 10 })
        .to(".three", 0.7, { opacity: 0, y: 10 }, "+=2")
        .from(".idea-0", 0.7, ideaTextTrans)
        .to(".idea-0", 0.7, ideaTextTransLeave, "+=3")
        .from(".idea-1", 0.7, ideaTextTrans)
        .to(".idea-1", 0.7, ideaTextTransLeave, "+=4.5")
        .from(".idea-2", 0.7, ideaTextTrans)
        .to(".idea-2", 0.7, ideaTextTransLeave, "+=3.5")
        .from(".idea-3", 0.7, ideaTextTrans)
        .to(".idea-3 strong", 0.5, {
            scale: 1.2,
            x: 10,
            backgroundColor: "rgb(21, 161, 237)",
            color: "#fff",
        })
        .to(".idea-3", 0.9, ideaTextTransLeave, "+=2.5")
        .from(".idea-4", 0.7, ideaTextTrans)
        .to(".idea-4", 0.6, ideaTextTransLeave, "+=2")
        .from(".idea-5", 0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        })
        .to(".idea-5 span", 0.7, { rotation: 90, x: 8 }, "+=1.4")
        .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=2")
        .staggerFrom(".idea-6 span", 0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        }, 0.2)
        .staggerTo(".idea-6 span", 0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        }, 0.2, "+=1.5")
        .staggerFromTo(".baloons img", 2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        }, 0.2)
        .from(".profile-picture", 0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        }, "-=2")
        .from(".hat", 0.5, { x: 200, y: 350, rotation: -180, opacity: 0 })
        .staggerFrom(".wish-hbd span", 0.7, {
            opacity: 0,
            y: -50,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        }, 0.1)
        .staggerFromTo(".wish-hbd span", 0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#3e6375",
            ease: Expo.easeOut,
        }, 0.1, "party")
        .from(".wish h5", 0.5, { opacity: 0, y: 10, skewX: "-15deg" }, "party")
        .staggerTo(".eight svg", 1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        }, 0.3)
        .to(".six", 0.5, { opacity: 0, y: 30, zIndex: "-1" })
        .staggerFrom(".nine p", 2.1, ideaTextTrans, 2.2)
        .to(".last-smile", 0.5, { rotation: 90 }, "+=1");

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
