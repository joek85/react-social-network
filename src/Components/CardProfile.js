import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CardProfile extends Component {
    render() {
        return (
            <div className="card border-0 text-center mb-2">
                <div className="card-header bg-secondary" style={{height: 120}}/>
                <img src="https://picsum.photos/200" className=" rounded-circle align-self-center" alt="" style={{width: 128, height: 128, marginTop: -60, border: '4px solid #ffff'}}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-subtitle text-muted">{this.props.subTitle}</p>
                    <div className="dropdown-divider"/>
                    <h5 className="card-title">Following</h5>
                    <p className="card-subtitle text-muted">{this.props.following}</p>
                    <div className="dropdown-divider"/>
                    <h5 className="card-title">Followers</h5>
                    <p className="card-subtitle text-muted">{this.props.followers}</p>
                    <div className="dropdown-divider mb-3"/>
                    <Link to="/userprofile">
                        <button onClick={this.props.onClick} className="btn btn-outline-secondary btn-sm border-0">View Profile</button>
                    </Link>
                </div>
            </div>
        );
    }
}
function onClick() {

}
CardProfile.defaultProps = {
    title: 'Profile Name',
    subTitle: 'Occupation',
    following: '1',
    followers: '10K',
    onClick: onClick()
};

export default CardProfile;
