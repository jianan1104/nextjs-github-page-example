import { Image } from 'semantic-ui-react';

function Error({ statusCode }) {
    return (
        <>
        <div style={{ display: 'flex' , flexDirection: 'column',alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <Image src="https://i.imgur.com/c738l7Q.jpg" size='large'/>
            <p>
                痾...你好像走錯房間，被你看到我們在打UNO了，一起玩？ 
            </p>
        </div>
        </>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error