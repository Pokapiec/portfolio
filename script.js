const fs = require('fs').promises

const log = (msg) => console.log('\x1b[35m%s\x1b[0m', msg)

const target_dir = './build/assets'

const findJsFilePath = async () => {
    const files = await fs.readdir(target_dir);
    const jsFiles = files.filter((elem) => ( elem.endsWith('.js') ))
    const filesWithPaths = jsFiles.map((elem) => (`${target_dir}/${elem}`))
    return filesWithPaths
}

const replaceBadPaths = async (files) => {
    for (const file of files) {
        const data = await fs.readFile(file, 'utf8')
        const newData = data.replaceAll('/assets', 'assets')
        await fs.writeFile(file, newData)
    }
}

const main = async () => {
    let fileToReplace = ['./build/index.html']
    const jsFilePaths = await findJsFilePath();
    fileToReplace = [...fileToReplace, ...jsFilePaths]
    await replaceBadPaths(fileToReplace)
    log('Replaced all bad shit paths!')
}

main()

