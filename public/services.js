app.service('survey', function() {
  this.surveyQuestions = [
    question1 = {
      "question": "You are given a non-magical task to complete in any way you see fit, what do you do?",
      "questionId": 1,
      answers: [
        {
          "option": "Ask your friends how they would do it",
          "house": "slytherin",
          "value": 1
        },
        {
          "option": "Start working immediately and see where it takes you",
          "house": "gryffindor",
          "value": 1
        },
        {
          "option": "Only begin working once you have a plan for how to do it",
          "house": "hufflepuff",
          "value": 1
        },
        {
          "option": "Think about a unique way to solve the problem",
          "house": "ravenclaw",
          "value": 1
        }
      ]
    },
    question2 = {
      "question": "Professor Snape allows you to create any potion you like, what do you make?",
      "questionId": 2,
      answers: [
        {
          "option": "Felix Felicis",
          "house": "ravenclaw",
          "value": 1
        },
        {
          "option": "Polyjuice Potion",
          "house": "gryffindor",
          "value": 1
        },
        {
          "option": "Veritaserum",
          "house": "slytherin",
          "value": 1
        },
        {
          "option": "Blood-replenishing Potion",
          "house": "hufflepuff",
          "value": 1
        }
      ]
    },
    question3 = {
      "question": "In your opinion, who is the bravest wizard?",
      "questionId": 3,
      answers: [
        {
          "option": "Mykew Gregorovitch",
          "house": "slytherin",
          "value": 1
        },
        {
          "option": "Albus Dumbledore",
          "house": "ravenclaw",
          "value": 1
        },
        {
          "option": "Newt Scamander",
          "house": "hufflepuff",
          "value": 1
        },
        {
          "option": "Severus Snape",
          "house": "gryffindor",
          "value": 1
        }
      ]
    },
    question4 = {
      "question": "Who is your favorite witch?",
      "questionId": 4,
      answers: [
        {
          "option": "Minerva McGonagall",
          "house": "ravenclaw",
          "value": 1
        },
        {
          "option": "Nymphadora Tonks",
          "house": "hufflepuff",
          "value": 1
        },
        {
          "option": "Bellatrix Lestrange",
          "house": "slytherin",
          "value": 1
        },
        {
          "option": "Molly Weasley",
          "house": "gryffindor",
          "value": 1
        }
      ]
    },
    question5 = {
      "question": "You can spend an afternoon anywhere you want in diagon alley, where do you go?",
      "questionId": 5,
      answers: [
        {
          "option": "Flourish and Blotts",
          "house": "ravenclaw",
          "value": 1
        },
        {
          "option": "2nd Hand Brooms",
          "house": "hufflepuff",
          "value": 1
        },
        {
          "option": "Gringotts Wizarding Bank",
          "house": "slytherin",
          "value": 1
        },
        {
          "option": "The Leaky Cauldron",
          "house": "gryffindor",
          "value": 1
        }
      ]
    },
    question6 = {
      "question": "What is your favorite form of magical travel?",
      "questionId": 6,
      answers: [
        {
          "option": "Floo Powder",
          "house": "ravenclaw",
          "value": 1
        },
        {
          "option": "Apparition",
          "house": "slytherin",
          "value": 1
        },
        {
          "option": "Portkey",
          "house": "hufflepuff",
          "value": 1
        },
        {
          "option": "Broomstick",
          "house": "gryffindor",
          "value": 1
        }
      ]
    },
    question7 = {
      "question": "Someone offers you 700 galleons to open a shop in Hogsmeade, what do you do?",
      "questionId": 7,
      answers: [
        {
          "option": "Rent a small space to give personal charms lessons, and donate the rest",
          "house": "hufflepuff",
          "value": 1
        },
        {
          "option": "Put a down payment on a good-sized shop to compete with Quality Quidditch Supplies",
          "house": "gryffindor",
          "value": 1
        },
        {
          "option": "Invest all of it in Ollivanders Wand Shop in trade for an apprenticeship under the master wandmaker",
          "house": "ravenclaw",
          "value": 1
        },
        {
          "option": "Open a meager book shop, but use most of the money as insurance to protect yourself from bankruptcy",
          "house": "slytherin",
          "value": 1
        }
      ]
    },
    question8 = {
      "question": "When the Tri-Wizard tournament is nearing, what do you find yourself thinking?",
      "questionId": 8,
      answers: [
        {
          "option": "'I could do better than most of these wizards'",
          "house": "slytherin",
          "value": 1
        },
        {
          "option": "'I’m proud to have a fellow Housemate out there competing'",
          "house": "gryffindor",
          "value": 1
        },
        {
          "option": "'I wish there was a better way to determine the best wizards'",
          "house": "ravenclaw",
          "value": 1
        },
        {
          "option": "'I hope no one gets hurt too badly this year'",
          "house": "hufflepuff",
          "value": 1
        }
      ]
    },
    question9 = {
      "question": "One of your friends has been poisoned from an unknown source, what action do you take?",
      "questionId": 9,
      answers: [
        {
          "option": "Think of something you can do to help, but also feel incredibly relieved that it wasn’t you",
          "house": "slytherin",
          "value": 1
        },
        {
          "option": "Racking your brain, your feel fairly confident that a Bezoar will fix the situation",
          "house": "ravenclaw",
          "value": 1
        },
        {
          "option": "Shout for help and rush to comfort your friend, telling them that it will be ok",
          "house": "gryffindor",
          "value": 1
        },
        {
          "option": "Call for help, and find yourself wishing you could trade places with them",
          "house": "hufflepuff",
          "value": 1
        }
      ]
    },
    question10 = {
      "question": "There is a horrible Doxy infestation in the divination classroom thanks to all the dusty cushions, what do you do?",
      "questionId": 10,
      answers: [
        {
          "option": "Sneak out of the cleaning duties to practice your Quidditch moves",
          "house": "slytherin",
          "value": 1
        },
        {
          "option": "Whip up some doxicide to take care of them real quick",
          "house": "ravenclaw",
          "value": 1
        },
        {
          "option": "Take a moment to explore more humane routes of Doxy removal",
          "house": "hufflepuff",
          "value": 1
        },
        {
          "option": "Make a game out of throwing Doxys at your friends, getting minimal real work done",
          "house": "gryffindor",
          "value": 1
        }
      ]
    }
  ]

  // ===================================================================
  //This empty array collects all the values from the sortingHat object so we can find the greatest one.
  var arr = [];
  this.getSorted = function() {
    //This iterates over our object so that we can get our values to push to "arr"
    for (var key in this.sortingHat) {
      console.log(key);
      if (this.sortingHat.hasOwnProperty(key)) {
        arr.push(this.sortingHat[key])
      }
      //This tells us the INDEX of the largest number in the array, that way we can access the corresponding house name.
      arr.splice(4, 3)
      var questionIndex = arr.indexOf(Math.max(...arr));
    }
    //The last element in the array is an empty string, so we just get that out to clean it up.
    // console.log(arr);
    // console.log(questionIndex);

    //Here we just match up what the dominant house name should be in reference to the index.
    if (questionIndex === 0) {
      this.sortingHat.dominantHouse = 'gryffindor'
    }
    if (questionIndex === 1) {
      this.sortingHat.dominantHouse = 'hufflepuff'
    }
    if (questionIndex === 2) {
      this.sortingHat.dominantHouse = 'slytherin'
    }
    if (questionIndex === 3) {
      this.sortingHat.dominantHouse = 'ravenclaw'
    }
    console.log(this.sortingHat);


    function post(object) {
    var request = $http({
    method: 'POST',
    url: 'http://localhost:5000/api/surveys',
    data: object,
    headers: {
        'permission': '/*/',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, PUT, DELETE',
        }
      })
      console.log("kjdfhglkjahergiluaherliguhaelirugh");
    }




  }
// ===================================================================




// ===================================================================
  this.answerSelect = function(answer) {
    if (answer.house === 'gryffindor') {
      this.sortingHat.gryffindor += 1;
    }
    if (answer.house === 'slytherin') {
      this.sortingHat.slytherin += 1;
    }
    if (answer.house === 'ravenclaw') {
      this.sortingHat.ravenclaw += 1;
    }
    if (answer.house === 'hufflepuff') {
      this.sortingHat.hufflepuff += 1;
    }
    // console.log(this.sortingHat);
  }
  this.sortingHat = {};
  this.sortingHat.gryffindor = 0;
  this.sortingHat.hufflepuff = 0;
  this.sortingHat.slytherin = 0;
  this.sortingHat.ravenclaw = 0;
  this.sortingHat.dominantHouse = '';
  this.sortingHat.user_name = '';
  this.sortingHat.zfbId = '';
  this.survey = this.surveyQuestions;
  // ===================================================================






})
