/*
 * backbone.marrow v0.1.0
 * Copyright 2013, Matt Morgan (@mlmorg)
 * MIT license
 */
(function () {

  "use strict";

  // Alias libraries
  var root = this;
  var _ = root._;
  var Backbone = root.Backbone;

  // References for overridden methods
  var _constructor = Backbone.Model.prototype.constructor;

  // Backbone.Marrow
  // ---------------
  var Marrow = Backbone.Marrow = {

    models: {},

    get: function (key) {
      return this.models[key];
    },

    set: function (key, value) {
      this.models[key] = value;
    }

  };

  // Backbone.Model
  // --------------
  Backbone.Model = Backbone.Model.extend({

    constructor: function () {
      _constructor.apply(this, arguments);

      // Get the model's url, catching any errors
      var url;
      try {
        url = _.result(this, 'url');
      } catch(e) {}

      // Only handle models that have a url, have been saved to the server, and
      // have the cache option set to true
      if (url && !this.isNew() && _.result(this, 'cache')) {
        var cached = Marrow.get(url);

        // Return cached models
        if (cached) {
          return cached;
        }

        // Add model to the cache
        else {
          Marrow.set(url, this);
        }
      }
    }

  });

}).call(this);
