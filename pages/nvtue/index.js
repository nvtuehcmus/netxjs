import Head from 'next/head'

export default Home=>{
    return (
      <>
      <Head>
        <title>Get info by email</title>
      </Head>
      <main>
        <form method="POST" action="/pages/nvtue">
          <input type="email" name="email" id="email"/>
            <input type="submit"/>
        </form>
      </main>
      </>
    )

}
