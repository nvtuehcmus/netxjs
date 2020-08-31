import Nav from './navbar'
import Head from 'next/head'
import '../statics/navcss.css'

const Layout =(props)=>(
    <div className="container">
    <Head>
        <title>nvtue info</title>
        <link ref="stylesheet"  href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
    </Head>
    <Nav/>
        <div className="container">
        {props.children}
        </div>
      
    </div> 

);
export default Layout;