const axios = require('axios')
const url = 'http://checkip.amazonaws.com/';
let response;


exports.lambdaHandler = async (event, context) => {
    try {
        const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world-23-05-2019',
                location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
