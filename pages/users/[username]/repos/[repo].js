import { Container, Placeholder, Grid } from 'semantic-ui-react';
import RepositoryMenu from '../../../../components/RepositoryMenu';
import RepositoryHeader from '../../../../components/RepositoryHeader';
import api from '../../../../modules/api';

const repo = ({ username, repo, data }) => {
  console.log(data);
  return (
    <>
      <RepositoryMenu />
      <RepositoryHeader username={username} repo={repo} data={data}/>
      <Container>
        <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>

              </Grid.Column>
              <Grid.Column>

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

  return { props: { username, repo,  data } };
};


export default repo;