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
        
        // Toggle more dropdown menu
        function toggleMoreMenu(event, element) {
            event.stopPropagation();
            
            // Close all other dropdowns first
            document.querySelectorAll('.more-dropdown').forEach(dropdown => {
                if (dropdown !== element.nextElementSibling) {
                    dropdown.classList.remove('active');
                }
            });
            
            // Toggle the clicked dropdown
            const dropdown = element.nextElementSibling;
            dropdown.classList.toggle('active');
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
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.more')) {
                document.querySelectorAll('.more-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
        
        // Initialize more dropdowns after DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Add click event to all more links
            document.querySelectorAll('.more').forEach(moreLink => {
                moreLink.addEventListener('click', function(event) {
                    toggleMoreMenu(event, this);
                });
            });
        });
