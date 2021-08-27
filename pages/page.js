function Page({ data }) {
    // Render data...
return (    
    <>
    <h1>{data.key}</h1>
    <h1>{data.activity}</h1>
    {console.log('data', data)}
</>

)
  }
  
  // This gets called on every request
  export async function getServerSideProps({res}) {
    res.setHeader('cache-control', 's-maxage=10, stale-while-revalidate')
    return {
      notFound: true,
    }
  }

  
  
  export default Page
