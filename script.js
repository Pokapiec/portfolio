const fs = require('fs');

const log = (msg) => console.log(msg)

const target_dir = './build/assets'
const htmlFile = './build/index.html'

fs.readdir(target_dir, (err, files) => {
    files.forEach(file => {
        if (file.endsWith('.js')) {
            fs.readFile(target_dir + '/' + file, 'utf8' , (err, data) => {
                const newData = data.replaceAll('/assets', 'assets')
                fs.writeFileSync(target_dir + '/' + file, newData)
            })
        }
    });
  });

fs.readFile(htmlFile, 'utf8' , (err, data) => {
    const newData = data.replaceAll('/assets', 'assets')
    // log(newData)
    fs.writeFileSync(htmlFile, newData)
})

log('Replaced all shitty paths!')