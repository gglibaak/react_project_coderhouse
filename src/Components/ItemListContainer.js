import ItemCount from './ItemCount'

const ItemListContainer = (props) => {


    const onAdd = (value) => {
        console.log(value);
    }
    return (<>
            <div>
                <h3>{props.greeting}</h3>
            </div>
            <ItemCount stock='8' initial='1' onAdd={onAdd} />
    </>)
}


export default ItemListContainer