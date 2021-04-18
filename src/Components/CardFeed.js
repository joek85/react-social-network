import React, {Component} from 'react';

class CardFeed extends Component {
    render() {
        const imgStyle = {
            borderRadius:'50%',
            width:'48px',
            height:'48px',
        };
        return (
            <div className="card border-0 mb-4">
                <div className="row ">
                    <div className="col-sm-1 me-md-2">
                        <div className="card-body">
                            <img src="https://picsum.photos/200" style={imgStyle} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="card-body">
                            <h5 className="card-title mb-0">Card title</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="dropdown-divider mb-3"/>
                    <div className="row">
                        <div className="col-12 text-start">
                            <a href="/" className="text-decoration-none text-secondary me-2">
                                <i className="bi bi-heart">10</i>
                            </a>
                            <a href="/" className="text-decoration-none text-secondary me-2">
                                <i className="bi bi-chat ">10 Comments</i>
                            </a>
                            <a href="/" className="text-decoration-none text-secondary me-2">
                                <i className="bi bi-eye ">10 Views</i>
                            </a>
                        </div>
                        <div className="card-body">
                          <button className="btn btn-outline-secondary btn-sm rounded-3 me-1">
                              <i className="bi bi-hand-thumbs-up-fill p-1"/>Like
                          </button>
                            <button className="btn btn-outline-secondary btn-sm rounded-3 me-1">
                                <i className="bi bi-chat-fill p-1"/>Comment
                            </button>
                            <button className="btn btn-outline-secondary btn-sm rounded-3 me-1">
                                <i className="bi bi-share-fill p-1"/>Share
                            </button>
                        </div>
                        <div className="media d-flex">
                            <img src="https://picsum.photos/200" style={imgStyle} alt="" className="me-2 text-center"/>
                                <div className="input-group me-2">
                                    <input style={{ borderBottomLeftRadius:25, borderBottomRightRadius: 25, borderTopLeftRadius: 25, borderTopRightRadius: 25}} type="text" placeholder="Add a comment..."  className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardFeed;
