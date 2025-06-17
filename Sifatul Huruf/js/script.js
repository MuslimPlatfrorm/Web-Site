function showHarakat(harakatName) {
            // Deactivate all harakat groups (tbody elements)
            const harakatGroups = document.querySelectorAll('.harakat-group');
            harakatGroups.forEach(group => {
                group.classList.remove('active');
            });

            // Deactivate all buttons
            const buttons = document.querySelectorAll('.harakat-btn');
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

// Activate the selected group
            const selectedGroup = document.getElementById(harakatName + '-group');
            if (selectedGroup) {
                selectedGroup.classList.add('active');
            }

            // Activate the clicked button
            // We find the button by its onclick attribute content
            const activeButton = Array.from(buttons).find(btn => btn.getAttribute('onclick') === showHarakat('${harakatName}'));
            if (activeButton) {
                activeButton.classList.add('active');
            }
        }