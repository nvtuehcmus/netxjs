import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home = ()=> (
    <Layout>
     you can using  <h1>/nvtue/[something]</h1> to see the dynamic routing
   <br/>
      <Link href="/nvtue">
      <a>Click here to see the covid infomation in vietnam</a>
      </Link>
   
    
    

    </Layout>
        
)
export default Home