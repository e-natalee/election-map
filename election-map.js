// ------------- POLITICIAN OBJECTS ----------------------------------


// Factory function to create 2 politican objects with name, party color, and a method to add up votes
var makePolitician = function (name, partyColor) {
    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;

    // Method to find the sum of votes from arrays given later -- call this after arrays are known
    politician.addUpTotalVotes = function () {
        this.totalVotes = 0;

        for (i = 0; i < this.electionResults.length; i++) {
            this.totalVotes = this.totalVotes + this.electionResults[i];
        }
        console.log(this.totalVotes);
    };

    return politician;
};
// END^ - factory function to create 2 politician objects 


// Create 2 instances of the politican object with matching properties, different values. 
// Call the makePolitician factory function, add name + a party color in RGB.
var ada = makePolitician("Ada Lovelace", [132, 17, 11]);
var grace = makePolitician("Grace Hopper", [245, 141, 136]);
console.log(ada.partyColor); // Test the results of calling our factory function. 
console.log(grace.partyColor);





// ------------- VOTE ARRAYS & CALCULATIONS ----------------------------------


// Add arrays of votes for the electionResults property of each politician instance.
ada.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 1, 3, 2, 11, 1, 3, 7, 2];
grace.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];


// Update votes with new info for specific states identified by their location in the array (starting at 0)
ada.electionResults[9] = 1;
grace.electionResults[9] = 28;

ada.electionResults[4] = 17;
grace.electionResults[4] = 38;

ada.electionResults[43] = 11;
grace.electionResults[43] = 27;

console.log(ada.electionResults); // Test resulting arrays
console.log(grace.electionResults);


// Call the addUptTotalVotes method for each politician instance
ada.addUpTotalVotes();
grace.addUpTotalVotes();


// Compare the votes, assign politician name -- a property within her instance -- to winner var
// This result will be displayed in the table at the top of our map, announcing who is president
var winner = "?";
if (ada.totalVotes > grace.totalVotes) {
    winner = ada.name;
} else if (ada.totalVotes < grace.totalVotes) {
    winner = grace.name;
} else {
    winner = "Draw!"
}
console.log("hi natee") //test that my JS runs this far
console.log("Our new president is " + winner + "!!!"); //test that my JS is in order, finds the overall winner


// Compare votes per state and set to color of winner or draw
var setStateResults = function (state) {
    theStates[state].winner = null;
    if (ada.electionResults[state] > grace.electionResults[state]) {
        theStates[state].winner = ada;
    } else if (ada.electionResults[state] < grace.electionResults[state]) {
        theStates[state].winner = grace;
    }
    var stateWinner = theStates[state].winner;
    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
    } else {
        theStates[state].rgbColor = [11, 32, 57];
    }





// ------------- POPULATE TABLES ----------------------------------

// Populate the table at top of map with politician names, votes, and winner (president) name
    var countryInfoTable = document.getElementById("countryResults");

    var row = countryInfoTable.children[0].children[0];
    row.children[0].innerText = ada.name;
    row.children[1].innerText = ada.totalVotes;
    row.children[2].innerText = grace.name;
    row.children[3].innerText = grace.totalVotes;
    row.children[5].innerText = winner;

    
// Populate second table with state election results
    var stateInfoTable = document.getElementById("stateResults");
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var candidate1Name = body.children[0].children[0];
    var candidate2Name = body.children[1].children[0];
    var candidate1Results = body.children[0].children[1];
    var candidate2Results = body.children[1].children[1];
    var winnersName = body.children[2].children[1];
    stateName.innerText = theStates[state].nameFull;

    abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
    candidate1Name.innerText = ada.name;
    candidate2Name.innerText = grace.name;
    candidate1Results.innerText = ada.electionResults[state];
    candidate2Results.innerText = grace.electionResults[state];

    if (theStates[state].winner === null) {
        winnersName.innerText = "DRAW";
    } else {
        winnersName.innerText = theStates[state].winner.name;

    }


}









