const firebaseConfig = {
	apiKey: "AIzaSyC4B3cZNTDYmp3GsnejQBGaEu1ErS759rg",
	authDomain: "paulaxv-c90aa.firebaseapp.com",
	databaseURL: "https://paulaxv-c90aa-default-rtdb.firebaseio.com",
	projectId: "paulaxv-c90aa",
	storageBucket: "paulaxv-c90aa.appspot.com",
	messagingSenderId: "699365362001",
	appId: "1:699365362001:web:7f45c115909e2cdac5ab70",
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var table = document.getElementById("table-users");

db.collection("users")
	.get()
	.then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			table.innerHTML += `
				<tr>
					<td>${doc.data().nombre}</td>
					<td>${doc.data().asiste}</td>
				</tr>
			`;
		});
	});
