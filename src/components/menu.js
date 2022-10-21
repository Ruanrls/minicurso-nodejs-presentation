import inquirer from "inquirer";
import { MENU } from '../constants.js'

export default async function renderMenu() {
    const menuQuestion = {
        name: 'menu',
        messsage: 'Escolha uma opção do menu: ',
        type: 'list',
        choices: Object.values(MENU)
    }

    const option = await inquirer.prompt([menuQuestion])
    return option.menu
}