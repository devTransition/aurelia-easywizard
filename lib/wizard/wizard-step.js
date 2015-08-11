import {containerless} from 'aurelia-templating'

@containerless()
export class WizardStep {
  step = {}
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
      return 'stepid'
    }
  }
}