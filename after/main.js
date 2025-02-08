import { androids } from './data.js'

const getAndroidByCode = (modelCode) => {
    let highestYear = 0;
    let foundAndroid;
    let foundModel;

    foundAndroid = androids.find((android) => {
      foundModel = android.modelYear.find((model) => {
        if (parseInt(model.year) > highestYear) {
          highestYear = parseInt(model.year);
        }
        return model.modelCode == modelCode
      })
      return foundModel;
    })
    return {
      id: foundAndroid.id,
      name: foundAndroid.name,
      category: foundAndroid.category,
      year: foundModel.year,
      defaultColour: foundModel.defaultColour,
      modelCode: foundModel.modelCode,
      currentYear: highestYear
    };
}

console.log(getAndroidByCode(60001));
