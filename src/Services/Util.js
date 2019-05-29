export default class Util {

    static getCurrentPage(){
		const search = window.location.search;
		const params = new URLSearchParams(search);
		let page = params.get('page');
		if (page === undefined){
			page = 1;
		}
		return page;
	}

	static cutWords(string, qtd = 160){
		let stringTT = string;
		let qtdTC = qtd;
		if ( stringTT ){
			let newString = ( stringTT.length <= qtdTC ) ? stringTT :  stringTT.substring(0, qtdTC) + "...";
			return newString;
		}
	}

}