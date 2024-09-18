class AppController {
  static getHomepage(request, response) {
    request.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
