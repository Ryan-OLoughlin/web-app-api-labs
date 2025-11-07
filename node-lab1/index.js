// Load the http module to create an http server.
import http from 'http';
import dotenv from 'dotenv';
import greeting from './greeting.js';

dotenv.config();
const port = process.env.PORT;

// Configure our HTTP server to receive requests and send responses
const server = http.createServer((req, res) => {
    // Check headers for language preference
    let lang = req.headers['accept-language'];
    const defaultLang = 'en';
    // If language is not in greeting file, use default
    if(!greeting[lang]) lang=defaultLang;
    // Prepare response
    const response={
        lang: lang,
        message: greeting[lang],
    };
    // Add headers
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Language': response.lang});
    // End response and send back
    res.end(response.message);
});


server.listen(port);

// Put a friendly message on the terminal
console.log(`Server running at ${port}`);
