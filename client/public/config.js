require.config({
  shim: {

  },
  paths: {
    backbone: "../bower_components/backbone/backbone",
    jquery: "../bower_components/jquery/dist/jquery",
    react: "../bower_components/react/react-with-addons",
    alt: "../bower_components/alt/dist/alt-with-addons",
    requirejs: "../bower_components/requirejs/require",
    "socket.io-client": "../bower_components/socket.io-client/socket.io",
    underscore: "../bower_components/underscore/underscore"
  },
  map: {
      '*': {
          'react/addons': 'react'
      }
  },
  packages: [

  ]
});
