import api from './api';

class EbayApiService {
  async getProductsWithLowerPrice(searchPhrase) {
    try {
      const result = await api.get(
        `/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${process.env.EBAY_APP_ID}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${searchPhrase}`
      );

      const items =
        result.data.findItemsByKeywordsResponse[0].searchResult[0].item;

      const products = items.map(item => {
        return {
          title: item.title[0],
          price: item.sellingStatus[0].currentPrice[0].__value__,
          productLink: item.viewItemURL[0],
        };
      });

      products.sort((a, b) => a.price - b.price);

      const response = products.slice(0, 3);

      return response;
    } catch (e) {
      return Promise.reject(e.response.data);
    }
  }
}

export default new EbayApiService();
