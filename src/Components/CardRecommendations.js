import React, {Component} from 'react';
import CardFollowers from './CardFollowers'
class CardRecommendations extends Component {
    render() {
        let items = this.props.data.map((data) => {
                return <CardFollowers key={data.id} avatar={data.avatar} title={data.title} subtitle={data.subtitle}/>
            }
        );
        return (
            <div className="pb-2">
                <div className="card border-0 text-center">
                    <div className="card-body">
                        <h5 className="card-title text-center">Recommended for you</h5>
                        <div className="dropdown-divider "/>
                        <ul className="list-unstyled my-1">{items}</ul>
                        <div className="dropdown-divider mb-1"/>
                        <button onClick={this.props.onClick} className="btn btn-outline-secondary btn-sm border-0">View more</button>
                    </div>
                </div>
            </div>
        );
    }
}
CardRecommendations.defaultProps = {
    data: [{id:1, avatar: 'https://picsum.photos/200', title: 'Title', subtitle: 'Founder at Social Network'},
        {id: 2,  avatar: 'https://picsum.photos/200', title: 'Title', subtitle: 'University of California'}
    ]
};
export default CardRecommendations;
