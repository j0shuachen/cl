import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class SignUpFormModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggler(){
    if (this.state.modalIsOpen){
      this.setState({modalIsOpen: false});
    }else{
      this.setState({modalIsOpen: true});
    }
  }

  render(){


  }

}


export default SignUpFormModal;
