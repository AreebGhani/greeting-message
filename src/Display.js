import React from "react";

let time = new Date();

time = time.getHours();

let greeting = "";


let textcolours = {};

if (time >=5 && time <=11 ) { greeting = "Good Morning"; textcolours.color = "green"; }

else if (time >=12 && time <=17) { greeting = "Good Afternoon"; textcolours.color = "darkorange"; }

else if (time >=18 && time <=20) { greeting = "Good Evening"; textcolours.color = "blue"; }

else { greeting = "Good Night"; textcolours.color = "brown" }

export {greeting}
export {textcolours}