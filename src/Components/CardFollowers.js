import React, {Component} from 'react';

class CardFollowers extends Component {
    render() {
        const imgStyle = {
            borderRadius:'50%',
            width:'72px',
            height:'72px',
        };
        return (
            <div className="media d-flex pb-4 text-start">
                <img src={this.props.avatar} className="me-2" alt="" style={imgStyle}/>
                    <div className="media-body">
                        <h5 className="mt-0 fw-bold">{this.props.title}</h5>
                        <p className="card-text"><small className="text-muted">{this.props.subtitle}</small></p>
                        <button className="btn btn-outline-secondary btn-sm rounded-3 me-1">
                            <i className="bi bi-person-plus-fill me-2"/>Follow
                        </button>
                    </div>
            </div>
        );
    }
}

export default CardFollowers;
