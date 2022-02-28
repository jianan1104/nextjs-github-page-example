import { Icon, Container, Breadcrumb, Button, Label, Menu, Dropdown } from 'semantic-ui-react';
import { Media, MediaContextProvider } from "../../modules/media";
import millify from "millify";

const RepositoryHeader = ({ username, repo, data }) => {
    return (
        <div style={{ backgroundColor: '#f6f8fa',marginBottom: '32px', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Breadcrumb style={{ fontSize: '20px'}}>
            <Icon name='book' size='small' style={{color: 'grey'}}/>
            <Breadcrumb.Section link>{ username }</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section link><p style={{ fontWeight: '600'}}>{ repo }</p></Breadcrumb.Section>
          </Breadcrumb>
          <MediaContextProvider>
              <Media greaterThan="sm">
                <span>
                  <Button basic style={{ paddingTop: '4px', paddingBottom: '4px', paddingLeft: '12px', paddingRight: '12px'}}>
                    <Icon name='eye' />Unwatch&nbsp; 
                    <Label circular>
                      {millify(data.subscribers_count)}
                    </Label>
                  </Button>
                  <Button basic style={{ paddingTop: '4px', paddingBottom: '4px', paddingLeft: '12px', paddingRight: '12px'}}>
                    <Icon name='fork' />Fork&nbsp; 
                    <Label circular>
                      {millify(data.forks_count)}
                    </Label>
                  </Button>
                  <Button basic style={{ paddingTop: '4px', paddingBottom: '4px', paddingLeft: '12px', paddingRight: '12px'}}>
                    <Icon name='star outline' />Star&nbsp; 
                    <Label circular>
                      {millify(data.stargazers_count)}
                    </Label>
                  </Button>
                </span>
              </Media>
          </MediaContextProvider>
        </div>
        <MediaContextProvider>
          <Media at='sm'>
            <Container>
              <p>{data.description}</p>
              <p><Icon name='chain'/><a href={data.homepage}>{data.homepage}</a></p>
              <p>
                <span><a style={{ color: '#57606a'}} href={`https://github.com/${username}/${repo}/stargazers`}><Icon name='star outline'/> {millify(data.stargazers_count)} stars&nbsp; </a></span>
                <span><a style={{ color: '#57606a'}} href={`https://github.com/${username}/${repo}/network/members`}><Icon name='fork'/>{millify(data.forks_count)} forks</a></span>
              </p>
              <div style={{ display: 'flex'}}>
              <Button basic style={{ width: '100%', paddingTop: '8px', paddingBottom: '8px', paddingLeft: '12px', paddingRight: '12px'}}>
                  <Icon name='star outline' />Star&nbsp; 
                </Button>
                <Button basic style={{ width: '100%', paddingTop: '8px', paddingBottom: '8px', paddingLeft: '12px', paddingRight: '12px'}}>
                  <Icon name='eye' />Watch&nbsp; 
                </Button>
              </div>
            </Container>
          </Media>
        
        <div>
          <Menu pointing secondary style={{ borderBottom: '0px'}}>
          <Menu.Menu>
            <Menu.Item active={true}>
              <Icon name='code'/><span> Code</span>
            </Menu.Item>
            <Menu.Item>
              <Icon name='dot circle outline'/><span> Issues</span>
              <Label circular>
                {millify(data.open_issues_count)}
              </Label>
            </Menu.Item>
            <Menu.Item>
              <Icon name='fork'/><span> Pull requests</span>
            </Menu.Item>
            <Media at='sm'>
              <Dropdown item text='More'>
                <Dropdown.Menu>
                  <Dropdown.Item  text='Actions' />
                  <Dropdown.Item  text='Projects' />
                  <Dropdown.Item  text='Wiki' />
                  <Dropdown.Item  text='Security' />
                  <Dropdown.Item  text='Insights' />
                </Dropdown.Menu>
              </Dropdown>
            </Media>
            <Media greaterThan='sm' style={{ display: 'flex' }}>
              <Menu.Item>
                <Icon name='play circle outline'/><span>  Actions</span>
              </Menu.Item>
              <Menu.Item>
                <Icon name='file alternate outline'/><span>  Projects</span>
              </Menu.Item>
              <Menu.Item>
                <Icon name='info'/><span>  Wiki</span>
              </Menu.Item>
              <Menu.Item>
                <Icon name='shield alternate'/><span>  Security</span>
              </Menu.Item>
              <Menu.Item>
                <Icon name='chart line'/><span>  Insights</span>
              </Menu.Item>
              <Menu.Item>
                <Icon name='cog'/><span>  Settings</span>
              </Menu.Item>
            </Media>
          </Menu.Menu>
        </Menu>
        </div>
        </MediaContextProvider>
      </div>
    )
};

export default RepositoryHeader;