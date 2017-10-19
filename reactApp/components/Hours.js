import React from 'react';
import Modal from 'react-modal';
import Appointment from './Appointment';
import { connect } from 'react-redux';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Hours extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div style = {{border: "black solid 2px"}}>
        <p>Hour: {this.props.hour}</p>
        <p> Name: {this.props.name}</p>
        <p> Phone: {this.props.phone}</p>

        <button type="button" className = "btn-primary btn-lg" onClick={this.openModal}>
          {this.props.name && this.props.phone? "Update contact information": "Book an appointment"}</button>
        { this.props.name && this.props.phone ?
          (<button className = "btn-danger" onClick = {()=>this.props.cancelApp()} >Cancel Appointment</button>) : <div></div>}


        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Appointment</h2>
          <button onClick={this.closeModal}>close</button>
          <Appointment day = {this.props.day} hour = {this.props.hour}/>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addName: (name)=>dispatch({type: 'ADD_NAME', name}),
    addPhone: (phone)=>dispatch({type: 'ADD_PHONE', phone}),
    addApp:()=>dispatch({type: 'ADD_APP'}),
    cancelApp:()=>dispatch({type: 'CANCEL'})
  }
}

const mapStateToProps = (state) =>{
  return{
    name: state.contactreducer.name,
    phone: state.contactreducer.phone
  }
}

Hours = connect(mapStateToProps, mapDispatchToProps)(Hours);

export default Hours;
