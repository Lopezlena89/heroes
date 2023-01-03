import { Herocard } from './';
import { getHeroesByPublisher } from '../helpers'


export const HeroList = ({publisher}) => {

    const heroes =getHeroesByPublisher(publisher);

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {heroes.map(heroe=>(
           <Herocard
            key={heroe.id}
            {...heroe}
           />
        )
        )}
    </div>
  )
}