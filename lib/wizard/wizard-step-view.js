import {Validation} from 'aurelia-validation'
import {Events} from '../events'
import {noView} from 'aurelia-templating'

@noView()
export class WizardStepView {
  static inject() {return [Validation, Events]}
  constructor(validation, events, element) {
    this.validation = validation.on(this)
    this.events = events
  }
  stepProperties = {}
  activate(step) {
    this.step = step
    this.step.ensureValidation(this.validation)
    this.stepProperties = this.step.properties()
    Object.assign(this, this.stepProperties)
  }
  submit() {
    let self = this
    return this.validation.validate().then(() => {
      updateStepProperties.call(this)
      this.step.updateProperties(this.stepProperties)
      this.events.publish("wizard:current:step:valid", this.step)
    }).catch(function(error)  {
      console.log("wizard validation failed", self, error)
    })
  } 
}

var updateStepProperties = function() {
  Object.keys(this.stepProperties).forEach((property) => {
    this.stepProperties[property] = this[property]
  })
}