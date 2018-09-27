import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Sidebar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <Menu pointing vertical>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} />
        </Menu>
      </React.Fragment>
    );
  }
}

export default Sidebar;
