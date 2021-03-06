import { React, useState, useCallback } from 'react';
import api from '../../../modules/api';
import RepositoryList from "../../../components/RepositoryList";
import MenuComponent from '../../../components/Menu';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';


const Repos = ({ response, user, username }) => {
  const [pageNumber, setPageNumber] = useState(2);
  const [data, setData] = useState(response);
  const handleOnDocumentBottom = useCallback(async () => {
    // When repos still available
    if((pageNumber*10 <= user.public_repos)) {
      await api.getRepositoriesByUser(username, pageNumber).then(newData => {
        setData([...data, ...newData]);
        setPageNumber(pageNumber + 1);
      });
    }
    
  }, []);
  // When reach page bottom, get new data
  useBottomScrollListener(handleOnDocumentBottom);

  return (
    <>
    <div>
      <MenuComponent user={user} />
      <RepositoryList response={data} />
    </div>
    </>
  )
};

export async function getServerSideProps(context) {
  const { username } = context.query;
  const response = await api.getRepositoriesByUser(username);
  const user = await api.getUserDetail(username);

  return { props: { response, user, username } };
};


export default Repos;