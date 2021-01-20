

const author = {
    name: 'Daniel Alejandro',
    lastname: 'Eslava Herrera'
};

exports.mapperItemDetail = (values) => {
    if(!values){
        return {}
    }
    const {id, title, price, currency_id, pictures, thumbnail, condition, shipping, sold_quantity, descriptions} = values
    return {
        author,
        item:{
            id,
            title,
            price: {
                currency: currency_id,
                amount: price,
                decimals: 0.0,
            },
            picture: (pictures && pictures[0].url) || thumbnail,
            condition,
            free_shipping: shipping && !!shipping.free_shipping,
            sold_quantity,
            description: descriptions ? descriptions[0].plain_text : ''

        }
    }
}
exports.mapperItems = (values) => {
    if(!values){
        return {}
    }
    const {filters, available_filters, results} = values
    const filterAvailable = filters.length === 0;
    const filter = filterAvailable ? available_filters:filters
    const categoriesFilter = filter.find(itemFilter => itemFilter.id === 'category') 
    let categories 
    if(filterAvailable){
        categories = categoriesFilter.values.map(itemCategory => itemCategory.name).slice(0, 2)

    }else{
        categories = categoriesFilter.values[0].path_from_root.map(itemCategory => itemCategory.name)
    }
    const items = results.map(itemResult => {
        const {item} = this.mapperItemDetail(itemResult);
        delete item.description;
        delete item.sold_quantity; 
        return item
    })
    return {
        author,
        categories: categories || [],
        items 
    }
}