setTimeout(() => {
    document.getElementById("dots").style.animation = "dots-final 2.5s ease alternate infinite both";

    setTimeout(() => {
	    showUI();
    }, 5000);
}, 5000);

function showUI() {
    document.getElementById("dots").style.animation = "dots 5s ease reverse both";

    setTimeout(() => {
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("navbar").style.transform = "translateY(0)";

        document.getElementById("patch-button").style.opacity = "1";
        document.getElementById("patch-button").style.transform = "translateX(0)";

        document.getElementById("bible-card").style.opacity = "1";
        document.getElementById("bible-card").style.transform = "translateY(0)";

        setTimeout(() => {
            document.getElementById("mantra-card").style.opacity = "1";
            document.getElementById("mantra-card").style.transform = "translateY(0)";
        }, 500);

        setTimeout(() => {
            document.getElementById("navbar").style.transition = "0.25s ease";
            document.getElementById("patch-button").style.transition = "0.25s ease";

            document.body.style.overflow = "initial";
        }, 2500);
    }, 5000);
}