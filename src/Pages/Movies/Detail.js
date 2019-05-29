import React, { Component } from 'react';

//
//	Componentes
//
import Header from './../Includes/Header';
import Footer from './../Includes/Footer';
import Buscar from '../Includes/SearchBox';
import { Link } from 'react-router-dom';

//
//	Serviços
//
import api from './../../../Services/Api';
import util from '~/Services/Util';

//
//	Plugins
//
import LazyLoad from 'react-lazyload';
import ReactDisqusComments from 'react-disqus-comments';

export default class Detail extends Component{

	constructor(props){
		super(props);
		this.state = {
			isLoading: false,
			projeto: Object
		}
	}

	//
	//	Na montagem do componente
	//
	componentDidMount(){
		
		//
		//	Publicações
		//
		this.carregaProjeto(Util);

	}

	//
	//	Carrega todos os Projetos cadastrados
	//
	carregaProjeto(slug){
		this.setState({isLoading:true})
		api.getProjetoBySlug(slug).then((res)=>{
			this.setState({
				isLoading: false,
				projeto: res.data
			})
		})
	}

	render(){

		let projeto = this.state.projeto;

		return(
			<div className="page" data-controller="detalhe">
				
				<Header />

				<div className="contentPage">
					<div className="animation">

						<div id="projeto">
							<header>
								<div className="container-fluid">
									<div className="row">
										<div className={`headerDetalhe ` + projeto.theme }>
											<div className="col-xs-12">
												<div id="particles-js3"></div>
												<Link className="listaProjetos" to={`/portfolio`}><span>Todos os projetos</span></Link>
												{ this.state.isLoading === false && projeto.logo &&
												<img className="logo" src={projeto.logo.url} alt="Logotipo" />
												}
												<a href="#a" title="Projeto anterior" className="projetoAnterior"><span>Projeto anterior</span></a>
												<a href="#a" title="Próximo projeto" className="projetoPosterior"><span>Próximo projeto</span></a>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-xs-12">
											{ this.state.isLoading === false && projeto.title &&
											<h1>{projeto.title}</h1>
											}
											{ this.state.isLoading === false && projeto.about &&
											<h2>{projeto.about}</h2>
											}
										</div>
									</div>
								</div>
							</header>
							<div className="detalhe">
								<div className="container">
									<div className="row">
										<div className="col-xs-12 col-md-9">

											<div className="breadcrumb">
												<ul>
													<li>
													<Link to={`/`}>Início</Link>
													</li>
													<li>
														<Link to={`/portfolio`}>Portfolio</Link>
													</li>
													<li>{projeto.title}</li>
												</ul>
											</div>

											{ this.state.isLoading === false && projeto.content &&
												<div className="contentProject" dangerouslySetInnerHTML={{__html: projeto.content}}></div>
											}
											
											{ this.state.isLoading === false && projeto.site &&
											<p className="site"><a href={projeto.site} target="_blank" rel="noopener noreferrer">{projeto.site}</a></p>
											}

											{ this.state.isLoading === false && projeto.images &&
												projeto.images.map((imagem, index) => (
													<LazyLoad key={index}>
														<img src={imagem.url} alt={imagem.name} />
													</LazyLoad>
												))
											}

											{ this.state.isLoading === false && projeto.video &&
												<div className="contentVideo">
													<h3>Video</h3>
													{projeto.video.split('?v=').map((video, index) =>(
														( index === 1) ? <div key={index} className="boxVideo"><iframe title="Youtube video" id="video" width="560" height="315" src={"https://www.youtube.com/embed/" + video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></div> : ""
													))}
												</div>
											}
											

											<div className="boxComment">
												<h3>Comente esse projeto</h3>
												<ReactDisqusComments
												shortname="mnc-1"
												identifier={projeto._id}
												title={projeto.title}
												url={window.location.href} />
											</div>
											
										</div>
										<div className="col-xs-12 col-md-3">
											<aside>
												
												<Buscar text="Buscar projeto" />

												{ this.state.isLoading === false && projeto.about &&
												<div className="maisInfo">
													<h3>Projeto</h3>
													<p>{projeto.about}</p>
												</div>
												}
												
												{ this.state.isLoading === false && projeto.company &&
												<div className="maisInfo">
													<h3>Empresa</h3>
													<p>{projeto.company}</p>
												</div>
												}
												
												{ this.state.isLoading === false && projeto.work &&
												<div className="maisInfo">
													<h3>Trabalho realizado</h3>
													<p>{projeto.work}</p>
												</div>
												}

												{ this.state.isLoading === false && projeto.tecnology &&
												<div className="maisInfo">
													<h3>Tecnologias</h3>
													<p>{projeto.tecnology.join(', ')}</p>
												</div>
												}

												{ this.state.isLoading === false && projeto.site &&
												<div className="maisInfo">
													<h3>Acessar o site:</h3>
													<p className="site"><a href={projeto.site} target="_blank" rel="noopener noreferrer">{projeto.site}</a></p>
												</div>
												}

												<div className="socialShare">
													<ul>
														<li className="facebook"><a target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/sharer.php?u=" + window.location.href }><span>Compartilhar no Facebook</span></a></li>
														<li className="twitter"><a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/intent/tweet?url=" + window.location.href + "&text=Site " + projeto.title + " - " + projeto.about }><span>Compartilhar no Twitter</span></a></li>
													</ul>
												</div>

											</aside>
										</div>
									</div>
								</div>
							</div>
						</div>
					
					</div>
				</div>

				<Footer />

			</div>
		)
	}
}