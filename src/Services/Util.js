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

}