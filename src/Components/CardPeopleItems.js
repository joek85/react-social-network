import React, {Component} from 'react';

class CardPeopleItems extends Component {
    render() {
        const imgStyle = {
            borderRadius:'50%',
            width:'36px',
            height:'36px',
        };
        return (
            <div className="media d-flex my-4">
                <img src={this.props.avatar} className="mx-1 text-center" style={imgStyle} alt=""/>
                    <div className="media-body text-start ms-1">
                        <h5 className="mt-0 mb-0">{this.props.title}</h5>
                        <p className="card-text"><small className="text-muted">{this.props.subtitle}</small></p>

                    </div>
            </div>
        );

    }
}

export default CardPeopleItems;
