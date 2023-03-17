var config = {
apiKey: "YOUR_API_KEY",
authDomain: "Your_AuthDomain",
databaseURL: "YOUR_DATABAE_URL",
projectId: "score-6b83c",
storageBucket: "YOUR_STORAGE_BUCKET",
messagingSenderId: "YOUR_SENDER_ID",
appId: "YOUR_APP_ID"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('score');

$('#contactForm').submit(function(e) {
e.preventDefault();
var newMessageRef = messagesRef.push();
newMessageRef.set({
user: $('.nick').val(),
point: $('.points').val()
});
$('.success-message').show();
$('#contactForm')[0].reset();
});