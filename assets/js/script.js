function showScreen(screenId) {
            // Hide all screens
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            
            // Show the selected screen
            document.getElementById(screenId).classList.add('active');
            
            // Update navigation
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Find and activate the corresponding nav item
            const currentNav = document.querySelector(`.nav-item[onclick="showScreen('${screenId}')"]`);
            if (currentNav) {
                currentNav.classList.add('active');
            }
        }
        
        // Add touch effects to all interactive elements
        document.querySelectorAll('.metric-card, .device-card, .history-item, .time-option').forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.opacity = '0.7';
            });
            
            element.addEventListener('touchend', function() {
                this.style.opacity = '1';
            });
        });
