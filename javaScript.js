// Home Work
let arr_names = ["alex", "adam", "jordan", "suxrob", "bekzod","mirsaid", "munis"];
let name = prompt("Введите имя которое хотите удалить!").toLowerCase().trim()
if (name === arr_names[0] || name === arr_names[1] || name === arr_names[2] || name === arr_names[3] || name === arr_names[4] || name === arr_names[5] || name === arr_names[6] ) {
   let enter = confirm(`Вы выбрали имя ${name},точно хотите удалить его? Действие будет невозвратимым!`)
   if(enter === true){
       alert(`Имя ${arr_names.splice(arr_names.indexOf(name), 1)} удалено`)
       alert(`Вы удалили имя - ${name}, в списке осталось 6 имён: ${arr_names}`)
   } 
} else{
    alert(`К сожалению человека по имени ${name} нету в списке!`)
}

