import './main';

var htmlTag = document.getElementsByTagName('html')[0];
var noAngularDOM;

//Start of hot-reloader
System.trace = true;
noAngularDOM = htmlTag.cloneNode(true);
if ((!System.hotReloader)) {
  System.import('systemjs-hot-reloader').then(HotReloader => {
    System.hotReloader = new HotReloader.default('http://localhost:8081/');
    System.hotReloader.on('change', function(name) {
      console.log(name, 'changed');
    });
    console.log('systemjs-hot-reloader enabled');
  });
}
