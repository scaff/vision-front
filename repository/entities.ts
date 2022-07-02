import EntitiesManifest from '../config/entities'

export function getComponent(componentType, entitiesType) {
  if (!EntitiesManifest[entitiesType])
    throw new Error(`Entity type ${entitiesType} isn't declared in manifest`)
  if (!EntitiesManifest[entitiesType][componentType]) {
    console.log(entitiesType, componentType)
    throw new Error(
      `Entity component ${componentType} for ${entitiesType} isn't declared in manifest`
    )
  }

  return EntitiesManifest[entitiesType][componentType]
}
