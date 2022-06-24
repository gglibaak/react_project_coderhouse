import ItemCount from './ItemCount'

const ItemListContainer = (props) => {

    
    return (<>
            <div>
                <h3>{props.greeting}</h3>
            </div>
            <ItemCount stock={8} initial={1}  />
    </>)
}


export default ItemListContainer