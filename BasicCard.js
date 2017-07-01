const inquirer = require("inquirer");
const ClozeCard = require("./ClozeCard.js")


var drawnCard;
var playedCard;
var count = 0;




function createCard() {
    inquirer.prompt([{
                type: "list",
                message: "What type of flashcard do you want to create?",
                choices: ["Basic Card", "Cloze Card"],
                name: "cardType"
            }

        ]).then(function(appData) {

                var cardType = appData.cardType; //the variable cardType will store the choice from the cardType inquirer object.
                console.log(cardType); //prints the card type chosen to the user

                if (cardType === "Basic Card") {
                    inquirer.prompt([{
                            type: "input",
                            message: "Please fill out the front of your card (Your Question).",
                            name: "front"
                        },

                        {
                            type: "input",
                            message: "Please fill out the back of your card (Your Answer).",
                            name: "back"
                        }

                    }])

                });




            //node BasicCard.js