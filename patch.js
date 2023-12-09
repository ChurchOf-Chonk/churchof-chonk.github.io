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

            document.getElementById(`${repo}-about-card`).style.opacity = "1";
            document.getElementById(`${repo}-about-card`).style.pointerEvents = "all";
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}

patchNotes("churchof-chonk.github.io");
patchNotes("chonkbible");
patchNotes("mantra");