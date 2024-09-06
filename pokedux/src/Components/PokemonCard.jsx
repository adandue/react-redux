import { setFavorite } from '../actions'
import { useDispatch } from 'react-redux'
import {Card} from 'antd'
import { StarButton } from './StarButton'
import Meta from 'antd/es/card/Meta'
import './PokemonList.css'

const PokemonCard = ({name, image, abilities, types, id}) => {

    const dispatch = useDispatch()
    const typesString = types.map(elem => elem.type.name).join(', ')
    const allAbilities = abilities.map(ability => ability.ability.name).join(', ')

    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId: id}))
    }

    return (
        <Card
            title={name}
            cover={<img src={image} alt={name} />}
            extra={<StarButton isFavorite onClick={handleOnFavorite} />}
        >
            <Meta description={allAbilities} />
            <Meta description={typesString} />
        </Card>
    )
}

export {PokemonCard}