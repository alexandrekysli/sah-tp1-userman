import * as SQlite from "expo-sqlite"

/**
 * SQlite DB wrapper
 * by kYsLi
 */

const db = SQlite.openDatabase('uplus.db')

export default class Database {
    static initialize() {
        db.transaction(tx => {
            tx.executeSql("CREATE TABLE `user` (`id_user` INTEGER NOT NULL,`name_user` TEXT DEFAULT NULL,`surname_user` TEXT DEFAULT NULL,PRIMARY KEY (`id_user`));")
        }, (e) =>  { state: false }, () => { state: true })
    }
    static ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
        db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                resolve(results)
            }, (error) => {
                reject(error)
            })
        })
    })
    static async getAllUser() {
        let result = [];
        let selectQuery = await this.ExecuteQuery("SELECT * FROM user", []);
        
        var rows = selectQuery.rows;
        for (let i = 0; i < rows.length; i++) {
            var item = rows.item(i);
            result.push({
                id: item.id_user,
                name: item.name_user,
                surname: item.surname_user
            })
        }
        return result;
    }
    static async addUser(name, surname) {
        await this.ExecuteQuery("INSERT INTO user(name_user, surname_user) VALUES (?, ?)", [name, surname]);
    }
    static async updateUserWithId(id, name, surname) {
        await this.ExecuteQuery("UPDATE user SET name_user = ?, surname_user = ? WHERE id_user = ?", [name, surname, id])
    }
    static async removeUserWithId(id) {
        await this.ExecuteQuery("DELETE FROM user WHERE id_user=?", [id])
    }
}