import { connect } from 'react-redux';
import { fetchUserTweets } from '../../actions/tweet_actions';
import Profile from './profile';

const mSTP = state => {
  return {
    tweets: Object.values(state.tweets.user),
    currentUser: state.session.user
  }
}

const mDTP = dispatch => {
  return {
    fetchUserTweets: id => dispatch(fetchUserTweets(id))
  }
}

export default connect(mSTP, mDTP)(Profile);