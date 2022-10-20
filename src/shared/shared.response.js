

exports.constructSuccessResponse = async (response) => {
    return {
       data: response? response : null,
       resp_code: "00",
       resp_message: "Successful"
    }
 }
 exports.constructFailedResponse = async (message) => {
    return {
       //    data:response['data'],
       resp_code: '01',
       resp_message: message ? message : "Error while processing request ...",
       error: true
    }
 }
 exports.constructException = async (response) => {
    return {
       //    data:response['data'],
       resp_code: '04',
       resp_message: response.message,
       error: true
    }
 }