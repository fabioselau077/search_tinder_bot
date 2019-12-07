function pause(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}


(function abrirPerfil(){
		var info = document.getElementsByClassName('recCard__info')[0];
		info.click();
		pause(1000);
		tinder();
}());

function checkTinder() {
	var base = "https://tinder.com/";
	return window.location.href.startsWith(base + "app/recs") || window.location.href.startsWith(base + "app/matches");
}

function tinder(){
		var nomePessoa = "Paulina";
		var idadePessoa = 22;
		console.log(nomePessoa);
		console.log(idadePessoa);
			var nome = document.getElementsByClassName('Ov(h) Ws(nw) Ell')[0].textContent;
			var idade = document.getElementsByClassName('Whs(nw) Fz($l)')[0].textContent;
			console.log(nome);
			console.log(idade);
			pause(1000);
			if(nome != nomePessoa && idade != idadePessoa){
				var infoClassName = 'recCard__info';
				var dislike = document.getElementsByClassName("recsGamepad__button")[0];
				return dislike.click();
				openAgainProfile();
			}else{
				return console.log("OOPAA, PELO QUE PARECE O PERFIL QUE PROCURA FOI ENCONTRADO!");
			}
}

function openAgainProfile(){
	pause(7000);
	abrirPerfil();
}
