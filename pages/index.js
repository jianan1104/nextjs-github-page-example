import React from 'react';
import Link from 'next/link';
import { Container,Image, Button, Grid } from 'semantic-ui-react';

const IconWithTextComponent = ({src, name}) => {
  return (
    <>
    <Link href={`/users/${name}/repos`}>
      <Button basic >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Image size='tiny' circular src={src} />
          { /* Because Amazon user name on github is Amzn, so do this little trick to fix it.*/}
          <h3>{ name === 'Amzn' ? 'Amazon' : name  }</h3>
        </div>
      </Button>
    </Link>
    </>
  )
}
const Index = () => {
  return (
    <>
    <Container>
      <div style={{ display: 'flex' , flexDirection: 'column',alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <h2 style={{ textAlign: 'center', marginBottom: '32px'}}>Dcard or FAANG? 🧐</h2>
        <Grid stackable centered>
            <IconWithTextComponent name="Dcard" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Dcard_Favicon_x520.png"/>
            <IconWithTextComponent name="Facebook" src="https://mattgeimer.com/resources/experience/Meta.png"/>
            <IconWithTextComponent name="Apple" src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202202150751"/>
            <IconWithTextComponent name="Amzn" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"/>
            <IconWithTextComponent name="Netflix" src="https://inside-assets1.inside.com.tw/2016/06/netflix-new-logo.png?w=500&fit=max&q=80"/>
            <IconWithTextComponent name="Google" src="https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1519856215226?e=1649894400&v=beta&t=HM3TkQjXlav6Xh4cKUQtriN8OXTV937mU4V5aWjJER4"/>
            
        </Grid>
      </div>
    </Container>
    </>
  )
};


export default Index;