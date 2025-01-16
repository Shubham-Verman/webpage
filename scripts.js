// Add 'scrolled' class to navbar on scroll
window.onscroll = function() {
    let navbar = document.querySelector('header');
    if (window.scrollY > 50) {  // Change 50 to any scroll threshold
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Array containing your 150 quotes
const quotes = [
    "Life is just a generation of kids disciplining other kids, hoping the next group does a little better.",
    "Consistency beats intensity.",
    "Don’t let little things like qualifications stop you.",
    "Beginnings are always hard.",
    "Nothing is more expensive than a start.",
    "Peace can never be kept by force.",
    "As with a tale, so is life—not how long it is, but how good it is, is what matters.",
    "The lust for comfort kills the passion of the soul, then grins at its funeral. ~Khalil Gibran",
    "First deserve, then desire.",
    "It’s ordinary for ordinary people to do extraordinary things.",
    "Learn the rules like a pro so you can break them like an artist.",
    "Confidence grows over time.",
    "The secret of change is to focus all your energy not on fighting the old, but on building the new. ~Socrates",
    "Hard work beats talent when talent doesn’t work hard.",
    "Those who dare to imagine the impossible are the ones who break all human limitations.",
    "The journey to greatness begins when your desire for comfort is overpowered by your desire to connect and contribute.",
    "We’re all self-made, but only the successful admit it.",
    "A person with a strong enough 'why' can survive any 'how.'",
    "The greater the artist, the greater the doubts. Perfect confidence is granted only to the less talented as a consolation prize. ~Robert Hughes",
    "To learn who rules over you, find out who you cannot criticize. ~Voltaire",
    "Educating the mind without educating the heart is no education at all. ~Aristotle",
    "The top of one mountain is the bottom of another.",
    "When the power of love overcomes the love for power, peace will prevail on earth.",
    "Man is arrogant enough to stand on a grain of sand in the void of infinity and proclaim himself the center of all things.",
    "Exceptional people are like boats in the vast sea of mediocrity.",
    "Be a monster, then learn to control it.",
    "You must leave yourself to truly find yourself.",
    "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less. ~Marie Curie",
    "It’s better to remove your own weaknesses than allow others to exploit them.",
    "Keep yourself so busy improving that you have no time to criticize others.",
    "Master the art of struggling.",
    "The way to get smarter is by asking 'dumb' questions.",
    "Heroism emerges in the darkest moments.",
    "Even a fool with courage can become a master.",
    "Life rarely improves without an increase in responsibility.",
    "You are not a unique snowflake—you must work to achieve something meaningful.",
    "If you want to fly, you must give up what weighs you down.",
    "The best view comes after the hardest climb.",
    "Those who are crazy enough to think they can change the world are the ones who do.",
    "If you want something you’ve never had, you must do something you’ve never done.",
    "Life begins at the end of your comfort zone.",
    "Two things define you: your patience when you have nothing, and your attitude when you have everything.",
 
    "If people are not laughing at your goals, your goals are not big enough.",

    "The master has failed more times than the beginner has even tried.",
    "I hated every minute of training, but I said, 'Don’t quit. Suffer now and live the rest of your life as a champion.' ~Muhammad Ali",
    "What seems so hard now will one day be your warm-up.",
    "I ask not for a lighter burden, but for broader shoulders.",
    "Chop your own wood, and it will warm you twice. ~Henry Ford",
    "Chasing your dreams can take you far away from where you belong and from who you once were.",
    "If the world were blind, how many people could you impress?",
    "Don’t be afraid to give up the good to go for the great. ~John D. Rockefeller",
    "Take a deep breath and remember who you are.",
    "You’re not a being that is aware; you are awareness itself.",
    "It doesn’t matter how slowly you go as long as you do not stop.",
    "Don’t downgrade your dream to fit your reality. Upgrade your conviction to match your destiny.",
    "Life begins at the end of your comfort zone.",
    "Tough times never last, but tough people do. ~Robert H. Schuller",
    "Don’t wait for the right opportunity—create it. ~George Bernard Shaw",
    "To be the best, you must handle the worst.",
    "Someday, everything will make sense. So laugh at the confusion, smile through the tears, and trust that everything happens for a reason.",
    "Success doesn’t come from what you do occasionally; it comes from what you do consistently.",
    "Work until you no longer have to introduce yourself.",
    "When you feel like quitting, remember why you started.",
    "If you’re tired, learn to rest, not to quit.",
    "You don’t learn to walk by following rules; you learn by doing and falling. ~Richard Branson",
    "Work instead of complain, create instead of criticize.",
    "Get up earlier, stay longer, work harder, fail, fail again—but never quit.",
    "Success doesn’t just find you; you have to go out and get it.",
    "Don’t be afraid to start over; this time, you’re not starting from scratch—you’re starting from experience.",
    "We see what we aim at.",
    "Be disciplined, because you can’t rely on motivation all the time.",
   
    "When you’re dead, you won’t know you’re dead—it’s difficult for others. The same goes for being stupid.",
    "To be the best, you need to win every day.",
    "The hardest exam is the one you want to pass the most.",
    "People overestimate what they can achieve in a short time but underestimate what they can achieve in the long term.",
    "Rest at the end, not in the middle.",
    "If it’s your good day, make it great. If it’s your bad day, minimize your losses.",
    "It’s not about the destination; it’s about the journey.",
    "Life is simple—solve the problems in front of you.",
    "If you get everything you want, what will you desire? Hunger is necessary in life.",
    "No one will solve your issues; you must take responsibility yourself.",
    "Never make permanent decisions based on temporary feelings.",

    "Don’t react but respond.",
    "Giving up isn’t in my blood, sir. It’s just not in my blood.",
    "Today's pain is not breaking you but building you to be a legend.",

    "Speak confidently as if you’re right but listen carefully as if you’re wrong.",
    "A bird isn’t afraid of the branch breaking because its trust lies in its wings, not the branch.",
    "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
    "Face what must be faced sooner rather than later.",
    "Trying to dim another man’s candle won’t make yours brighter.",
    "Observe without judgment; seek perspective instead of answers.",
    "Sometimes we must do wrong things for the right reasons.",
    "You cannot trade your life for something meaningless. Find a purpose greater than yourself.",
    "Comparison is the thief of joy.",
    "Always be ready to say goodbye to anything.",
    "At the top of the mountain, why do we always look down?",
    "Remaining calm in every situation is the highest achievement of self-mastery.",
    "Anything can be worked on if you have the willingness to work.",

    "God is the captain of the boat, guiding its direction, but you are the crew who must row it forward.",

    "A blind leading a blind does not help any.",
    "Pain is the part of life but suffering is not.",
    "The best a man can do is keep himself busy so that his intrusive thoughts do not win.",
    "People usually think education is something you can finish.",
    "Beautiful things do not ask for attention.",
    "You cannot wish for both a strong character and an easy life. The price of one is the other.",

   "Everyone is running to chase peace, but it’s only when they stop that they truly find it.",


   "Some people don’t have people because they are the people that people have.",

    "Subha sirf 3 log jaagte h maa, mehnat aur majboori.",
    "The work everyone sees happens because of the work no one sees.",
    "You can't create legends without tears and pain.",
    "Some people are in your life for a reason, some for a season, and some for a lifetime.",
    
    "Know if you’re doing it because you want it or because you want to show others you have it.",
    "Nothing matches the foolishness of a man’s first love.",

    "A person lacking purpose often distracts himself with pleasures.",
    "Look back and thank God. Look forward and trust God.",
    "Beautiful things do not ask for attention.",
    "Action precedes motivation.",

    "Learn to be simple; it’s better than striving for greatness.",
    "The brightest stars burn the fastest.",
    "You can’t cross the sea by standing and staring at the water.",
    "It’s not that the world exists, and you’re in it. It’s that you exist, and the world is in you.",
    "Talent is just pursued interest. Anything you’re willing to practice, you can do.",
    "Passion drives us through life’s toughest challenges."
    // Add more of your quotes...
]

// Function to get a random quote
function getRandomQuote() {
    return `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;  // Wrap quote in double quotes
}

// Display the random quote in the footer
document.getElementById("quote-container").innerText = getRandomQuote();
