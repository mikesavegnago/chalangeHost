# Test Fullstack

# Requirements:

    Git.
    Composer.
    PHP 7.4+.
    MySQL.
    Slim Framework
    
# With Git:

In your terminal execute this commands:

<p>$ git clone https://github.com/mikesavegnago/challengeHost.git </p>
<p>$ cd challengeHost</p>

<p>Here we have two steps to do:</p>

<p>1 - Enter in backend folder, install and run the server</p>
<p>$ cd backend</p>
<p>$ composer install</p>
<p>$ vendor/bin/phinx migrate -e development</p>
<p>$ php -S localhost:8080 -t public</p>
<p>Make sure that this server will be runnig when you start the frontend server</p>

<p>2 - Enter in frontend folder, install and run the server</p>
<p>$ cd frontend</p>
<p>$ npm ci</p>
<p>$ npm start</p>

