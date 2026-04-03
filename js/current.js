$(document).ready(function(){
            $('#icon').click(function(){
                $('nav ul').toggleClass('show');
            });

            const storedMode = localStorage.getItem('mode');
            if (storedMode) {
                // Apply the stored mode
                applyMode(storedMode);
            }

            $('#darkModeToggle').click(function(){
                // Toggle dark mode
                const isDarkMode = $('body').hasClass('dark-mode');
                const newMode = isDarkMode ? 'light-mode' : 'dark-mode';
                
                // Store the mode preference
                localStorage.setItem('mode', newMode);

                // Apply the new mode
                applyMode(newMode);
            });

            function applyMode(mode) {
                $('body').removeClass('dark-mode light-mode').addClass(mode);
                $('nav').removeClass('dark-mode light-mode').addClass(mode);
                $('section').removeClass('dark-mode light-mode').addClass(mode);
                $('footer').removeClass('dark-mode light-mode').addClass(mode);
                $('.footer-row a').removeClass('dark-mode light-mode').addClass(mode);
            }

            function performSearch() {
                var searchQuery = $('#searchBar').val();
                console.log('Search Query:', searchQuery);
                window.open(`https://penguinmod.com/search?q=${searchQuery}`)
            }

            // Click event for search icon
            $('#searchIcon').click(function(){
                performSearch();
            });

            // Keypress event for Enter key in search bar
            $('#searchBar').keypress(function(e){
                if(e.which === 13){ // 13 corresponds to the Enter key
                    performSearch();
                }
            });
            /*
            $.get("https://api.github.com/repos/gaiawindwave90/Gaia-Zone/commits", function(data) {
            // Display recent commits in a section
            var commitsSection = $("#recentCommits");
            var commitsList = $("<ul>");

            data.forEach(function(commit) {
                // Exclude commits made by "web-flow"
                if (commit.author && commit.author.login.toLowerCase() !== "web-flow") {
                    var commitItem = $("<li>");
                    var commitInfo = commit.author ? commit.author.login : "Unknown";
                    var commitTitle = commit.commit.message;

                    commitItem.text(commitInfo + " - " + commitTitle);
                    commitsList.append(commitItem);
                }
            });

            commitsSection.append(commitsList);
            
          });
          <div id="recentCommits">
            <h2>Recent Commits</h2>
            <ul></ul>
          </div>
          */
        });