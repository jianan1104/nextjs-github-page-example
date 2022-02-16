import Link from 'next/link';
import { Card, Icon } from 'semantic-ui-react';
import color from '../../modules/colors';
import ReactTimeAgo from 'react-time-ago'
import styles from './RepositoryList.module.css';


const RepositoryList = ({ response }) => {

  const renderRepositories = () => {
    const items = response.data.map(repo => {
      const { full_name, name, description, 
              language, license, id, forks_count,
              stargazers_count, updated_at
            } = repo;
      return {
          header: (
            <Link href={ `/${ full_name }` }>
              <a>{ name }</a>
            </Link>
          ),
          meta: 'Forked from',
          description: description,
          // Display language, start, fork, pull request, update_date
          extra: (
            <>
              <p>
                { language !== null ? (
                  <>
                    <span className={styles.repo_language} style={{backgroundColor: `${color[language]}`}}></span>
                    <span className={styles.label_mr}>{ language }</span>
                  </>
                  ) : null }
                { license && license.spdx_id !== 'NOASSERTION' ? (
                    <>
                      <Icon name='balance scale' /><span className={styles.label_mr}>{ license.spdx_id }</span> 
                    </>
                  )  : null }
                { <>
                    <Icon name='fork' /><span className={styles.label_mr}>{ forks_count }</span>
                    <Icon name='star outline'/><span className={styles.label_mr}>{ stargazers_count }</span>
                    <Icon name='arrows alternate vertical'/><span className={styles.label_mr}>{ stargazers_count }</span>
                  </> }
                <span>Updated <ReactTimeAgo date={new Date(updated_at)} locale="en-US"/></span>
                
              </p>
            </>
          ),
          key: id,
          fluid: true
        }
      });
      return <Card.Group items={items} /> 

  };
  return (
    <>
      { renderRepositories() }
    </>
  )
};


export default RepositoryList;