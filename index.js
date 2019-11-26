const yaml = require('js-yaml')
const fs = require('fs');

try {
    let fileContents = fs.readFileSync("./data.yaml", 'utf8');
    let data = yaml.safeLoad(fileContents);

    console.log(data.primary_events_indicator);
} catch (e) {
    console.log(e);
}