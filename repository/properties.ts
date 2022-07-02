import PropertiesManifest from '../config/properties'
import { getProperties } from '../repository/entities'

export function getProperty(componentType, propertyType) {
  if (!PropertiesManifest[propertyType]) {
    console.log(propertyType)
    throw new Error(`Property type ${propertyType} isn't declared in manifest`)
  }
  if (!PropertiesManifest[propertyType].components[componentType]) {
    throw new Error(
      `Property component ${componentType} for ${propertyType} isn't declared in manifest`
    )
  }

  return PropertiesManifest[propertyType].components[componentType]
}

export function getMatchingProperty(propertyToMatch, entity) {
  const propertiesList = getProperties(entity.type)

  return propertiesList[propertyToMatch.name]
}
