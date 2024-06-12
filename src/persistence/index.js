import * as ExpoSQLite from "expo-sqlite"

const db = ExpoSQLite.openDatabase("sessions.db")

export const initSQLiteDB = () => {
    console.log("Will create table")
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL, nombreEmpresa TEXT NOT NULL, role TEXT NOT NULL);",
                tx.executeSql(
                    [],
                    (_, result) => resolve(result),
                    (_, error) => reject(error)
                )
            )
        })
    })
    return promise
}
export const insertSession = ({
    nombreEmpresa,
    email,
    localId,
    token,
    role
}) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO sessions (nombreEmpresa, localId, email, token, role) VALUES (?, ?, ?, ?, ?);',
                [nombreEmpresa, localId, email, token, role], //Parameters
                (_, result) => resolve(result), //Resolve trasaction
                (_, error) => reject(error) //Transaction error
            )
        })
    })
    return promise
}
export const getSessions = ({ }) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * from sessions',
                [],
                (_, result) => resolve(result), //Resolve trasaction
                (_, error) => reject(error) //Transaction error
            )
        })
    })
    return promise
}
