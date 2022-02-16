import api from '../../modules/api';
import RepositoryList from "../../components/RepositoryList";

const repos = ({ response }) => {
  return (
    <>
      <RepositoryList response={response} />
    </>
  )
};

export async function getServerSideProps(context) {
  const { username } = context.query;
  const response = await api.getRepositoriesByUser(username);

  return { props: { response } };
};


export default repos;