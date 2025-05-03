var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

var finalName = "";
const chatMessages = [
    "Oh Noo!!", "You lost!", "Try again next time!", "Well played!", 
    "That was close!", "Unbelievable!", "Keep going!", "Nice move!", 
    "You're getting better!", "Whoa! What just happened?", "Amazing shot!", 
    "Better luck next time!", "That was intense!", "Haha, good one!", 
    "You're on fire!", "Can't believe that!", "Oops!", "GG!", 
    "Not bad at all!", "That was crazy!", "You almost had it!", 
    "One more round?", "Let’s gooo!", "Epic fail!", "What a clutch moment!", 
    "Try harder next time!", "You’re improving!", "What a match!", 
    "Oops, misclick?", "Insane!", "Wow, impressive!", "Game over!", 
    "Next time, you got this!", "That was unexpected!", "Close call!", 
    "Nice try!", "Keep grinding!", "Practice makes perfect!"
];

// Function to generate a random chat message
export const generateRandomMessage = () => {
    return chatMessages[Math.floor(Math.random() * chatMessages.length)];
};

export function generate() {
   var finalName = nameList[Math.floor( Math.random() * nameList.length )];
//    document.getElementById("uNameInput").value = finalName;
return finalName;
};