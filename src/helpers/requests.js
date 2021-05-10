export function setUp1(address, mask){

    var formData = new FormData();

    formData.append("deviceIP", address)
    formData.append("subnet", mask)

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: formData
    };
    
    return requestOptions
}


export function setUp(address, mask){

    var formData = new FormData();

    formData.append("subnet", mask)
    formData.append("deviceIP", address)
   

    var requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
      };
    
    return requestOptions
}

export function wasSuccessful(response){
    return response === 200
}

export function redirect(history, IpAddress, SubnetMask){
   history.push(
        "/scan/IpAddress=" +
          IpAddress +
          "&SubnetMask=" +
          SubnetMask
      );
}