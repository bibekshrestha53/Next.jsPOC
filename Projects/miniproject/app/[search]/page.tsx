type Props = {
    params : {
        search: string
    }
}

import GetWikiDetails from "@/lib/getWikiDetail";
import Item from "./components/item";

export async function generateMetadata({params}:Props){
    return { title : params.search.replace('%20', ' ')} 
} 

export default async  function Search({params}:Props){
    const getWikiDetail : Promise<SearchResult> =  GetWikiDetails(params.search);
    const wikiData = await getWikiDetail;
    const result : Result[] | undefined = wikiData?.query?.pages;
    const content = ( 
      <div>
        {result ? Object.values(result).map(item => <Item key={item.pageid} result={item}></Item>)
             : 'No data found'}
      </div>
        )
    return content;
}