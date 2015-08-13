export {Wizard} from './wizard'
export {WizardController} from './controller/wizard-controller'

export function configure(aurelia) {
    aurelia.globalizeResources(
      './wizard',
      './events'
    )
}
