

const repo = ({ username, repo }) => {
  return (
    <>
      { repo } { username }
    </>
  )
};

export async function getServerSideProps(context) {
  const { username, repo } = context.query;
  //const response = await api.getRepositoriesByUser(username);

  return { props: { username, repo } };
};


export default repo;