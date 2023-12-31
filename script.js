fetch('leaderboard.json')
    .then(response => response.json())
    .then(data => {
        const leaderboard = document.getElementById('leaderboard');

        data.sort((a, b) => b.score != a.score? b.score - a.score : b.tot - a.tot);

        data.forEach((entry, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span><span style="color: #FF7F50;">${index + 1}</span>.</span>
                <span class="name">${entry.name}</span>
                <span class="score"><span style="color: #FF7F50;">${entry.score}</span> / ${entry.tot}</span>
            `;
            leaderboard.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error:', error));
