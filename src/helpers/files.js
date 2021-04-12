export const stringToObj = (string) => {
  // let data = JSON.parse(JSON.stringify(string));
  /*for (const item in string){
        console.log(item)
        console.log("+*************************************************************+")
    } */
  return JSON.parse(JSON.stringify(string));
};

export async function txtToJSON(path) {
  let data = await fetch(path)
    .then((response) => {
        console.log(path)
       // console.log(response.blob())
      return response.json();
    })
    .then((text) => {
      console.log(typeof text);
      return stringToObj(text);
    });
  console.log(data)
  return data;
}
