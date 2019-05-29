import React, { Component } from 'react';

//
//  Styles
//
import './Pagination.less';

export default class Movies extends Component{

    constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			pagination: {}
		}
    }
    
    componentDidMount(){

        //
        //  Get Props
        //
        this.getProps()

    }

    getProps(){
        this.setState({
            isLoading: false,
            pagination: this.props.pagination
        })
    }

    render(){

        let currentPage = this.state.pagination.atualPage;
        let firstPage = 1;

        let lastPage;
        if ( this.state.pagination.totalPages < 992 ){
            lastPage = this.state.pagination.totalPages;
        }else{
            lastPage = 992;
        }

        return(
            <div className="pagination">
                <ul>
                    { currentPage > firstPage &&
                    <li><a href={`/movies/?page=${currentPage-1}`}>Anterior</a></li>
                    }
                    { currentPage > firstPage && currentPage >= 8 &&
                        <React.Fragment>
                            <li><a href={`/movies/?page=${firstPage}`}>{firstPage}</a></li>
                            <li><a href={`/movies/?page=${firstPage+1}`}>{firstPage+1}</a></li>
                        </React.Fragment>
                    }
                    { (currentPage - 6) > firstPage && <li><span>...</span></li> }
                    
                    { (currentPage - 6) >= firstPage && currentPage < 8 && <li><a href={`/movies/?page=${currentPage-6}`}>{currentPage-6}</a></li> }
                    { (currentPage - 5) >= firstPage && currentPage < 8 && <li><a href={`/movies/?page=${currentPage-5}`}>{currentPage-5}</a></li> }
                    { (currentPage - 4) >= firstPage && currentPage < 8 && <li><a href={`/movies/?page=${currentPage-4}`}>{currentPage-4}</a></li> }
                    { (currentPage - 3) >= firstPage && <li><a href={`/movies/?page=${currentPage-3}`}>{currentPage-3}</a></li> }
                    { (currentPage - 2) >= firstPage && <li><a href={`/movies/?page=${currentPage-2}`}>{currentPage-2}</a></li> }
                    { (currentPage - 1) >= firstPage && <li><a href={`/movies/?page=${currentPage-1}`}>{currentPage-1}</a></li> }
                        
                    <li className="active"><span>{ currentPage }</span></li>
                    
                    { (currentPage + 1) <= lastPage && <li><a href={`/movies/?page=${currentPage+1}`}>{currentPage+1}</a></li> }
                    { (currentPage + 2) <= lastPage && <li><a href={`/movies/?page=${currentPage+2}`}>{currentPage+2}</a></li> }
                    { (currentPage + 3) <= lastPage && <li><a href={`/movies/?page=${currentPage+3}`}>{currentPage+3}</a></li> }

                    { (currentPage + 4) >= lastPage && currentPage < (lastPage - 8) && <li><a href={`/movies/?page=${currentPage+4}`}>{currentPage+6}</a></li> }
                    { (currentPage + 5) >= lastPage && currentPage < (lastPage - 8) && <li><a href={`/movies/?page=${currentPage+5}`}>{currentPage+5}</a></li> }
                    { (currentPage + 6) >= lastPage && currentPage < (lastPage - 8) && <li><a href={`/movies/?page=${currentPage+6}`}>{currentPage+4}</a></li> }
                    
                    { (currentPage + 3) < lastPage && <li><span>...</span></li> }

                    { currentPage < lastPage && currentPage <= ( lastPage - 8 ) &&
                        <React.Fragment>
                            <li><a href={`/movies/?page=${lastPage-1}`}>{lastPage-1}</a></li>
                            <li><a href={`/movies/?page=${lastPage}`}>{lastPage}</a></li>
                        </React.Fragment>
                    }

                    { currentPage < lastPage &&
                    <li><a href={`/movies/?page=${currentPage+1}`}>Próxima</a></li>
                    }
                </ul>
            </div>
        )
    }
}