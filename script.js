const locations = [
    { city: "New York", zone: "America/New_York" },
    { city: "London", zone: "Europe/London" },
    { city: "Tokyo", zone: "Asia/Tokyo" },
    { city: "Sydney", zone: "Australia/Sydney" }
];

function updateClocks() {
    const container = document.getElementById('clock-container');
    container.innerHTML = ''; // Clear previous

    locations.forEach(loc => {
        const now = new Date();
        const timeString = now.toLocaleString("en-US", {
            timeZone: loc.zone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        const card = document.createElement('div');
        card.className = 'clock-card';
        card.innerHTML = `
            <h3>${loc.city}</h3>
            <div class="time">${timeString}</div>
        `;
        container.appendChild(card);
    });
}

// Update every second
setInterval(updateClocks, 1000);
updateClocks();
