const {readFile, writeFile} = require('fs').promises //Promises version of readFile and writeFile, no need to promisify them
/*const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
*/

const start = async () => {
    try {
        const first = await readFile('./assets/first.txt', 'utf8');
        const second = await readFile('./assets/second.txt', 'utf8');
        await writeFile('./assets/result.txt',`This is the result: ${first} ${second}`)
        console.log(first, second);
    } catch (error) {
        console.log(error)
    }
}

//wrapper function
/*
const getText = (path) => { 
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else{
                resolve(data)
            }
        })
    })
}*/

//getText('./assets/first.txt').then(result => console.log(result)).catch(err => console.log(err))
start()