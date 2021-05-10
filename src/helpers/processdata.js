export function handleEmpty(item, layer=null, swap = false) {
  if (item === "" || item == null){
    return "NA";
  } 
  else {
    if (layer){
        return item[layer]
    }
    else if(swap){
       for (const [key, value] of Object.entries(item)){
            return value
        }
    }
    return item;
  }
}
