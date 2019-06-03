/**
 * Summary. Provides a class that holds user data.
 *
 * Description. This module provides the ability to manage user data.
 *
 * @file   db/userdb.js
 * @author eman.
 * @since  1.0.0
 */

class UserDB {
    /**
     * Short description. Class used to manage user data.
     *
     * @member   {object} data
     */
    constructor() {
        this.data = {users: []}
    }

    addUser(user) {
        this.data.users.push(user);
    }

    getUser(firstName) {
        return this.data.users.filter(name => name.firstName == firstName)[0]
    }

    getAllUsers() {
        return this.data;
    }
}

module.exports = UserDB;
