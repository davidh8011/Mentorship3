 const elements = {
     usernameField: '#user-name',
     passwordField: '#password',
     loginButton: '#login-button'

 };

 const commands = [
     {
         standardLogin(){
             return this.setValue('@usernameField', 'standard_user')
                        .setValue('@passwordField', 'secret_sauce')
                        .click('@loginButton')
         },

         problemUserLogin(){
            return this.setValue('@usernameField', 'problem_user')
                       .setValue('@passwordField', 'secret_sauce')
                       .click('@loginButton')
        },

        incorrectLogin(){
            return this.setValue('@usernameField', 'wrong_username')
                        .setValue('@passwordField', 'wrongpw')
                        .click('@loginButton')
        }
     }


 ];
 
 module.exports = {
     elements: elements,
     commands: commands,
     url: function() {
         return 'https://www.saucedemo.com/'
     }
 }