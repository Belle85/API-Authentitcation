
//This is what the code would look like without using express-promise-router
// module.exports = {
//     signUp: async (req, res, next) => {
//         try {
//             [MY CODE]
//         } catch(error){
//             next(error);
//         }
//     }
// }

module.exports = {
    signUp: async (req, res, next) => {
        console.log('UserController.signUp() called!');
    },

    signIn: async (req, res, next) => {
        console.log('UserController.signIn() called!');
    },

    secret: async (req, res, next) => {
        console.log('UserController.secret() called!');
    },
}