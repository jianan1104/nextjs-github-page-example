import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class MenuComponent extends Component {
  state = { activeItem: ' Repositories' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div style={{ marginBottom: '12px' }}>
        <Menu pointing secondary>
          <Menu.Item
            name=' Overview'
            active={activeItem === ' Overview'}
            onClick={this.handleItemClick}
          >
            <Icon name='home'/><span> Overview</span>
          </Menu.Item>
          <Menu.Item
            name=' Repositories'
            active={activeItem === ' Repositories'}
            onClick={this.handleItemClick}
          >
            <Icon name='book'/><span> Repositories</span>
          </Menu.Item>
          <Menu.Item
            name=' Packages'
            active={activeItem === ' Packages'}
            onClick={this.handleItemClick}
          >
            <Icon name='cube'/><span> Packages</span>
          </Menu.Item>
          <Menu.Item
            name='  People'
            active={activeItem === '  People'}
            onClick={this.handleItemClick}
          >
            <Icon name='user'/><span>  People</span>
          </Menu.Item>
          <Menu.Item
            name='  Projects'
            active={activeItem === '  Projects'}
            onClick={this.handleItemClick}
          >
            <Icon name='file alternate outline'/><span>  Projects</span>
          </Menu.Item>
          
        </Menu>
      </div>
    )
  }
}