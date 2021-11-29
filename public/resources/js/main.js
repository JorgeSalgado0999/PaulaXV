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

const buttonSend = document.getElementById("button-send");

buttonSend.addEventListener("click", (e) => {
	var nombre = document.getElementById("nombre-id");
	var confirma = document.getElementById("confirma-id");

	var nombre_content = nombre.value;
	var confirma_content = confirma.checked ? "si" : "no";

	if (nombre_content != "") {
		db.collection("users")
			.add({
				nombre: nombre_content,
				asiste: confirma_content,
			})
			.then((docRef) => {
				console.log("Document written with ID: ", docRef.id);
				Toast.show("agregado exitosamente", "success");
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
				Toast.show("ha ocurrido un error", "error");
			});
	} else {
		Toast.show("Escribe un nombre primero", "error");
	}

	nombre.value = "";
});

const Toast = {
	init() {
		this.hideTimeout = null;

		this.el = document.createElement("div");
		this.el.className = "toast";
		document.body.appendChild(this.el);
	},

	show(message, state) {
		clearTimeout(this.hideTimeout);

		this.el.textContent = message;
		this.el.className = "toast toast--visible";

		if (state) {
			this.el.classList.add(`toast--${state}`);
		}

		this.hideTimeout = setTimeout(() => {
			this.el.classList.remove("toast--visible");
		}, 3000);
	},
};

document.addEventListener("DOMContentLoaded", () => Toast.init());
