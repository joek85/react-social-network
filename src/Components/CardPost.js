import React, {Component} from 'react';

class CardPost extends Component {
    render() {
        const imgStyle = {
            borderRadius:'50%',
            width:'48px',
            height:'48px',
        };
        return (
            <div className="card border-0 mb-4">
                <div className="card-body">
                    <div className="media d-flex">
                        <img src="https://picsum.photos/200" style={imgStyle} alt="" className="me-2 text-center"/>
                        <div className="input-group me-2">
                            <input style={{ borderBottomLeftRadius:25, borderBottomRightRadius: 25, borderTopLeftRadius: 25, borderTopRightRadius: 25}} type="text" placeholder="Start a post"  className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                        </div>
                        {/*<button className="btn btn-outline-secondary btn-sm rounded-3" type="button" id="button-addon2">Add</button>*/}
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        <button data-toggle="tooltip" data-placement="top" title="Upload images" className="btn btn-outline-secondary border-0">
                            <i className="bi bi-image-fill me-2"/>Photo
                        </button>
                        <button data-toggle="tooltip" data-placement="top" title="Upload videos" className="btn btn-outline-secondary border-0">
                            <i className="bi bi-file-earmark-play-fill me-2"/>Video
                        </button>
                        <button data-toggle="tooltip" data-placement="top" title="Attach files" className="btn btn-outline-secondary border-0">
                            <i className="bi bi-paperclip me-2"/>Attach files
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardPost;
