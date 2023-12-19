function patchNotes(repo) {
    const username = 'ChurchOf-Chonk';

    fetch(`https://api.github.com/repos/${username}/${repo}/commits?per_page=1`)
    .then(response => {
        const totalCount = response.headers.get('Link').match(/page=(\d+)>; rel="last"/)[1] / 100;
        return response.json().then(data => {
            const latestCommitMessage = data[0].commit.message;
            console.log(`Total commit count: ${totalCount}`);
            console.log(`Latest commit message: ${latestCommitMessage}`);
            
            document.getElementById(`${repo}-version`).innerText = `Version ${totalCount} Patch Notes`;
            document.getElementById(`${repo}-whats-new`).innerText = latestCommitMessage;

            document.getElementById(`${repo}-about-card`).style.pointerEvents = "all";
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}

patchNotes("churchof-chonk.github.io");
patchNotes("chonkbible");
patchNotes("mantra");

/// Intro
document.getElementById("dots").style.animation = "dots 5s ease reverse both";

setTimeout(() => {
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("navbar").style.transform = "translateY(0rem)";

    document.getElementById("back-button").style.opacity = "1";
    document.getElementById("back-button").style.transform = "translateX(0rem)";

    document.getElementById("churchof-chonk.github.io-about-card").style.opacity = "1";
    document.getElementById("churchof-chonk.github.io-about-card").style.transform = "translateY(0rem)";

    setTimeout(() => {
        document.getElementById("chonkbible-about-card").style.opacity = "1";
        document.getElementById("chonkbible-about-card").style.transform = "translateY(0rem)";
    }, 500);

    setTimeout(() => {
        document.getElementById("mantra-about-card").style.opacity = "1";
        document.getElementById("mantra-about-card").style.transform = "translateY(0rem)";
    }, 1000);

    setTimeout(() => {
        document.getElementById("churchof-chonk.github.io-about-card").style.transition = "0.25s ease";

        document.getElementById("back-button").style.transition = "0.25s ease";
        document.body.style.pointerEvents = "all";
    }, 2500);
    
    setTimeout(() => {
        document.getElementById("chonkbible-about-card").style.transition = "0.25s ease";
    }, 3000);

    setTimeout(() => {
        document.getElementById("mantra-about-card").style.transition = "0.25s ease";

        document.getElementById("navbar").style.transition = "none";
        document.getElementById("navbar").style.width = "100%";

        document.getElementById("column").style.transition = "none";
        document.getElementById("column").style.marginRight = "0";

        document.body.style.overflow = "initial";
    }, 3500);
}, 5000);

function exitToHome() {
    document.getElementById("navbar").style.transition = "2.5s ease";

    document.body.style.overflow = "hidden";

    document.getElementById("column").style.transition = "none";
    document.getElementById("column").style.marginRight = "1rem";

    document.getElementById("churchof-chonk.github.io-about-card").style.transition = "2.5s ease";
    document.getElementById("chonkbible-about-card").style.transition = "2.5s ease";
    document.getElementById("mantra-about-card").style.transition = "2.5s ease";

    document.getElementById("navbar").style.opacity = "0";
    document.getElementById("navbar").style.transform = "translateY(-10rem)";

    document.getElementById("back-button").style.opacity = "0";
    document.getElementById("back-button").style.transform = "translateX(-10rem)";

    document.getElementById("churchof-chonk.github.io-about-card").style.opacity = "0";
    document.getElementById("churchof-chonk.github.io-about-card").style.transform = "translateY(5rem)";

    document.getElementById("chonkbible-about-card").style.opacity = "0";
    document.getElementById("chonkbible-about-card").style.transform = "translateY(5rem)";

    document.getElementById("mantra-about-card").style.opacity = "0";
    document.getElementById("mantra-about-card").style.transform = "translateY(5rem)";

    document.getElementById("dots").style.animation = "dots-final 2.5s ease alternate infinite both"; 
    document.getElementById("dots").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("dots").style.opacity = "1";
    }, 2500);

    setTimeout(() => {
        location.href = 'index.html'
    }, 5000);
}