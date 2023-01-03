import { HeroList } from "../components/HeroList"
import { getHeroesByPublisher } from "../helpers"


export const DcPage = () => {
  return (
    <>
        <h1>DC Comics</h1>
        <hr />

        <HeroList publisher={'DC Comics'}/>
    </>
  )
}