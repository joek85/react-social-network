import React, {Component} from 'react';

import CardProfile from '../Components/CardProfile'
import CardPeople from '../Components/CardPeople'
import CardFeed from '../Components/CardFeed'
import CardPost from '../Components/CardPost'
import CardRecommendations from '../Components/CardRecommendations'
class Home extends Component {
    render() {
        return (
            <div className="row ">
                <div className="col-lg-3">
                    <CardProfile title={'Joe Kaikaty'} subTitle={'Full Stack Developer'} onClick={onViewProfile}/>
                </div>
                <div className="col-lg-6">
                    <CardPost/>
                    <CardFeed/>
                    <CardFeed/>
                </div>
                <div className="col-lg-3">
                    <CardPeople/>
                    <CardRecommendations/>
                </div>
            </div>
        );
    }
}
function onViewProfile() {

}

export default Home;
