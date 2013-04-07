# Backbone.Marrow

## Usage

### Model Caching

When the `cache` option is `true`, any model types instantiated with the same
id and url will return the same model instance. For example:

```javascript
var Contact = Backbone.Model.extend({
  cache: true,
  urlRoot: '/contacts'
});
  
new Contact({ id: 123 }) === new Contact({ id: 123 }) // true
```

## Configuration

## Testing Environment

Install [Node.js](http://nodejs.org/). Make sure you've installed 
[Grunt](http://gruntjs.com/) and [Bower](https://github.com/twitter/bower)
globally:

```
npm install grunt-cli -g
npm install bower -g
```
Then, install the development dependencies:

```
npm install
```
Lint and run the tests with:
```
npm test
```
