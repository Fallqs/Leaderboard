fetch('leaderboard.json')
    .then(response => response.json())
    .then(data => {
        const leaderboard = document.getElementById('leaderboard');

        data.sort((a, b) => b.score - a.score);

        data.forEach((entry, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${index + 1}. <span>${entry.name}</span> - <span>${entry.score}</span>`;
            leaderboard.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error:', error));
