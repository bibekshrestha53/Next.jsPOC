type Props ={
  result : Result
}
export default async function Item({result}:Props){
    return (
        <div className="flex flex-col gap-4 p-2">
            <h1  className="text-3xl font-bold">{result.title}</h1>
            <img src={result.thumbnail?.source} width={result.thumbnail?.width} height={result.thumbnail?.height}></img>
            <p>{result.extract}</p>
        </div>
    )
}