export function setUp(address, mask){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deviceIP: address, subnet: mask })
    };
    
    return requestOptions
}