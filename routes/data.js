var express = require('express');
var router = express.Router();

const cardsOne = [
    'user prefs not working for sorting',
    'console error when filtering', 
    'xss vulnerability in form', 
  ];
  const cardsTwo = [
    'jenkins build failure', 
    'pointing session', 
    'retro',
    'spike: refactor board engine'
  ];
  const cardsThree = [
    'perf degradation on clickthrough', 
    'backport: #233',
  ];
  
  
  
  const cardsFour = [
    'test failures on master', 
    'docker configuration issues'
  ];
  const cardsFive = [
    'socially distanced team outing', 
    'virtual happy hour'
  ];
  const cardsSix = [
    'escalated: loader balancer issues'
  ];

const data = [
    {
      short_description: 'user prefs not working for sorting',
      category: 'bug',
      state: 'to do',
      id: 1
    },
    {
      short_description: 'console error when filtering',
      category: 'bug',
      state: 'in progress',
      id: 2
    },
    {
      short_description: 'xss vulnerability in form',
      category: 'security bug',
      state: 'in progress',
      id: 3
    },
    {
      short_description: 'jenkins build failure',
      category: 'build failure',
      state: 'complete',
      id: 4
    },
    {
      short_description: 'retro',
      category: 'planning',
      state: 'to do',
      id: 5
    },
  ];
  // temp ^ 

router.get('/', function(req, res, next) {
    res.json(data);
});


module.exports = router;