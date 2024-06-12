import * as ExpoSQLite from "expo-sqlite"

const db = ExpoSQLite.openDatabase("sessions.db")

export const initSQLiteDB = () => {
    console.log("Will create table")
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("CREATE TABLE IF NOTE EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);"),
            [], 
                (_, result) => resolve(result), 
                (_, error) => reject(error)
        })
    })
    return promise
}