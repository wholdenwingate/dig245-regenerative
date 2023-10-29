/* javascript */

/* bundesliga */
    var bundesligaRed = ["FC Augsburg", "Bayern München", "Eintracht Frankfurt", "1. FC Heidenheim", "FC Köln", "RB Leipzig", "Bayer Leverkusen", "Mainz 05", "VfB Stuttgart", "1. FC Union Berlin"]
    var bundesligaOrange = ["1. FC Union Berlin"]
    var bundesligaYellow = ["Borussia Dortmund", "Bayer Leverkusen", "VfB Stuttgart", "1. FC Union Berlin"]
    var bundesligaGreen = ["FC Augsburg", "Werder Bremen", "Wolfsburg"]
    var bundesligaLightBlue = ["Bayern München", "VfL Bochum", "FC Darmstadt 01", "1899 Hoffenheim"]
    var bundesligaDarkBlue = ["1. FC Heidenheim"]
    var bundesligaPurple = ["1. FC Heidenheim"]
    var bundesligaBlack = ["Borussia Dortmund", "SC Freiburg", "FC Köln", "RB Leipzig", "Borussia Mönchengladbach"]
    var bundesligaWhite = ["FC Augsburg", "Bayern München", "VfL Bochum", "Werder Bremen", "SV Darmstadt 01", "Eintracht Frankfurt", "SC Freiburg", "1. FC Heidenheim", "1899 Hoffenheim", "FC Köln", "RB Leipzig", "Bayer Leverkusen", "Mainz 05", "Borussia Mönchengladbach", "VfB Stuttgart", "1. Union Berlin", "Wolfsburg"]
    var bundesligaBrown = ["1. FC Union Berlin"]

/* Premier League */
    var premierLeagueRed = ["Arsenal", "AFC Bournmouth", "Brentford", "Crystal Palace", "Nottingham Forest", "Liverpool", "Manchester United", "Sheffield United", "Fulham"]
    var premierLeagueOrange = ["Luton Town"]
    var premierLeagueYellow = ["Arsenal", "Burnley","Manchester United", "West Ham United", "Luton Town", "Manchester City", "Aston Villa"]
    var premierLeagueGreen = ["Liverpool"]
    var premierLeagueLightBlue = ["Brighton and Hove Albion", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Manchester City", "Newcastle United", "Aston Villa", "West Ham United"]
    var premierLeagueDarkBlue = ["Luton Town", "Tottenham Hotspur"]
    var premierLeaguePurple = ["Burnley", "Aston Villa"]
    var premierLeagueBlack = ["AFC Bournmouth", "Fulham", "Newcastle United", "Sheffield United", "Wolverhampton Wanderers"]
    var premierLeagueWhite = ["Arsenal", "AFC Bournmouth", "Brentford", "Brighton and Hove Albion", "Chelsea", "Crystal Palace", "Everton", "Nottingham Forest", "Fulham", "Liverpool", "Manchester City", "Newcastle United", "Sheffield United", "Tottenham Hotspur"]
    var premierLeagueBrown = ["West Ham United"]

    document.getElementById("bundesliga-button").addEventListener("click", function() {
        document.getElementById("selected-league").value = "bundesliga";
    });

    document.getElementById("premier-league-button").addEventListener("click", function() {
        document.getElementById("selected-league").value = "premier-league";
    });

    document.getElementById("team-generator-form").addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent the form from submitting.

        var selectedLeague = document.getElementById("selected-league").value;
        var selectedColor = document.querySelector('input[name="favcolor"]:checked').value;

        var selectedTeam = getRandomSelectedTeam(selectedLeague, selectedColor);

        document.getElementById("selected-team").innerHTML = "<h3>Selected Team: " + selectedTeam + "</h3>";
    });

    function getRandomSelectedTeam(league, color) {
        var teamArray;
        if (league === "bundesliga") {
            switch (color) {
                case "red":
                    teamArray = bundesligaRed;
                    break;
                case "orange":
                    teamArray = bundesligaOrange;
                    break;
                case "yellow":
                    teamArray = bundesligaYellow;
                    break;
                case "green":
                    teamArray = bundesligaGreen;
                    break;
                case "lightblue":
                    teamArray = bundesligaLightBlue;
                    break;
                case "darkblue":
                    teamArray = bundesligaDarkBlue;
                    break;
                case "purple":
                    teamArray = bundesligaPurple;
                    break;
                case "black":
                    teamArray = bundesligaBlack;
                    break;
                case "white":
                    teamArray = bundesligaWhite;
                    break;
                case "brown":
                    teamArray = bundesligaBrown;
                    break;
            }
        } else if (league === "premier-league") {
            switch (color) {
                case "red":
                    teamArray = premierLeagueRed;
                    break;
                case "orange":
                    teamArray = premierLeagueOrange;
                    break;
                case "yellow":
                    teamArray = premierLeagueYellow;
                    break;
                case "green":
                    teamArray = premierLeagueGreen;
                    break;
                case "lightblue":
                    teamArray = premierLeagueLightBlue;
                    break;
                case "darkblue":
                    teamArray = premierLeagueDarkBlue;
                    break;
                case "purple":
                    teamArray = premierLeaguePurple;
                    break;
                case "black":
                    teamArray = premierLeagueBlack;
                    break;
                case "white":
                    teamArray = premierLeagueWhite;
                    break;
                case "brown":
                    teamArray = premierLeagueBrown;
            }
        }

        if (teamArray && teamArray.length > 0) {
            // Get a random index from the team array
            var randomIndex = Math.floor(Math.random() * teamArray.length);
            return teamArray[randomIndex];
        } 
    }
    document.addEventListener("DOMContentLoaded", function() {
        var buttons = document.querySelectorAll('.image-button');

        buttons.forEach(function(button) {
            button.addEventListener("click", function() {

                var previouslySelected = document.querySelector('.image-button.clicked');
                if (previouslySelected) {
                previouslySelected.classList.remove('clicked');

                };

                button.classList.add('clicked');
            });
        });
    });
    
