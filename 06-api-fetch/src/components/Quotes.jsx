import { useFetch } from '../customHooks/useFetch'
export default function Quotes() {
    const {data, loading, error} = useFetch("https://api.quotable.io/random");
    return (
      <>
        {loading && "loading..."}
        {error && "Error on api"}
        {data && <h1>{data.content}</h1>}
      </>
    )
}
