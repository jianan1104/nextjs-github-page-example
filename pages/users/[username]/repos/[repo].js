import { Container, Grid, Card, Icon, Button } from 'semantic-ui-react';
import RepositoryMenu from '../../../../components/RepositoryMenu';
import RepositoryHeader from '../../../../components/RepositoryHeader';
import RepositoryContent from '../../../../components/RepositoryContent';
import api from '../../../../modules/api';


const repo = ({ username, repo, data, readme }) => {
  const { description, topics } = data;
  return (
    <>
      <RepositoryMenu />
      <RepositoryHeader username={username} repo={repo} data={data}/>
      <Container>
        <RepositoryContent description={description} topics={topics}  readme={readme} />
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