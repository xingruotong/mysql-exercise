const mysql = require('mysql')

module.exports = () => {
    let connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'demo'
    })

    connection.connect((error) => {
        if(error) {
            console.log('数据库连接失败')
        } else {
            console.log('数据库连接成功')
        }
    })

    return new Promise((resolve, reject) => {
        connection.query('select * from userList', (error, data) => {
            if(error) {
                reject(error)
            } else {
                resolve(data)
            }
            //关闭连接
            connection.end()
        })
    })
    

}