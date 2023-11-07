fetch('leaderboard.json')
    .then(response => response.json())
    .then(data => {
        const leaderboard = document.getElementById('leaderboard');

        data.sort((a, b) => b.score - a.score);

        data.forEach((entry, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${index + 1}.</span>
                <span class="name">${entry.name}</span>
                <span class="score"><span style="color: #FF7F50;">${entry.score}</span> / ${entry.tot}</span>
            `;
            leaderboard.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error:', error));
