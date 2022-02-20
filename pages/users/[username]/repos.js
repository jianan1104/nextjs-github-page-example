import { useState, useCallback } from 'react';
import api from '../../../modules/api';
import RepositoryList from "../../../components/RepositoryList";
import MenuComponent from '../../../components/Menu';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

const repos = ({ response, user, username }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState(response);
  const handleOnDocumentBottom = useCallback(async () => {
    console.log('I am at bottom! ' + Math.round(performance.now()));
    setPageNumber(pageNumber + 1);
    const currentData = data.slice();
    const newData = await api.getRepositoriesByUser(username, pageNumber + 1);
    console.log(currentData);
    console.log(newData);
    currentData.push(...newData);
    setData(currentData);
  });
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


export default repos;