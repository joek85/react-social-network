import React, {Component} from 'react';
import '../css/SocialMedia.css'
import CardFeed from '../Components/CardFeed'
class UserProfile extends Component {
    render() {
        {/*<div className="jumbotron jumbotron-fluid" style={styles}/>*/}
        return (
            <div>
                <div className="jumbotron jumbotron-fluid" style={styles}/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card border-0 text-center">
                                <img src="https://picsum.photos/200" className=" rounded-circle align-self-center" alt="" style={{width: 128, height: 128, marginTop: -60, border: '4px solid #ffff'}}/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-center mb-4">
                                        <button className="btn btn-outline-secondary ">
                                            <i className="bi bi-plus me-1"/>Follow
                                        </button>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="row">
                                            <h5 className="card-title">Following</h5>
                                            <p className="card-subtitle text-muted">1</p>
                                        </div>
                                        <div className="row">
                                            <h5 className="card-title">Followers</h5>
                                            <p className="card-subtitle text-muted">10K</p>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider mb-3"/>
                                    <ul className="social-network social-circle">
                                        <li><a href="" className="icoRss" title="Rss"><i className="fa fa-rss"/></a></li>
                                        <li><a href="" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"/></a></li>
                                        <li><a href="" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"/></a></li>
                                        <li><a href="" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"/></a></li>
                                        <li><a href="" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card border-0 mb-2">
                                <div className="card-body">
                                    <div className="card-text">Joe Kaikaty</div>
                                    <p className="card-subtitle text-muted">Full Stack Developer</p>
                                </div>
                            </div>
                            <CardFeed/>
                        </div>
                        <div className="col-lg-3">
                            <div className="card border-0">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between mb-4">
                                        <div className="card-title fw-bold">Portfolio</div>
                                        <div className="bi-images"/>
                                    </div>

                                    <div className="row row-cols-3 row-cols-md-3">
                                        <div className="col mb-2 p-1">
                                            <div className="card">
                                                <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
                                            </div>
                                        </div>
                                        <div className="col mb-2 p-1">
                                            <div className="card">
                                                <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
                                            </div>
                                        </div>
                                        <div className="col mb-2 p-1">
                                            <div className="card">
                                                <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
                                            </div>
                                        </div>
                                        <div className="col mb-2 p-1">
                                            <div className="card">
                                                <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
                                            </div>
                                        </div>
                                        <div className="col mb-2 p-1">
                                            <div className="card">
                                                <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
                                            </div>
                                        </div>
                                        <div className="col mb-2 p-1">
                                            <div className="card">
                                                <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
                                            </div>
                                        </div>
                                        <div className="col mb-2 p-1">
                                            <div className="card">
                                                <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
                                            </div>
                                        </div>
                                        <div className="col mb-2 p-1">
                                            <div className="card">
                                                <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
                                            </div>
                                        </div>
                                        <div className="col mb-2 p-1">
                                            <div className="card">
                                                <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const bgImage = 'https://picsum.photos/id/0/5616/3744';
const styles = {
    background: `url(${bgImage}) no-repeat center center fixed`,
    WebkitBackgroundSize: '100% 100%',
    MozBackgroundSize: '100% 100%',
    OBackgroundSize: '100% 100%',
    minHeight: '300px',
    backgroundSize: 'cover'
};
function onClick(e) {

}
export default UserProfile;
