import * as ExpoSQLite from "expo-sqlite"

const db = ExpoSQLite.openDatabase("sessions.db")

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('')
        })
    })
}