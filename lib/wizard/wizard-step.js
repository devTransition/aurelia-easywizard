import {containerless, bindable} from 'aurelia-templating'

import s from 'underscore.string'

@containerless()
export class WizardStep {
  @bindable step = {}
  get class() {
    if (this.step.getId()) {
        if (this.step.getIsCurrent()) {
          return "active"
        }   
    }
    return ""  
  }
  getTitle() {
    let step = this.step
    let title = step.getTitle()
    if (title) {
      return title
    } else {
      return s(step.getId()).humanize().titleize().value()
    }
  }
}