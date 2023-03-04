function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(s) {
    switch (true) {
        case s === s.toLowerCase():
            return "I can't hear you!";
        case s === s.toUpperCase():
            return "YES INDEED!";   
        case s === "Let's have dinner together!":
            return "I would love to!";
    }
}