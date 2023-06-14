import "./AppartementCard.scss"
import Cards from '../Cards/Cards.jsx'
import appartements from '../../data/db.json'
import { Link } from "react-router-dom"

function AppartementCard() {
  return (
    <div className='appartement-grid'>
      {
        appartements.map((appartement) => (
          <Link key={appartement.id} to={`/flat/${appartement.id}`}>
          <Cards  title={appartement.title} imgUrl={appartement.cover} id={appartement.id}/>
          </Link>
      ))}
    </div>
  )
}

export default AppartementCard