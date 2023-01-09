let user = prompt('Write something!');

if (user === "") {
    console.log('Write something!');
}
else if (user === user.toUpperCase()) {
    console.log("ok ok no need to shout!");
}
else if (user === user.toLowerCase()) {
    console.log("can't hear you bud.");
}
else {
    console.log("nice inside voice.");
}