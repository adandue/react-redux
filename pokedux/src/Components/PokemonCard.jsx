import {StarOutlined} from '@ant-design/icons'
import {Card} from 'antd'
import Meta from 'antd/es/card/Meta'
import './PokemonList.css'

const PokemonCard = ({name}) => {
    return (
        <Card
            title={name}
            cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' alt='' />}
            extra={<StarOutlined />}
        >
            <Meta description='fire, magic' />
        </Card>
    )
}

export {PokemonCard}