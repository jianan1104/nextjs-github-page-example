import {Grid, Card, Icon } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import About from '../About';
import styles from './RepositoryContent.module.css';

const RepositoryContent = ({description, topics, readme}) => {
    return(
        <Grid stackable>
            <Grid.Row>
            <Grid.Column width={12}>
                <Card className={styles.card}>
                <Card.Header className={styles.cardHeader}><h3><Icon name="list"/>&nbsp;&nbsp;readme.md</h3></Card.Header>
                <Card.Content className={styles.cardContent}>
                <ReactMarkdown>
                    { readme }
                </ReactMarkdown>
                </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column width={4}>
                <About description={description} topics={topics}/>
            </Grid.Column>
            </Grid.Row>
        </Grid>
    )
};

export default RepositoryContent;