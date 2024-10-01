/*
Title: Quote Generator





Important Program Elements Used: 
Array 
For 
HTML
CSS
HTML DOM
eventListener
/\d/





Summary: This programs asks for how many quotes a person wants and then choses between quotes to give to the person
*/





//Start of functions





//Start of function for dropdown
/*
Summary: To hold the dropdown menu open after you use it
@parms: num, recieved from click event listener
@return: nothing
*/
function dropdown(num) {
  let dropdownStatus;


  //Start of if statement checking if dropdown is opened or closed
  if (num == 0) {
    document.getElementById("dropdown-content").style.display == "none" ? dropdownStatus = "block" : dropdownStatus = "none";//Ternary checking if dropdown is opened or closed
    
  } else if (num == 1) {
    dropdownStatus = "block";
    
  } else {
    dropdownStatus = "none";
  }//End of if statement checking if dropdown is opened or closed

  
  document.getElementById("dropdown-content").style.display = dropdownStatus;//Opening or closing dropdown depending on result of function
}//End of function for dropdown





//Start of function for getting how many quotes the person wants
/*
Summary: This is the user input for how many qutoes a user wants and then runs the next function
@parms: nothing
@return: itself, if the user does not input a logical value
*/
function getValue(/*No parameters*/){
  let input;
  let result;
  

  input = prompt("How many quotes do you want (Max 3)");
  input = input.toLowerCase();
  

  //Start of switch statement for checking users input
  switch(input){
    case "one":
    case "on":
    case "o":
    case "1":
      console.log("You chose to see one quote")
      result = 1;
      randomQuote(result);
      break;

    case "two":
    case "tw":
    case "t":
    case "2":
      console.log("You chose to see two quotes")
      result = 2;
      randomQuote(result);
      break;

    case "three":
    case "thre":
    case "thr":
    case "th":
    case "t":
    case "3":
      console.log("You chose to see three quotes")
      result = 3;
      randomQuote(result);
      break;

    default:
      alert("Please select a logical value");
      return getValue();
      break;
  };//End of switch statement for checking users input
}//End of function for getting how many quotes the person wants





//Start of function for choosing quotes
/*
Summary: This choses quotes and ensures that the same quote does not appear both times
@parms: ammount, recieved from result of getValue function
@return: nothing
*/ 
function randomQuote(ammount) {
  let random;
  let usedValues = [];


  //Start of for loop to get random numbers
  for (let x = 0; x < ammount; x++) {
    random = Math.floor(Math.random() * (quotes.length));


    //Start of for loop to check if number(s) is/are used.
    for (let y = 0; y < x; y++) {


      //Start of if statement checking if number has been used.
      if (random == usedValues[y]) {
        random = Math.floor(Math.random() * (quotes.length));
        y = -1;
        continue;
      }//End of if statement checking if number has been used.
    }//End of for loop to check if number(s) is/are used.

    
    usedValues[x] = random;
  }//End of for loop to get random numbers

  
  printQuotes(usedValues);
}//End of function for choosing quotes





//Start of function to print quotes
/*
Summary: This prints out the quotes and it allows the dropdown buttons to select how many quotes the user wants
@parms: values, vecieved as an array which is a result of the randomQuote function
@return: nothing
*/
function printQuotes(values) {

  
  document.getElementById("quote-print-1").innerHTML = ``;//Re-setting HTML to empty tags
  document.getElementById("quote-print-2").innerHTML = ``;//Re-setting HTML to empty tags
  document.getElementById("quote-print-3").innerHTML = ``;//Re-setting HTML to empty tags


  //Start of for loop to print quotes
  for (let x = 0; x < values.length; x++) {
    console.log("Quote " + (x + 1) + ": " + quotes[values[x]]);//Printing each quote in console


    //Start of if statement checking which quotes have/have not been printed
    if (x == 0) {
      document.getElementById("quote-print-1").innerHTML = `1. ${quotes[values[x]]}`;
    
    } else if (x == 1) {
      document.getElementById("quote-print-2").innerHTML = `2. ${quotes[values[x]]}`;
  
    } else if (x == 2) {
      document.getElementById("quote-print-3").innerHTML = `3. ${quotes[values[x]]}`;
 
    } else {
      console.log("An error has occured, please try again.");
    }//End of if statement checking which quotes have/have not been printed
  }//End of for loop to print quotes
}//End of function to print quotes





//End of functions





//Beginning of program





//Start of variable declaration
let person; //Variable to hold mane of user
const quotes = [
  `"Human strength lies in the ability to change yourself." - One punch man`,
  `"Peanuts" - Spy x Family`,
  `Papa is a spy. Spychiatrist." - Spy x Family`,
  `"Waku waku!" - Spy x Family`,
  `"Heh" - Spy x Family`,
  `"TATAKAE" - Attack on Titan`,
  `"The One Piece is real" - One piece`,
  `"What's your name?" - Your Name`,
  `"Shinzo wo Sasageyo" - Attack on Titan`,
  `"Kon" - Chainsaw Man`,
  `"Fushiguro is getting hit on" - Jujutsu Kaisen`,
  `"Are you the strongest because you’re Satoru Gojo? Or are you Satoru Gojo because you’re the strongest?" - Jujutsu Kaisen`,
  `"I don't know which option you should choose. I could never advise you on that... No matter what kind of wisdom dictates you the option you pick, no one will be able to tell if it's right or wrong until you arrive to some sort of outcome from your choice." - Attack on Titan`,
  `O kawaii koto - Kaguya-sama: Love is War`,
  `“Don’t ever give up. Even if it’s painful, even if it’s agonizing, don’t try to take the easy way out.” - Demon Slayer`,
  `"When I had nothing and no one, I always had pain." - Naruto Shippuden`,
  `“If, one day, you make it to our final destination, would you please leave flowers?” - 86 Eighty Six`,
  `"Ayy! Matching horns!” Regis gave a throaty chuckle. “We can be the horny trio." - The Begining After the End`,
  `"Racism truly was fueled by ignorance as much as it was by rage or indignance." - The Begining After the End`,
  `"Like I said before, it doesn't matter who you are" - Solo Leveling`,
  `"Arise" - Solo Leveling`,
  `""Not wishing for anything is the the same as not wanting to be alive, I'm the only one of us who isn't truly alive. I'm just the Reaper." - 86 Eighty Six`,
  `"There's no distance. I've never been this close to someone before. In my life. Boundaries don't apply to us, and I'm used to be terrified of that. It shook me to my core, Hori. But you know, because of you, I felt a whirlwind of different emotions I wasn't even aware I could feel." - Horimiya`,
  `"Talent is the ability to prove one's strength. Gambling their future, believing in themselves and their dreams, and proving to the world their strength is real." - Bluelock`,
  `"Drinking lets me forget everything. Everything? You know, like fears about the future. Pension problems! Rural depopulation! The poverty gap! I call it the Happiness Spiral - Bocchi the Rock"`,
  `"Mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu-mu" - Bocchi the Rock`,
  `"I have nothing to do except thinking about the Nobel Prize. As long as my invention wins the Nobel Prize, human will treat me like a god. Then I'll use the prestige to be the Prime Minister. I want to see humans struggling... The first thing I'll do is adjust the consumption tax to 100%" - Chainsaw Man`,
  `"I'm gonna take you there myself, fly to the moon. That's a promise" - Cyberpunk Edgerunners`,
  `"All right, David. Let's go. To the top, then." - Cyberpunk Edgerunnners`,
  `"I've never wanted any of this. You never had to save me, all I've ever wanted is for you to live" - Cyberpunk Edgerunners`,
  `"Sorry, wish we could go to the moon together" - Cyberpunk Edgerunnners`,
  
]; //array holding all of the quotes as string values
//End of variable declaration





//Start of main
getName(); //call function to get the users name


document.body.addEventListener("click", dropdown(2)); //runs dropdown function with value of 2 if user clicks away from dropdown
//End of main





//Start of function prompting the user for their name
function getName() {
  person = prompt("Please enter your name", "Guest"); //Getting users name through prompt


  //Start of if statement checking if users name is logical
  if (((typeof person) == "string") && (person != "") && (/\d/.test(person) == false)) {
    document.getElementById("name").innerHTML = "Welcome " + person.toLocaleLowerCase() + "! How are you today?"; //Welcome
    document.getElementById("thank-you").innerHTML = `Thank you ${person}, for visiting our website. please come again for more awesome quotes!`; //Thank you
 
  } else {
    alert("Please select a logical value. (No numbers, do not leave empty)")
    getName();
  }//End of if statement checking if users name is logical
}//End of function prompting the user for their name






console.log(" #           #           ##                      #          ");//title
console.log(" # # # # ### ### ###     #   ### ##  ### ###  ## ### ### ###");//title
console.log("# # # # # #  #  ##      # # ##  # # ##  #   # #  #  # # #   ")//title
console.log(" ## ### ###  ## ###     # # ### # # ### #   ###  ## ### #   ");//title
console.log("  #                      ##                                 ");//title

console.log("Welcome to our website. Hit the button to give you some quotes."); //Welcome
console.log(`You entered ${person}`); //Re-iterating user input
console.log("Hello " + person.toLocaleLowerCase() + "! How are you today?"); //Greeting user
console.log("Hey you, do you like quotes? Here you can hit a button and get free quotes!"); //Intro
console.log("To use this website, hit the button and it will prompt you with how many quotes you want. Type in how many qutoes you want and see the quotes! We have ensured that you will never see two of the same quote at the same time."); //Explaintion
console.log(`Thank you, ${person} for visiting our website, please come again to see new quotes!`); //Thank you





//End of program





/*
Notes:





Test code:

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
*/