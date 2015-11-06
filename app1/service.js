angular.module('myApp').service('mainService', function(){
var talents = ['dance', 'golden weave', 'code all the things', 'cook', 'fly an airplane',
              'answer hard questions', 'golf good', 'eat right', 'speak any language',
              'sculpting', 'piano', 'guitar', 'enjoy running', 'drums', 'be nick saben',
              'race car driver', 'talk good', 'knife handling', 'ping-pong good',
              'non-laziness', 'party with Drake', 'hugging'];

this.getTalents = function(){
  return talents.slice();
}
})
