import EntitiesManifest from '../config/entities'

export function getComponent(componentType, entityType) {
  if (!EntitiesManifest[entityType])
    throw new Error(`Entity type ${entityType} isn't declared in manifest`)
  if (!EntitiesManifest[entityType].components[componentType]) {
    throw new Error(
      `Entity component ${componentType} for ${entityType} isn't declared in manifest`
    )
  }

  return EntitiesManifest[entityType].components[componentType]
}

export function getProperties(entityType) {
  if (!EntitiesManifest[entityType])
    throw new Error(`Entity type ${entityType} isn't declared in manifest`)

  return EntitiesManifest[entityType].properties
}
