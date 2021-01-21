'use strict';
class B757_200_EADI extends BaseInstrument {
  // match id="MY_INSTRUMENT" in html
  get templateID() { return 'MY_INSTRUMENT'; }
  // true if you want people to be able to click and type on the instrument
  get isInteractive() { return false; }
  // i'm not sure what this actually changes but set it to true if its a glass cockpit instrument i guess
  get isGlassCockpit() { return true; }
 
  connectedCallback() {
    // code here runs when html is mounted
  }

  // runs every frame
  Update() {
    super.Update();
    if (this.CanUpdate()) {
      // code here runs based on the "update frequency" setting in graphics
    }
  }

  // receive H events here
  onInteractionEvent(event) {
    const eventName = String(event);
    // ...
  }
}

registerInstrument('my-instrument-element', B757_200_EADI);