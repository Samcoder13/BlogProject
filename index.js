const serverSetup = require('./server');
const PORT = process.env.PORT || 4000;

serverSetup().listen(PORT, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log(`Server started at PORT ${PORT}`);
    }
});