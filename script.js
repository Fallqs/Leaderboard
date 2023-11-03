fetch('leaderboard.json')
    .then(response => response.json())
    .then(data => {
        const leaderboardContainer = document.getElementById('leaderboard-container');

        // Sort the data based on scores
        data.sort((a, b) => b.score - a.score);

        // Generate HTML for the leaderboard
        let leaderboardHTML = '<ol>';
        data.forEach((entry, index) => {
            leaderboardHTML += `<li>${index + 1}. ${entry.name} - ${entry.score}</li>`;
        });
        leaderboardHTML += '</ol>';

        // Set the generated HTML inside the container
        leaderboardContainer.innerHTML = leaderboardHTML;
    })
    .catch(error => console.error('Error:', error));
