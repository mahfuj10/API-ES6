function welcomeMessage(name, greetMorning) {
    greetMorning(name);
}

function greetMorning(name) {
    console.log('Good morning', name);
}

 welcomeMessage('Tom Hanks', greetMorning);

