function updater() {
            let timer = document.querySelector("p")
            const now = new Date()
            timer.innerText = now.toLocaleString()
        }
        updater()
        setInterval(updater, 1000);