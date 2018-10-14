import { Card, Col, Button, Modal, Dropdown, Chip } from "react-materialize";
import React, { Component } from "react";



class Park extends Component {
  state = {
    currentUsers: [],
  }
  componentDidMount(){
    // TODO: Fetch current checkins using parkId
    this.props.fetchCurrentUsers(this.props.parkInfo.id)
      .then( users => this.setState({
        currentUsers: users 
      }))
  }

  renderCurrentUsers = () => {
    console.log("rendering current users");
    
    return (
      this.state.currentUsers.map( user => {
        return (
          <Chip>{user}</Chip>
        )
      })
    )
  }

  handleCheckIn = () => {
    this.props.checkIn(this.props.parkInfo)
    this.setState({
      
    })

  }

 

  render(){
    console.log("in Park.js render");
    
    return (
      <Col s={6}>
        <Card title={this.props.parkInfo.name} className="teal lighten-5">
          <p><Button icon="nature_people" floating />Count: {this.state.currentUsers.length}</p>
  
          <Dropdown trigger={<Button floating icon="more_horiz" />}>
            <Modal
              trigger={<Button floating icon="info_outline" waves="light" />}
              header={this.props.parkInfo.name}
              s={6}
            >
              <h5>Address: {this.props.parkInfo.address}</h5>
              <h5>Count: {this.state.currentUsers.length}</h5>
              {this.renderCurrentUsers()}
            </Modal>
            <Button
              floating
              onClick={() => this.props.deletePark(this.props.parkInfo.id)}
              waves="light"
              icon="delete"
            />
            <Button
              floating
              onClick={() => this.props.editPark(this.props.parkInfo.id)}
              waves="light"
              icon="edit"
            />
          </Dropdown>
          <Button
            floating
            icon="check_circle_outline"
            onClick={this.handleCheckIn}
          />
        </Card>
      </Col>
    );
  }
}
// const Park = ({ parkInfo, deletePark, editPark, checkIn, fetchCurrentUsers }) => {
//   // parkInfo =>  {name: "Wriggly Field Dog Friendly Area", address: "2645 N Sheffield Ave, Chicago, IL 60614", id: "cjmkvc3xu00023b5t4t1z4aq1", count: 1}




//   // TODO: menu should be a circle menu button user clicks on and then all options populate around button
//   return (
//     <Col s={6}>
//       <Card title={parkInfo.name} className="teal lighten-5">
//         <p><Button icon="nature_people" floating />Count: {parkInfo.count}</p>

//         <Dropdown trigger={<Button floating icon="more_horiz" />}>
//           <Modal
//             trigger={<Button floating icon="info_outline" waves="light" />}
//             header={parkInfo.name}
//             s={6}
//           >
//             <h5>Address: {parkInfo.address}</h5>
//             <h5>Count: {parkInfo.count}</h5>
//           </Modal>
//           <Button
//             floating
//             onClick={() => deletePark(parkInfo.id)}
//             waves="light"
//             icon="delete"
//           />
//           <Button
//             floating
//             onClick={() => editPark(parkInfo.id)}
//             waves="light"
//             icon="edit"
//           />
//         </Dropdown>
//         <Button
//           floating
//           icon="check_circle_outline"
//           onClick={() => checkIn(parkInfo)}
//         />
//       </Card>
//     </Col>
//   );
// };

export default Park;
