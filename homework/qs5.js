function updateDateTime() {
    const now = new Date()
    document.getElementById("dateTime").textContent = now.toLocaleString()
}

setInterval(updateDateTime, 1000)
updateDateTime()