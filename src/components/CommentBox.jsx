import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    comment : ''
  }

  formChange = e =>{
    e.preventDefault()
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submitComment = e =>{
    e.preventDefault()
    this.setState({
      comment : ''
    })
  }

  render(){
    return (
      <div>
        <form>
          <h4>Add a Comment</h4>
          <textarea onChange={ this.formChange } name="comment" value={ this.state.comment }/>
          <div>
            <button onClick={ this.submitComment }>Submit Comment</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;