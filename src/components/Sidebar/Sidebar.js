import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }

  componentDidMount() {
    // console.log(this.props.authStore.user.email);
  }

  render() {

    const { activeItem } = this.state;
    const { user } = this.props.authStore;

    return (
      <React.Fragment>
        <Menu pointing vertical>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to="/" />
          { user.email ? (<Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} as={Link} to="/profile" />) : (<Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as={Link} to="/login" />) }
        </Menu>
      </React.Fragment>
    );
  }
}

export default Sidebar;
