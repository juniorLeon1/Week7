let user = prompt('Write something!');

if (user === user.toUpperCase()) {
    console.log("ok ok no need to shout! (you are yelling)");
}

else if (user === user.toLowerCase()) {
    console.log("can't hear you bud. (you are whispering)");
}

else {
    console.log("nice inside voice.");
}