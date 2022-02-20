import React from 'react';
import Link from 'next/link';
import { Card, Icon, Container } from 'semantic-ui-react';
import color from '../../modules/colors';
import styles from './RepositoryList.module.css';
import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en.json';
TimeAgo.addLocale(en);

const RepositoryList = ({ response }) => {
    const renderRepositories = () => {
      const items = response.map(repo => {
      const { name, description, 
              language, license, node_id, forks_count,
              stargazers_count, updated_at, owner
            } = repo;
      return {
          header: (
            <Link href={ `/users/${owner.login}/repos/${name}` }>
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
          key: node_id,
          fluid: true
        }
      });
      return <Card.Group items={items} /> 

  };
  return (
    <>
    <Container>
        { renderRepositories() }
    </Container>
    </>
  )
};


export default RepositoryList;