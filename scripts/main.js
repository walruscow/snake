requirejs.config({
  urlArgs: "ts="+new Date().getTime(),
  baseUrl : 'scripts',
  paths : { 'require' : '..' }
});

requirejs(['life', 'snake'], function(Life, Snake) {

  // Initialize life!
  var lifeGame = new Life();

  var controls = [
    { id : 'playSnake', handler : Snake.play }
  ];

  function makeHandler(f) {
    return function(e) {
      f();
      e.preventDefault();
    };
  }

  for (var i = 0; i < controls.length; ++i) {
    var el = document.getElementById(controls[i].id);
    el.addEventListener('click', makeHandler(controls[i].handler));
  }
});
