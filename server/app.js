// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var path = require('path');
var passport = require('passport');
var localStrategy = require('passport-local' ).Strategy;
var mongoose = require('mongoose');
var multipart = require('connect-multiparty');
lirc_node = require('lirc_node');
var sensor = require('node-dht-sensor');
var AsyncPolling = require('async-polling');
var marion = false;
var temperatureNow;
var autoToggle = false;
var minTemp = 21;
var maxTemp = 23;
var temperature = 18;
var mode = "hot";


function AutomaticHeat() {
	command = {remote: "'REMOTE_MARI'", command: "'KEY_MARIHO22'"}
        	remote = command.remote;
        	command = command.command;
        	lirc_node.irsend.send_once(JSON.stringify(remote), JSON.stringify(command), function() {
  			  console.log("ok")
          mode = "hot";
          temperature = 22;

	});
}

function AutomaticCool() {
	command = {remote: "'REMOTE_MARI'", command: "'KEY_MARICO22'"}
        	remote = command.remote;
        	command = command.command;
        	lirc_node.irsend.send_once(JSON.stringify(remote), JSON.stringify(command), function() {
  				console.log("ok")
          mode = "cold";
          temperature = 22;
			});
}

AsyncPolling(function (end) {
    sensor.read(22, 17, function(err, temperature, humidity) {
    if (!err) {
        console.log('temperatura do ambiente: ' + temperature.toFixed(1) + '°C, ' +
            'umidade do ambiente: ' + humidity.toFixed(1) + '%'
        );
        console.log(marion);
        temperatureNow = temperature.toFixed(1);
        if (autoToggle) {
          if ((temperature.toFixed(1) < minTemp) && (!marion)) {
          	command = {remote: "'REMOTE_MARI'", command: "'KEY_MARION'"}
          	remote = command.remote;
          	command = command.command;
          	lirc_node.irsend.send_once(JSON.stringify(remote), JSON.stringify(command), function() {
    				  console.log("ok")
    				  marion = true;
  			    });
  		      setTimeout(AutomaticHeat, 3000);
          }

          if (((temperature.toFixed(1) > minTemp) && (temperature.toFixed(1) < maxTemp)) && (marion)) {
          	command = {remote: "'REMOTE_MARI'", command: "'KEY_MARION'"}
          	remote = command.remote;
          	command = command.command;
          	lirc_node.irsend.send_once(JSON.stringify(remote), JSON.stringify(command), function() {
    				  console.log("ok")
    				  marion = false;
  			    });
          }

          if ((temperature.toFixed(1) > maxTemp) && (!marion)) {
          	command = {remote: "'REMOTE_MARI'", command: "'KEY_MARION'"}
          	remote = command.remote;
          	command = command.command;
          	lirc_node.irsend.send_once(JSON.stringify(remote), JSON.stringify(command), function() {
    				  console.log("ok")
    				  marion = true
  			    });
  		      setTimeout(AutomaticCool, 3000);
          }
        }
    }

    else {
    	console.log(err);
    }
});
    end();
    // This will schedule the next call.
}, 300000).run();


mongoose
var options = {
  db: { native_parser: true },
  server: { poolSize: 5 },
  user: 'myTester',
  pass: 'xyz123'
}

// create instance of express
var app = express();


// define middleware
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join("./../", 'views'));
app.use(multipart());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('express-session')({
    secret: 'keyboard cat',
    rolling: true,
    resave: false,
    saveUninitialized: true,
    cookie: { expires: new Date(Date.now()+ 7200000) }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req,res,next){
  if (req.isAuthenticated()) {
    req.session._garbage = Date();
    req.session.touch();
  }
  next()
})


lirc_node.init();

app.use(express.static(path.join("./../", 'public')));

// routes
app.get('/', function(req, res){
  res.render('index', { title: 'Express' });
});
app.post('/command', function(req, res){
	 command = req.body.command.command;
	 remote = req.body.command.remote;
   temperature = req.body.command.temperature;
   mode = req.body.command.mode;
   console.log(req.body.command.mode);
    lirc_node.irsend.send_once(JSON.stringify(remote), JSON.stringify(command), function() {
      if (command == "'KEY_MARION'") {
        marion = !marion;
      } 
      res.send('ok', 200);
  });
});

app.get('/tempnow', function(req, res) {
  tempdata = {currentTemp: temperatureNow, isOn: marion, auto: autoToggle, temperature:temperature, mode:mode}
  res.send(tempdata, 200);

});

app.get('/autotoggle', function(req, res) {
  autoToggle = !autoToggle;
  res.send(autoToggle, 200);

});

app.get('/marisettings', function(req, res) {
  temps = {"minTemp":minTemp, "maxTemp":maxTemp}
  res.send(temps, 200);

});

app.post('/marisettings', function(req, res) {
  minTemp = req.body.command.minTemp;
  maxTemp = req.body.command.maxTemp;
  console.log("AAAAAAAAAAAAAAAA" + minTemp)
  console.log(maxTemp)
  res.send("ok", 200);

});

// error hndlers
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

function restrict(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      status: false
    });
  }
  else {
    next();
  }
}

module.exports = app;
