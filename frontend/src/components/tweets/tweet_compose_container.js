import { connect } from 'react-redux';
import { composeTweet } from '../../actions/tweet_actions';
import TweetCompose from './tweet_compose';

const mSTP = state => {
  return {
    currentUser: state.seesion.user,
    newTweet: state.tweets.new
  }
}

const mDTP = dispatch => {
  return {
    composeTweet: data => dispatch(composeTweet(data))
  }
}

export default connect(mSTP, mDTP)(TweetCompose)