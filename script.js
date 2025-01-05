// Initial element definitions
const circle = document.getElementById("circle");
const navbar = document.getElementById("navbar");
const patchButton = document.getElementById("patch");
const bibleCard = document.getElementById("bible-card");
const biblePatchCard = document.getElementById("bible-patch-card");
const bibleVersion = document.getElementById("chonkbible-version");
const bibleNotes = document.getElementById("chonkbible-notes");
const mantraCard = document.getElementById("mantra-card");
const mantraPatchCard = document.getElementById("mantra-patch-card");
const mantraVersion = document.getElementById("mantra-version");
const mantraNotes = document.getElementById("mantra-notes");
const oracleCard = document.getElementById("oracle-card");
const oraclePatchCard = document.getElementById("oracle-patch-card");
const oracleVersion = document.getElementById("oracle-version");
const oracleNotes = document.getElementById("oracle-notes");

// Initial setup
document.body.style.cursor = "none";

document.body.style.overflow = "hidden";

document.body.style.width = "100vw";
document.body.style.height = "100vh";

// After intro animation
setTimeout(() => {
    // Proverbial curtain pull
    document.body.style.cursor = "default";

    circle.style.display = "none";

    // UI reveal
    navbar.style.opacity = 1;
    navbar.style.transform = "translateY(0)";

    patchButton.style.opacity = 1;
    patchButton.style.transform = "translateX(0)";

    setTimeout(() => {
        bibleCard.style.opacity = 1;
        bibleCard.style.transform = "translateY(0)";
    }, 100);

    setTimeout(() => {
        mantraCard.style.opacity = 1;
        mantraCard.style.transform = "translateY(0)";
    }, 200);

    setTimeout(() => {
        oracleCard.style.opacity = 1;
        oracleCard.style.transform = "translateY(0)";
    }, 300);
}, 2250);

// Patch notes
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
            document.getElementById(`${repo}-notes`).innerText = latestCommitMessage;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}

patchNotes("chonkbible");
patchNotes("mantra");
patchNotes("oracle");

function togglePatchNotes() {
    if (biblePatchCard.style.opacity == 0 && mantraPatchCard.style.opacity == 0 && oraclePatchCard.style.opacity == 0) {
        bibleCard.className = "card-flat-bottom column";
        biblePatchCard.style.opacity = 1;

        setTimeout(() => {
            mantraCard.className = "card-flat-bottom column";
            mantraPatchCard.style.opacity = 1;
        }, 250);

        setTimeout(() => {
            oracleCard.className = "card-warning-flat-bottom column";
            oraclePatchCard.style.opacity = 1;
        }, 500);
    }

    else {
        bibleCard.className = "card column";
        biblePatchCard.style.opacity = 0;

        setTimeout(() => {
            mantraCard.className = "card column";
            mantraPatchCard.style.opacity = 0;
        }, 250);

        setTimeout(() => {
            oracleCard.className = "card-warning column";
            oraclePatchCard.style.opacity = 0;
        }, 500);
    }
}

function exitToOtherSite(url) {
    navbar.style.opacity = 0;
    navbar.style.transform = "translateY(-10rem)";

    patchButton.style.opacity = 0;
    patchButton.style.transform = "translateX(-10rem)";

    setTimeout(() => {
        oracleCard.style.opacity = 0;
        oracleCard.style.transform = "translateY(5rem)";
    }, 100);

    setTimeout(() => {
        mantraCard.style.opacity = 0;
        mantraCard.style.transform = "translateY(5rem)";
    }, 200);

    setTimeout(() => {
        bibleCard.style.opacity = 0;
        bibleCard.style.transform = "translateY(5rem)";
    }, 300);

    if (url.includes("https://churchof-chonk.github.io")) {
        circle.style.opacity = 0;
        circle.style.display = "flex";
        circle.style.transition = "0.25s ease";

        setTimeout(() => {
            circle.style.animation = "frog-intro 0s ease";
            circle.style.opacity = 1;
        }, 1000);
    
        setTimeout(() => {
            location.href = url;
        }, 1500);
    }

    else {
        setTimeout(() => {
            location.href = url;
        }, 1000);
    }
}