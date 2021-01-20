const axios = require('axios');
const { mapperItemDetail, mapperItems } = require('./mapper');
const Service = {};
const ApiEndpoint = 'https://api.mercadolibre.com';
const SearchPath = 'sites/MLA/search';

Service.GetItems = (params) => new Promise(async(resolve, reject) => {
    try {
        const itemsFinded = await axios.get(`${ApiEndpoint}/${SearchPath}`, {params});
        const mapper = mapperItems(itemsFinded.data)
        
        return resolve({data: mapper, status: itemsFinded.status});
    } catch (error) {
        console.log(error);
        return reject(error);
    }
  });

  Service.GetItem = (id) => new Promise(async(resolve, reject) => {
    try {
        const itemFinded = await axios.get(`${ApiEndpoint}/items/${id}`);

        if(itemFinded.data.descriptions) {
            const descriptionsfinded = await Promise.all(await itemFinded.data.descriptions.map(async (decription) => {
                const { data } = await axios.get(`${ApiEndpoint}/items/${decription.id.split('-')[0]}/description`);
              
                return {...data, ...decription};
            }));
            itemFinded.data.descriptions = descriptionsfinded;
        }
        const mapper = mapperItemDetail(itemFinded.data)
        
        return resolve({data: mapper, status: itemFinded.status});
    } catch (error) {
        console.log(error);
        return reject(error);
    }
  });
module.exports = Service;

