import inquirer from 'inquirer';

import renderMenu from './src/components/menu.js'
import { MENU } from './src/constants.js'

async function start() {
    const taskList = []

    while(true) {
        const option = await renderMenu()
        
        if(option === MENU.CREATE) {
            const nameTask = {
                name: 'task',
                message: 'Qual o nome da tarefa?',
                type: 'input'
            }

            const task = await inquirer.prompt([nameTask])
            taskList.push(task.task)
            console.log(taskList)
        } else if(option === MENU.DELETE) {
            const deleteTask = {
                name: 'delete',
                message: 'Escolha a tarefa a ser removida: ',
                type: 'list',
                choices: taskList
            }

            const selectedTask = await inquirer
                .prompt([deleteTask])
            
            const taskIndex = taskList.findIndex(function (currentTask) {
                if(currentTask === selectedTask.delete) {
                    return true
                }
                return false
            })
            taskList.splice(taskIndex, 1)
            console.log(taskList)
        }

        if(option === MENU.UPDATE) {
            const updateTask = {
                name: 'update',
                message: 'Escolha a tarefa a ser atualizada: ',
                type: 'list',
                choices: taskList
            }

            const selectedTask = await inquirer
                .prompt([updateTask])
                const taskIndex = taskList.findIndex(function (currentTask) {
                    if(currentTask === selectedTask.update) {
                        return true
                    }
                    return false
                })

                const nameTask = {  
                    name: 'new',
                    message: 'Qual o nome da tarefa?',
                    type: 'input'
                }

                const task = await inquirer
                    .prompt([nameTask])

                taskList.splice(taskIndex, 1, task.new)
                console.log(taskList)
        }

        if(option === MENU.EXIT) {
            break;
        }
    }
}
start()