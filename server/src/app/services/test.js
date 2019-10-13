import 'dotenv/config';
import EbayApiService from './EbayApiService';

EbayApiService.getProductsWithLowerPrice('iphone')
  .then(res => {
    console.log(JSON.stringify(res));
    process.exit(0);
  })
  .catch(e => {
    console.log(e.errorMessage[0].error);
    process.exit(1);
  });
