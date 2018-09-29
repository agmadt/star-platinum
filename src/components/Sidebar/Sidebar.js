import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }

  render() {

    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <Menu pointing vertical>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to="/" />
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as={Link} to="/login" />
        </Menu>
      </React.Fragment>
    );
  }
}

export default Sidebar;
