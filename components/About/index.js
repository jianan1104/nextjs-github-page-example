import styles from './About.module.css';
import { Button } from 'semantic-ui-react';

const About = ({ description, topics }) => {
    return (
        <>
            <h3>About</h3>
            { description ? (
                <p>{ description }</p>
            ): 'He/She is lazy, nothing here.'}
            
            <div>
                { topics.map((topic,idx) => {
                return (
                    <a href={`https://github.com/topics/${topic}`} target='_blank' key={idx} rel="noreferrer">
                    <Button circular color='blue' className={styles.tag}>{ topic } </Button>
                    </a>
                )
                })}
            </div>
        </>
    )
};

export default About;