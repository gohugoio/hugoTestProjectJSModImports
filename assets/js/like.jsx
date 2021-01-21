// Note: We're using the CDN in "production".
import * as React from 'react'
import * as ReactDOM from 'react-dom';

// A simple React JSX component.
class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
      if (this.state.liked) {
        return 'You liked this!';
      }
  
      return (
        <button onClick={() => this.setState({ liked: true }) }>
          Like
        </button>
      );
    }
  }
  

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);