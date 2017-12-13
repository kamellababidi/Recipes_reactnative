const Firebase = require('firebase')
const config = {
	apiKey: "AIzaSyDUQTlyXNpG0UR3zS3Zvj00wVUMJd7cCSE",
	authDomain: "recipes-bc94d.firebase.com",
	databaseURL: "https://recipes-bc94d.firebaseio.com/"
}
export const firebase = Firebase.initializeApp(config);