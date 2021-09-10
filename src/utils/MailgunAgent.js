var API_KEY = '037da311f9540e588a2ba73fca0bf5ec-a3c55839-5019839c';
var DOMAIN = 'sandbox1144d7e1f53d44269bff8bfefa98183d.mailgun.org';
var mailgunAgent = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

export { mailgunAgent };

