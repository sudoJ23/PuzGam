cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-exit.exit",
      "file": "plugins/cordova-plugin-exit/www/exit.js",
      "pluginId": "cordova-plugin-exit",
      "clobbers": [
        "cordova.plugins.exit"
      ]
    },
    {
      "id": "kr.co.joycorp.cordova.exitapp.exitApp",
      "file": "plugins/kr.co.joycorp.cordova.exitapp/www/ExitApp.js",
      "pluginId": "kr.co.joycorp.cordova.exitapp",
      "merges": [
        "navigator.app"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-exit": "1.0.3",
    "kr.co.joycorp.cordova.exitapp": "1.0.0"
  };
});