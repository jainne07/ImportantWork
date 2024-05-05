self.postMessage(["foo", "bar", "baz"]); 
// Listen for messages from the main thread 
// self.addEventListener("message", function(event) { 
// // `event.data` contains the value or object sent from main 
// console.log("Message from parent:", event.data); // "Sample message" 
// }); 
self.onmessage = function(event) { 
console.log("Message from parent:", event.data); // "Sample message" 
} 
