
function randomTrumpTweet() {
    let subject = ['Bernie Sanders', 'The Undertaker', 'Obama', 'Hilary', 'Tucker Carlson', 'Ted Cruz', 'Mitt Romney', 'Ronald McDonald', 'Chuck E Cheese', 'David Dobrik', 'Jacob Kelly']
    let action = ['receiving the lowest viewing figures since records began.', 'begging people for more funding.', 'unable to pleasure their partner in bed.', 'calling my friends asking for a meeting with me.', 'losing their house in Florida.', 'eating too much mac and cheese.', 'unable to walk in a straight line.']
    let exclamation = ['Sad!', 'Loser!', 'What a joke!', 'Pathetic!', 'Lame!', 'I never liked them!', 'I called it!']
    let chosenSubject = Math.floor(Math.random()*subject.length)
    let chosenAction = Math.floor(Math.random()*action.length)
    let chosenExclamation = Math.floor(Math.random()*exclamation.length)
    let randomMessage = `${subject[chosenSubject]} is ${action[chosenAction]} ${exclamation[chosenExclamation]}`
    console.log(randomMessage);
    return randomMessage;
}

randomTrumpTweet();
