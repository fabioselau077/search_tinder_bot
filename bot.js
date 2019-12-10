function pause(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}



function checkTinder() {
	var base = "https://tinder.com/";
	return window.location.href.startsWith(base + "app/recs") || window.location.href.startsWith(base + "app/matches");
}

(function tinder(){
		let bool = true;
		while (bool){
				var nomePessoa = "Nome da Pessoa";
				console.log("Nome da Pessoa que procura: " + nomePessoa);
				var nome = document.getElementsByClassName('Fxs($flx1) Flw(w) Fz($xl)')[1].textContent;
				console.log("Nome da Pessoa do Tinder: " + nome);
				pause(500);
				if(nome != nomePessoa){
					var infoClassName = 'recCard__info';
					var dislike = document.getElementsByClassName("recsGamepad__button")[0];
					console.log("NÃO É A PESSOA QUE VOCÊ PROCURA!");
					
					dislike.click();
					tinder();
				}
				else{
					bool = false;
					return console.log("OOPAA, PELO QUE PARECE O PERFIL QUE PROCURA FOI ENCONTRADO!");
				}
			}
}());

