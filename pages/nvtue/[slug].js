import Layout from '../../components/Layout'
import {useRouter} from 'next/router'

export default function GET(){
const router = useRouter();
return(

    <Layout>
        <h1>your path is: {router.query.slug}</h1>
    </Layout>
)

};
