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

	static averageCalc(value, dot = false){
		let val = value;
		if ( dot === false )
			return  Math.round( ( val * 100 ) / 10 );
		else
			return  parseFloat( Math.round( ( val * 100 ) / 10 ) / 10 ).toFixed(1);
	}

	static returnClassAverage( value ){
		let val = Util.averageCalc(value);
		let nameClass = '';
		if ( val > 25 && val < 70 ){
			nameClass = 'yellow';
		}else{
			if ( val >= 70 ){
				nameClass = 'green';
			}else if ( val <= 25 ){
				nameClass = 'red';
			}
		}
		return nameClass;
	}

	static getYear(date){
		const data = date;
		const arrayDate = data.split("-");
		return arrayDate[0];
	}

	static getUnique(arr, comp) {
		const unique = arr
		.map(e => e[comp])
		.map((e, i, final) => final.indexOf(e) === i && i)
		.filter(e => arr[e]).map(e => arr[e]);
		return unique;
	}

	static isMobile() {
		return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	}

}