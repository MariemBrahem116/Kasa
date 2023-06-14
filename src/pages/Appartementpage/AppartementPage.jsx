import "../Appartementpage/AppartementPage.scss"
import Collapse from '../../components/Collapse/Collapse'
import AppartementHeader from '../../components/CardsContent/CardsContent'
import Carroussel from '../../components/Carroussel/Carroussel'

import { useParams} from "react-router-dom"
import datas from '../../data/db.json'
import ErrorPage from "../ErrorPage/ErrorPage"


function AppartementPage() {
  const { idLogement } = useParams();

    console.log(idLogement)
    const data = datas.find((element) => element.id === idLogement);
    console.log(data)
    if (!data) return(<ErrorPage/>)
  return (
    <div className='appartementPage'>
        <Carroussel  photos={data.photos} />
        <AppartementHeader flat={data} />
        <div className='AppartementDescriptionScroll'>
            <Collapse title="Description" content={data.description}/>
            <Collapse title="Equipements" content={data.equipements.map((eq) => (<p key={eq}>{eq}</p>))}/>
        </div>
    </div>
  )
}

export default AppartementPage