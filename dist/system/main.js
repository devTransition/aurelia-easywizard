System.register(['./wizard'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalizeResources('./wizard', './events');
  }

  return {
    setters: [function (_wizard) {
      _export('Wizard', _wizard.Wizard);
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDL0IsV0FBTyxDQUFDLGtCQUFrQixDQUN4QixVQUFVLEVBQ1YsVUFBVSxDQUNYLENBQUE7R0FDSjs7OztnQ0FQTyxNQUFNIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiLi4vbGliLyJ9