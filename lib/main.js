export {Wizard} from './wizard'
export {WizardController} from './controller/wizard-controller'
export {WizardControllerStep} from './controller/wizard-controller-step'

export function configure(aurelia) {
    aurelia.use.globalizeResources(
      './wizard',
      './events',
      './controller/wizard-controller',
      './controller/wizard-controller-step'
    )
}
