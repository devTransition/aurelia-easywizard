export {Wizard} from './wizard'

export function configure(aurelia) {
    aurelia.globalizeResources(
      './wizard',
      './events'
    )
}
