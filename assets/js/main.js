/* javascript */

/* bundesliga */
    var bundesligaRed = ["Augsburg", "Bayern Munich", "Frankfurt", "Heidenheim", "Koln", "RB Leipzig", "Bayern Leverkusen", "Mainz", "Stuttgart", "Union Berlin"]
    var bundesligaOrange = ["Union Berlin"]
    var bundesligaYellow = ["Dortmund", "Bayern Leverkusen", "Stuttgart", "Union Berlin"]
    var bundesligaGreen = ["Augsburg", "Werder Bremen", "Wolfsburg"]
    var bundesligaLightBlue = ["Bayern Munich", "Bochum", "Darmstadt", "Hoffenheim"]
    var bundesligaDarkBlue = ["Heidenheim"]
    var bundesligaPurple = ["Heidenheim"]
    var bundesligaBlack = ["Dortmund", "Freiburg", "Koln", "RB Leipzig"]
    var bundesligaWhite = ["Augsburg", "Bayern Munich", "Bochum", "Werder Bremen", "Darmstadt", "Frankfurt", "Freiburg", "Heidenheim", "Hoffenheim", "Koln", "RB Leipzig", "Leverkusen", "Mainz", "Borussia Monchengladbach", "Stuttgart", "Union Berlin", "Wolfsburg"]
    var bundesligaBrown = ["Union Berlin"]

/* Premier League */
    var premierLeagueRed = ["Arsenal", "Bournmouth", "Brentford", "Crystal Palace", "Nottingham Forest", "Liverpool", "Manchester United", "Sheffield United", "Fulham"]
    var premierLeagueOrange = ["Luton Town"]
    var premierLeagueYellow = ["Arsenal", "Burnley","Manchester United", "West Ham", "Luton Town", "Manchester City", "Aston Villa"]
    var premierLeagueGreen = ["Liverpool"]
    var premierLeagueLightBlue = ["Brighton", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Manchester City", "Newcastle", "Aston Villa", "West Ham"]
    var premierLeagueDarkBlue = ["Luton Town", "Tottenham"]
    var premierLeaguePurple = ["Burnley", "Aston Villa"]
    var premierLeagueBlack = ["Bournmouth", "Fulham", "Newcastle", "Sheffield United", "Wolves"]
    var premierLeagueWhite = ["Arsenal", "Bournmouth", "Brentford", "Brighton", "Chelsea", "Crystal Palace", "Everton", "Nottingham Forest", "Fulham", "Liverpool", "Manchester City", "Newcastle", "Sheffield United", "Tottenham"]
    var premierLeagueBrown = ["West Ham"]

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