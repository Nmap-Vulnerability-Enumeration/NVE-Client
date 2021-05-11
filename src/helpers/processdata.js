export function handleEmpty(item, layer = null, swap = false) {
  if (item === "" || item == null) {
    return "NA";
  } else {
    if (layer) {
      return item[layer];
    } else if (swap) {
      for (const [key, value] of Object.entries(item)) {
        return value;
      }
    }
    return item;
  }
}

export function doesExist(item) {
  if (item === "" || item == null) {
    return false;
  } else {
    return true;
  }
}

export function dropNA(list) {
  if (list == null) {
    return [];
  }
  return list.filter((data) => doesExist(data));
}

export function sliceObject(data, index, itemsPerPage) {
  let numItems = Object.keys(data).length
  let start = getStart(index, itemsPerPage)
  let end = getEnd(index, itemsPerPage)
  console.log(end)
  //handle overflow
  end = end > numItems ? start + (numItems - start) : end
  console.log(start, end)

  return Object.keys(data).slice(start, end)

}

export function getStart(index, itemsPerPage) {
  return parseInt(index) * itemsPerPage;
}

export function getEnd(index, itemsPerPage) {
  return parseInt(index + 1)  * itemsPerPage
}

export function secondsToDhms(seconds) {
  if (seconds == "NA") {
    return seconds;
  }
  seconds = parseInt(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);

  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

export function getNumPages(numObjects, objectsPerPage) {
  return Math.floor(numObjects / objectsPerPage) + 1;
}
