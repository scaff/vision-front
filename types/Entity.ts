import { Properties } from './Properties'

export interface Entity {
  name: string
  type: string
  properties: Array<Properties>
}
