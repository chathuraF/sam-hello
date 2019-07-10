const axios = require('axios')

const zmDataNew =  {
    bookingReference :'A12345' ,
    sellingCompanyCode: 'CHSYDS',
    userId: 'Web.Booking',
    ResponseDetails: {
      billingDetails: {
        addressLine1: "15 Redington Gardens",
        city: "London Victoria",
        region: "London",
        countryCode: "UK",
        zipPostalCode: "NW3 7SA"
      },
      payerDetails: {
        fullName: 'Fname Lname',
      },
      payPalPaymentDetails: {
        amount: '100',
        transactionID: '5063474446636306504008',
        merchantCode: 'TTC_CHSYDS_E',
        payerFirstName: 'Fname',
        payerLastName: 'Lname',
        payerId: 'FAKE_PAYER_ID',
        payPalToken: 'EC-3VV62800JR932760X',
        requestToken: 'AhjrrwSTEn3S7cdAqZlIEkt4eVlLFLeHlZSx0gV9DjJDJpJl6MVw2daTEn3S7cdAqZlIAAAA+w11',
        captureId: 'FAKE_TRANSACTION_ID'
      }
    }
  };
  
  
async function updateTropics(paymentRequest){
    //const tropicsConfirmPaymentRequest = _removeTropicsUnsupportedFieldsFromRequest(confirmPaymentRequest);
    const tropicsConfirmPaymentRequest = paymentRequest;
    
    const tropicsBaseUrl = 'http://tropicsdev.corp.ttc/tropics/api';
    
    const tropicsUserName = 'tropics.dev';
    const tropicsPassword = 'J1r@1sAn0yy1ng!';

    //const tropicsUserName = 'adil.shamshad';
    //const tropicsPassword = 'Tropics01';

    

    const postUrl = `${tropicsBaseUrl}/payment/cybersource/response/${tropicsConfirmPaymentRequest.userId}/${tropicsConfirmPaymentRequest.sellingCompanyCode}/${tropicsConfirmPaymentRequest.bookingReference}`;

    let headers = {
      'Authorization': 'Basic ' + new Buffer.from(tropicsUserName + ':' + tropicsPassword).toString('base64'),
      'Content-Type': 'application/json'
    };

    console.log('New encrypt: ' + new Buffer.from(tropicsUserName + ':' + tropicsPassword).toString('base64'))

  await axios({
      method: 'post',
      headers: headers,
      timeout: 25000,
      url: postUrl,
      data: tropicsConfirmPaymentRequest,
      json: true
    })
    .then(function (response) {
      console.log('===================================');
      console.log(response);
      console.log('===================================');
      return response;
    })
    .catch(function (error) {
      console.log('========== Error ==========');
      console.log(error);
      console.log('=========== End of error ===================');
      return error;
    });

}

exports.handler = async (event) => {
    
        let response = updateTropics(zmDataNew);
        return response;
};

