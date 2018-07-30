import Expo from 'expo';

import Lang from '../lang/Router';

class Profileman {
    static db;

    setup() {
        return new Promise((resolve, reject) => {
            try {
                this.db = Expo.SQLite.openDatabase('profiles');
            } catch (e) {
                console.error(e);
                reject(new Error(Lang.unableToOpenDb));
            }

            // Schema
            this.db.transaction((t) => {
                t.executeSql('CREATE TABLE IF NOT EXISTS profiles (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)');
                t.executeSql('CREATE TABLE IF NOT EXISTS institutes (id TEXT PRIMARY KEY, name TEXT)');
            }, (e) => {
                console.error(e);
                reject(new Error(Lang.unableToOpenDb));
            }, resolve);
        });
    }

    queryAsync(sql, args) {
        return new Promise((resolve, reject) => {
            this.db.transaction((t) => {
                t.executeSql(sql, args, (t, res) => resolve(res), (t, e) => reject(e));
            });
        });
    }

    async getProfiles() {
        return (await this.queryAsync('SELECT * FROM profiles')).rows;
    }
}

export default new Profileman();
