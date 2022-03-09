import { Container, Grid, Card, Icon, Button } from 'semantic-ui-react';
import RepositoryMenu from '../../../../components/RepositoryMenu';
import RepositoryHeader from '../../../../components/RepositoryHeader';
import api from '../../../../modules/api';
import ReactMarkdown from 'react-markdown';

const repo = ({ username, repo, data, readme }) => {
  const { description } = data;
  return (
    <>
      <RepositoryMenu />
      <RepositoryHeader username={username} repo={repo} data={data}/>
      <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={12}>
            <Card style={{ width: '100%', overflowX: 'hidden' }}>
              <Card.Header style={{ padding: '12px'}}><h3><Icon name="list"/>&nbsp;&nbsp;readme.md</h3></Card.Header>
              <Card.Content style={{ padding: '18px'}}>
              <ReactMarkdown>
                { readme }
              </ReactMarkdown>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={4}>
            <h3>About</h3>
            { description ? (
              <p>{ description }</p>
            ): 'He/She is lazy, nothing here.'}
            
            <div>
              { data.topics.map((topic,idx) => {
                return (
                  <a href={`https://github.com/topics/${topic}`} target='_blank' key={idx} rel="noreferrer">
                    <Button circular color='blue' style={{ padding: '8px', marginTop: '4px' }}>{ topic } </Button>
                  </a>
                )
              })}
            </div>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </Container>
    </>
  )
};

export async function getServerSideProps(context) {
  const { username, repo } = context.query;
  const data = await api.getSingleRepository(username, repo);
  const readme = await api.getReadme(username, repo);

  return { props: { username, repo,  data, readme } };
};


export default repo;