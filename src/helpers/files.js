export const stringToObj = (string) => {
  return JSON.parse(JSON.stringify(string));
};

export async function readJSON(path) {
  let data = await fetch(path)
    .then((response) => {
      return response.json();
    })
    .then((text) => {
      return stringToObj(text);
    });
  return data;
}
