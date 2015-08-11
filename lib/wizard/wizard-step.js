import {containerless, bindable} from 'aurelia-templating'

import s from 'underscore.string'

@containerless()
export class WizardStep {
  @bindable step = {}
  get class() {
    if (this.step.id) {
        if (this.step.isCurrent) {
          return "active"
        }   
    }
    return ""  
  }
  getTitle() {
    let step = this.step
    if (step.title) {
      return step.title
    } else {
      return s(step.id).humanize().titleize().value()
    }
  }
}