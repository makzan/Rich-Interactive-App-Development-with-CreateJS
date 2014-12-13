(function() {
  var App;

  this.solarSystem = {};

  App = (function() {
    function App() {
      console.log("This is our universe.");
      $('.focus-button').click(function() {
        var planet;
        planet = $(this).attr('href').replace('#', '');
        $('#solar-system').removeClass().addClass("focus-" + planet);
        return false;
      });
      $('.detail-button').click(function() {
        var tab;
        tab = $(this).attr('href');
        $('.tab').hide();
        $(tab).show();
        $('.detail-panel').removeClass('out');
        return false;
      });
      $('.detail-panel').click(function() {
        $('.detail-panel').addClass('out');
        return false;
      });
    }

    App.prototype.refresh = function() {};

    return App;

  })();

  new App();

}).call(this);
