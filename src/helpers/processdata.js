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

export function doesExist(item) {
  if (item === "" || item == null){
    return false;
  } 
  else{
    return true
  }
}

export function dropNA(list){
  if (list == null){
    return []
  }
  return list.filter(data=> doesExist(data))
}