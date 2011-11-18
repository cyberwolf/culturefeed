/**
 * Handler for the form redirection error.
 */
Drupal.ajax.prototype.error = function (response, uri) {
  // alert(Drupal.ajaxError(response, uri)); // we don't want Drupal's default behavior to show alerts!
  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  // Undo hide.
  $(this.wrapper).show();
  // Re-enable the element.
  $(this.element).removeClass('progress-disabled').removeAttr('disabled');
  // Reattach behaviors, if they were detached in beforeSerialize().
  if (this.form) {
    var settings = response.settings || this.settings || Drupal.settings;
    Drupal.attachBehaviors(this.form, settings);
  }
};

(function ($) {
  
  $(document).ready(function() {
    for (var base in Drupal.settings.ajax) {
      if (Drupal.settings.ajax[base].event == 'ajaxload') {
        $(Drupal.settings.ajax[base].selector).trigger('ajaxload');
      }
    }
  });

})(jQuery);