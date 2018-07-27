function myFirstApp(name, age){

	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills(){
		let skills = ["HTML","CSS","Adobe Premiere pro","Adobe After Effects"];

		for (let i = 0; i < skills.length; i++){
			document.write("Я владею " + skills[i] + "<br/>")
		}
	}

	showSkills()

	function chekAge(){
			if (age >= 18){
				alert("Ну ты и старый! У тебя уже пол жизни прошло.")
			} else {
				alert("Добро пожаловать в клуб.")
			}
	}

	chekAge()

	function calcPow(num){
		let value = num * num;
		console.log(value)
	}

	calcPow(45)

}

myFirstApp("Misha", 18);