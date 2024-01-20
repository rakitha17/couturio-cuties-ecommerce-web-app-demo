export const getImageType = (imageNumber) => {
  switch(imageNumber) {
    case 1: 
      return 'frock'
    case 2: 
      return 'skirt'
    case 3: 
      return 'denim'
    case 4: 
      return 'top'
    case 5: 
      return 'top and denim'
    case 6: 
      return 'frock'
    case 7: 
      return 'top and skirt'
    case 8: 
      return 'frock'
    case 9: 
      return 'top and denim'

    default:
      return 'dress'
  }
}