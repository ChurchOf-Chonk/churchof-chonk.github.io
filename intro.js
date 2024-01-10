if (document.referrer.includes("patch.html")) {
    showUI();
}

else {
    setTimeout(() => {
        document.getElementById("dots").style.animation = "dots-final 2.5s ease alternate infinite both";
    
        setTimeout(() => {
            showUI();
        }, 5000);
    }, 5000);   
}

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
          document.getElementById("oracle-card").style.opacity = "1";
          document.getElementById("oracle-card").style.transform = "translateY(0)";
      }, 1000);

        setTimeout(() => {
            document.getElementById("patch-button").style.transition = "0.25s ease";

            document.body.style.pointerEvents = "all";
        }, 2500);
    }, 5000);
}

function exitToPatch() {
    document.getElementById("navbar").style.transition = "2.5s ease";
    document.getElementById("patch-button").style.transition = "2.5s ease";

    document.body.style.overflow = "hidden";



    document.getElementById("navbar").style.opacity = "0";
    document.getElementById("navbar").style.transform = "translateY(-10rem)";

    document.getElementById("patch-button").style.opacity = "0";
    document.getElementById("patch-button").style.transform = "translateX(-10rem)";

    document.getElementById("mantra-card").style.opacity = "0";
    document.getElementById("mantra-card").style.transform = "translateY(5rem)";

    document.getElementById("bible-card").style.opacity = "0";
    document.getElementById("bible-card").style.transform = "translateY(5rem)";

    document.getElementById("dots").style.animation = "dots-final 2.5s ease alternate infinite both"; 
    document.getElementById("dots").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("dots").style.opacity = "1";
    }, 2500);

    setTimeout(() => {
        location.href = 'patch.html'; 
    }, 5000);
}

function exitToOtherSite(url) {
    document.getElementById("navbar").style.transition = "2.5s ease";
    document.getElementById("patch-button").style.transition = "2.5s ease";

    document.body.style.overflow = "hidden";



    document.getElementById("navbar").style.opacity = "0";
    document.getElementById("navbar").style.transform = "translateY(-10rem)";

    document.getElementById("patch-button").style.opacity = "0";
    document.getElementById("patch-button").style.transform = "translateX(-10rem)";

    document.getElementById("mantra-card").style.opacity = "0";
    document.getElementById("mantra-card").style.transform = "translateY(5rem)";

    document.getElementById("bible-card").style.opacity = "0";
    document.getElementById("bible-card").style.transform = "translateY(5rem)";

    setTimeout(() => {
        window.open(url, '_blank');

        showUI();
    }, 2500);
}