const hey = () => {
    const title = "Lover,Time Start,Time End,Year";
    const value = ["Quang,Aug,Sept,2017", "Anh,June,Sept,2016", "Anh -2,June,Sept,2019", "Phuoc,Sept,Dec,2017", "Lee,July,Sept,2018"];
    //headers
    var newtitle = title.split(",");
    let table = document.querySelector("table");
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let data of newtitle) {
    th = document.createElement("th");
    text = document.createTextNode(data);
    th.appendChild(text);
    row.appendChild(th);
    }
    const arrayy = [];
     for (l = 0; l < value.length; l++)  {
            var valuee = value[l].split(",");
            let row = thead.insertRow();
            for (let data of valuee) {
                cell = row.insertCell();
                text = document.createTextNode(data);
                cell.appendChild(text);
        }
    }
}
const openForm = (modal_Id) => {
    console.log('hello');
    var modalId = $('#' + modal_Id);
    modalId.fadeIn('slow');
}
const closeForm = (modal_Id) => {
    var modalId = $('#' + modal_Id);
                modalId.fadeOut('slow');
}
window.onclick = console.log(event.target.id);
window.onclick = function (event) {
   switch (event.target.id) {
      case 'myForm':
        $('#' + event.target.id).fadeOut('slow');
        console.log('take yhis');
      break;
       default:
            break;
    }
}


