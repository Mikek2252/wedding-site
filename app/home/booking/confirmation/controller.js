import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    confirmationEmail() {
      const confirmation = this.get('model');
      confirmation.validate().then(({ validations }) => {
        this.set('showEmailError', true);
        if (validations.get('isValid')) {
          confirmation.save().then(() => {
            //TODO: Show message
          }).catch(() => {
            //TODO: Show error message
          });
        }
      })
    }
  }
});
