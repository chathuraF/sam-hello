exports.lambdaHandler = async (event, context) => {
    return {
      'statusCode': 200,
      'body': JSON.stringify({
          message: 'hello world full build test ' + ' -- ' +  process.env.ENV_NAME
      })
    }
};
