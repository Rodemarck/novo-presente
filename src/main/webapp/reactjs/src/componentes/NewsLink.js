import React, {Component} from 'react';
import{
    Link
} from "react-router-dom";
import '../index.css'

class NewsLink extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <Link to={this.props.news.url}>
               <div className={"caixa-link mb-1 d-flex noticia"}>
                   <div className={"col-md-3 text-center cor-preto"}>{this.props.news.postDate}</div>
                   <div className={"col-md-3 text-center cor-primaria"}>{this.props.news.content}</div>
                   <div className={"col-md-3 text-center cor-preta"}>{this.props.news.author.name}</div>
               </div>
           </Link>
        );
    }
}

export default NewsLink;