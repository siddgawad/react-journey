import { TagManager } from "./components/TagManager";
import { TagProvider } from "./context/TagProvider";


export default function App(){
 return(
  <TagProvider>
    <TagManager />
  </TagProvider>
 )
}