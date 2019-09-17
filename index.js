import axios from 'axios'
import inquirer from 'inquirer'
import ip from 'ip'
import QRCode from 'qrcode'

axios
    .get('http://' + ip.address() + ':3000/images')
    .then(response => {
        const choices = Object.values(response.data)

        inquirer
            .prompt({
                type: 'list',
                message: 'Which image you want to download?',
                choices,
                name: 'res',
            })
            .then(answers => {
                QRCode.toString(
                    'http://' + ip.address() + ':3000/images/' + answers['res'],
                    { type: 'terminal' },
                    (err, url) => {
                        console.log(url)
                    }
                )
            })
    })
    .catch(error => {
        console.log('something wrong happen')
    })
