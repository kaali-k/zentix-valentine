document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const successOverlay = document.getElementById("successMessage");

  // Bounds for movement
  const container = document.querySelector(".container");

  // Move "NO" button on hover or touch
  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);

    // Sound Effect Setup using Web Audio API
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    function playBeep() {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); // 800Hz beep
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); // Low volume
        
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1); // 100ms duration
    }

    function moveButton(e) {
        if (e.type === 'touchstart') {
            e.preventDefault();
        }
        playBeep();

        const contentBox = document.querySelector('.content');
        
        // Ensure button is absolute relative to the 'content' card box
        // and is not being pushed out by flex layout of btn-group
        if (noBtn.parentElement !== contentBox) {
            contentBox.appendChild(noBtn);
            noBtn.style.position = 'absolute';
        }

        const btnWidth = noBtn.offsetWidth || 80;
        const btnHeight = noBtn.offsetHeight || 40;

        // Coordinates strictly within the .content inner dimensions
        const maxX = contentBox.clientWidth - btnWidth;
        const maxY = contentBox.clientHeight - btnHeight;

        // Calculate random position
        let randomX = Math.floor(Math.random() * maxX);
        let randomY = Math.floor(Math.random() * maxY);

        // Explicit clamping for maximum safety
        randomX = Math.max(5, Math.min(randomX, maxX - 5));
        randomY = Math.max(5, Math.min(randomY, maxY - 5));

        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        noBtn.style.zIndex = '9999';
        
        // Visual panic effect
        const randomRot = Math.floor(Math.random() * 20) - 10;
        noBtn.style.transform = `rotate(${randomRot}deg)`;
    }

  // YES Button Click
  yesBtn.addEventListener("click", () => {
    // 1. Launch Confetti
    launchConfetti();

    // 2. Show Success Message
    successOverlay.classList.remove("hidden");
    // Force reflow
    void successOverlay.offsetWidth;
    successOverlay.classList.add("visible");
  });

  function launchConfetti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 200 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // multiple origins to fill screen
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        }),
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        }),
      );
    }, 250);
  }
});
