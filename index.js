import inquirer from 'inquirer';

const taskList = ['Comprar pao', 'Jogar CSGO', 'Lavar roupa']

const updateTask = {
    name: 'update',
    message: 'Escolha a tarefa a ser atualizada: ',
    type: 'list',
    choices: taskList
}

inquirer
    .prompt([updateTask])
    .then(function (selectedTask) {
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
        inquirer
            .prompt([nameTask])
            .then(function (task) {
                taskList.splice(taskIndex, 1, task.new)
                console.log(taskList)
            })  
    })

// const deleteTask = {
//     name: 'delete',
//     message: 'Escolha a tarefa a ser removida: ',
//     type: 'list',
//     choices: taskList
// }

// inquirer
//     .prompt([deleteTask])
//     .then(function (selectedTask) {
//         const taskIndex = taskList.findIndex(function (currentTask) {
//             if(currentTask === selectedTask.delete) {
//                 return true
//             }
//             return false
//         })
//         taskList.splice(taskIndex, 1)
//         console.log(taskList)
//     })

// const nameTask = {
//     name: 'task',
//     message: 'Qual o nome da tarefa?',
//     type: 'input'
// }

// inquirer
//     .prompt([nameTask])
//     .then(function (task) {
//         taskList.push(task.task)
//         console.log(taskList)
//     })
    
