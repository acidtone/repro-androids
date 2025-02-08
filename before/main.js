import { androids } from './data.js'

const getAndroidByCode = (modelCode) => {
    let highestYear = 0;
    let returnObject;

    for (const [id, android] of Object.entries(androids)) {
      for (const [year, modelYearData] of Object.entries(android.modelYear)) {
        if (parseInt(year) > highestYear) {
          highestYear = parseInt(year);
        }
        if (modelYearData.modelCode == modelCode) {
          returnObject = modelYearData;
          returnObject.year = parseInt(year);
          returnObject.id = id;
          returnObject.name = android.name;
          returnObject.category = android.category;
        }
      }
      if (returnObject) {
        returnObject.currentYear = highestYear;
      }
    }
    
    return returnObject;
}

console.log(getAndroidByCode(60001));
