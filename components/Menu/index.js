import React from 'react'
import { Menu, Icon, Container, Image, Label, Grid } from 'semantic-ui-react'
import styles from './Menu.module.css';

const MenuComponent = ({ user }) => {
  return (
    <div className={styles.menu}>
      <Container >
        <Grid columns={2} stackable>
          <Grid.Column width={2}>
            <div>
              <Image src={user.avatar_url} size='small' rounded style={{border: 'solid #eeeeee'}}/>
            </div>
          </Grid.Column>
          <Grid.Column width={14}>
            <Grid.Row columns={5}>
              <Grid.Column>
                <h2>
                  {
                    user.name ? user.name : user.login 
                  }
                </h2>
              </Grid.Column>
              <Grid.Column>
                  {
                    user.bio ? <p className='description'>{ user.bio }</p> : null
                  }
                  
              </Grid.Column>
              <Grid.Column>
                  {
                    user.location ? <span><Icon name='location arrow'/>{ user.location }&emsp;</span> : null
                  }
              </Grid.Column>
              <Grid.Column>
                  {
                    user.blog ? (
                      <span>
                        <Icon name='linkify'/>
                        <span>
                          <a href={user.blog}>{ user.blog } &emsp;</a>
                        </span>
                    </span>
                    ) : null
                  }
              </Grid.Column>
              <Grid.Column>
                    {
                      user.twitter_username ? (
                        <span>
                          <Icon name='twitter'/>
                          <span>
                            <a href={`https://twitter.com/${user.twitter_username}`}>{ `@${user.twitter_username}` }&emsp;</a>
                          </span>
                        </span>
                      ) : null
                    }
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      <Menu pointing secondary style={{ overflowX: 'scroll', overflowY: 'hidden', paddingBottom: '0px'}}>
        <Menu.Menu>
          <Menu.Item
            name=' Overview'
          >
            <Icon name='home'/><span> Overview</span>
          </Menu.Item>
          <Menu.Item
            name=' Repositories'
            active={true}
          >
            <Icon name='book'/><span> Repositories</span>
            <Label circular>
              { user.public_repos }
            </Label>
          </Menu.Item>
          <Menu.Item
            name=' Packages'
          >
            <Icon name='cube'/><span> Packages</span>
          </Menu.Item>
          <Menu.Item
            name='  People'
          >
            <Icon name='user'/><span>  People</span>
          </Menu.Item>
          <Menu.Item
            name='  Projects'
          >
            <Icon name='file alternate outline'/><span>  Projects</span>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </Container>
    </div>
  )

}

export default MenuComponent;