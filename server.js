const express = require('express'),
    app = express(),
    port = process.env.PORT || 8001;

require('./routes')(app);

app.listen(port, () => {
    console.log('Kazi WEB server live on: ' + port);
});
