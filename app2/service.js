angular.module('insultApp').service('insultService', function(){
  var insult1 = ['artless', 'bawdy', 'beslubbering', 'bootless', 'cockered', 'craven', 'dankish', 'droning', 'errant', 'fawning', 'forward', 'frothy', 'gleeking', 'gorbellied', 'infectious', 'loggerheaded', 'mammering', 'mewling', 'paunchy', 'pribbling', 'puny', 'rank', 'roguish', 'saucy', 'spleeny', 'spongy', 'tottering', 'villainous', 'wayward', 'yeasty'];
  var insult2 = ['weather-bitten', 'toad-spotted', 'tardy-gaited', 'shard-bone', 'rude-growing', 'rough-hewn', 'reeling-ripe', 'pottle-deep', 'onion-eyed', 'milk-livered', 'ill-nurtured', 'ill-breeding', 'idle-headed', 'hege-born', 'half-faced', 'full-gorged', 'folly-fallen', 'flap-mouthed', 'fen-sucked', 'fat-kidneyed', 'earth-vexing', 'dread-bolted', 'doghearted', 'dizzy-eyed', 'common-kissing', 'dunder-headed', 'clapper-clawed', 'beetle-headed', 'beef-witted', 'bat-fowling', 'base-court'];
  var insult3 = ['apple-john', 'baggage', 'barnacle', 'bladder', 'bum-bailey', 'canker-blossom', 'coxcomb', 'codpiece', 'death-token', 'dewberry', 'flax-wench', 'flirt-gill', 'foot-licker', 'giglot', 'haggard', 'hedge-pig', 'hugger-mugger', 'lewdster', 'lout', 'maggot-pie', 'mammet', 'minnow', 'mold-warp', 'nut-hook', 'pigeon-egg', 'pignut', 'pumpion', 'strumpet', 'vassal', 'wagtail', 'ninnymuggin'];


  function findRandom(arr){
    return arr[Math.floor(Math.random() * (arr.length - 1))];
  }

  this.makeInsult = function(){
    return findRandom(insult1) + " " + findRandom(insult2) + " " + findRandom(insult3);
  }
})
