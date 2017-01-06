##Software Engineering Module 2 Express JS

[![WE PLAY MUSIC](./readme.img/music.png?raw=true)](https://coen3463-m2t5.herokuapp.com)

#[We PLAY MUSIC](https://coen3463-m2t5.herokuapp.com) is a Music Service system built on top of the following libraries:

* [Node.js](http://nodejs.org/) - Application Server
* [Express.js](http://expressjs.com/) - Node.js Web Framework
* [MongoDb](http://mongodb.org/) - Database Storage
* [Jade](http://jade-lang.com/) - HTML Templating Engine
* [Nodemailer](https://nodemailer.com/) - Node.js > SMTP Server Middleware


##Installation & Setup
1. Install [Node.js](https://nodejs.org/) & [MongoDB](https://www.mongodb.org/) if you haven't already.
2. Clone this repository and install its dependencies.
		
		> git clone https://github.com/dretorrente/coen3463-m2t5.git
		> cd coen3463-m2t5
		> npm install
		
3. In a separate shells start the MongoDB daemon and the CLS that will connect to daemon.

		> mongod
		> mongo

4. From within the coen3463-m2t5 directory, start the server.

		> node ./bin/www
		
5. Open a browser window and navigate to: [http://localhost:3000](http://localhost:3000)

##Live Demo

A [Live Demo](https://coen3463-m2t5.herokuapp.com) is deployed on heroku using the mlab mongodb free database.

##Contributing

Questions and suggestions for improvement are welcome.