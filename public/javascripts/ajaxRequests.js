// $('#submit-todo').on('submit', (e) => {
//     e.preventDefault()
//     todos = {
//         todo: $('#input-todo').val(),
//         done: false
//     }
//     $.ajax({
//         url: '/',
//         method: 'POST',
//         data: todos,
//         success: function (todos) { 
//             $('.list').append(`<li> ${todos.todo} - ${todos.todo} </li>`)
//         }

//     })
// })
// function deleteFunc(idx) {
//     $.ajax({
//         url: '/' + idx,
//         method: 'DELETE',
//         success: function (todo) { 
//             console.log(todo)
//         }
// })
// }