describe('Backbone.Model', function () {

  var attrs;

  beforeEach(function () {
    attrs = { id: 1 };
  });

  describe('when instantiating', function () {

    var Model, model, anotherModel, url;

    beforeEach(function () {
      Model = Backbone.Model.extend({
        url: function () {
          return '/models/' + this.id;
        }
      });
    });

    afterEach(function () {
      Backbone.Marrow.models = {};
    });

    describe('when models share the same url', function () {

      describe('when cache option is true', function () {

        beforeEach(function () {
          Model.prototype.cache = true;
          anotherModel = new Model(attrs);
          model = new Model(attrs);
        });

        it('should return existing model', function () {
          model.should.equal(anotherModel);
        });

      });

      describe('when cache option is not set', function () {

        beforeEach(function () {
          anotherModel = new Model(attrs);
          model = new Model(attrs);
        });

        it('should return new model', function () {
          model.should.not.equal(anotherModel);
        });

      });

    });

  });

});
