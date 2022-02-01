import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
// // Add BandInput component
// import React, { Component } from 'react'

// class BandInput extends Component {

//   state = {name: ''}
  
//   handleChange = (event) => {this.setState({text: event.target.value})}

//   handleSubmit = (event) => {
//     event.preventDefault()
//     this.props.addBand(this.state)
//     this.setState({name: ''})
//   }

//   render() {
//     return(
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input 
//             type='text'
//             placeholder='Enter band name'
//             onChange={this.handleChange}
//             value={this.state.text} />
//           <input type='submit' />
//         </form>
//       </div>
//     )
//   }
// }

// export default BandInput