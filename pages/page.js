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
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://www.boredapi.com/api/activity`)
    const data = await res.json()

    if (!data) {
        return {
          notFound: true,
        }
      }
  
    // Pass data to the page via props
    return { props: { data } }
  }
  
  export default Page