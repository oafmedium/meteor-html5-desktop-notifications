Package.describe({
  name: 'oaf:html5-desktop-notifications',
  summary: 'Wrapper for https://github.com/ttsvetko/HTML5-Desktop-Notifications',
  version: '1.0.0',
  git: 'https://github.com/oafmedium/meteor-html5-desktop-notifications'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('html5-desktop-notifications/desktop-notify.js', 'client');
});
