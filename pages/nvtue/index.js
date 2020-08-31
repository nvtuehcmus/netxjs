import Layout from '../../components/Layout'
import Fetch from 'isomorphic-unfetch';
import View from '../../components/views'


const  Home = (props)=>(
     <Layout>
       <div className="container">
       <View Deaths={props.Deaths} Recovered={props.Recovered} Confirmed={props.Confirmed}/>
       </div>
     </Layout>
)

Home.getInitialProps = async function(){
  const res = await fetch ('https://api.covid19api.com/dayone/country/vietnam');
  const data = await res.json();
  var count = Object.keys(data).length;
  console.log(data[count-1].Recovered);
  return {
    Deaths:data[count-1].Deaths,
    Recovered:data[count-1].Recovered,
    Confirmed:data[count-1].Confirmed
  }
}

export default Home;
