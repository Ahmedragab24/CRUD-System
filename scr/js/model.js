let lib = document.getElementById('lib');
let libsearch = document.getElementById('lib-search');
let clent = document.getElementById('clent');
let clentphone = document.getElementById('clent-phone');
let addres = document.getElementById('addres');
let from = document.getElementById('from');
let price = document.getElementById('price');
let delivery = document.getElementById('delivery');
let priceDone = document.getElementById('price-done');
let total = document.getElementById('total');
let order = document.getElementById('order');
let orderkind = document.getElementById('order-kind');
let title = document.getElementById('title');
let am = document.getElementById('a.m');
let fly = document.getElementById('fly');
let flyoption = document.getElementById('fly-option');
let submit = document.getElementById('submit');
let mood = 'creat';
let tmp;
let CategoryArry;
let orderyArry;
let flyoptionArry;
localStorage.libsearch != null ? CategoryArry = JSON.parse(localStorage.libsearch) : CategoryArry = [] ;
localStorage.orderkind != null ? orderyArry = JSON.parse(localStorage.orderkind) : orderyArry = [] ;
localStorage.flyoption != null ? flyoptionArry = JSON.parse(localStorage.flyoption) : flyoptionArry = [] ;


/////////////////////////////////////////////////////////////////////////////////////////////
//Svae Category
function SaveCategory() {

    let objCategory = {

        libsearch: libsearch.value
    };

    if (libsearch.value != '') {

    CategoryArry.push(objCategory);
    localStorage.setItem('libsearch', JSON.stringify(CategoryArry));
    Rest();
    ShowCategory();
    ShowTableCategory();
    CountCategory();
    }
}

//Rest Category
function Rest() {
    libsearch.value = '';
}

//show Data 
function ShowCategory() {

    let item = '';
    item += `<option value="">...حدد المكتب</option>`

    for (let i = 0; i < CategoryArry.length; i++) {

        item += `<option value="${i}">${CategoryArry[i].libsearch}</option>`
    }
    lib.innerHTML = item;
}

//Show Table Category
function ShowTableCategory() {

    let TableCategory = '';

    for (let i = 0; i < CategoryArry.length; i++) {

        TableCategory += `
        <tr>
        <td>${i+1}</td>
        <td>${CategoryArry[i].libsearch}</td>

        <td>
            <button class="btn btn-danger" onclick="DeleteCategory(${i})">
                <i class="fas fa-trash"></i>
            </button>
        </td>

    </tr>
        `;
    }
    document.getElementById('category').innerHTML = TableCategory;

}


//Delete Category

function DeleteCategory(id) {

    
        CategoryArry.splice(id, 1);
        localStorage.libsearch = JSON.stringify(CategoryArry);
        ShowTableCategory();
        ShowCategory();
        CountCategory();
    
}

//Count Category

function CountCategory() {

    document.getElementById('countCategory').innerHTML = `   (${CategoryArry.length})`;

}


//Validation Category

function ValidationCategory() {

    let valid = true;
    if (libsearch.value == '') {
        // alert('..... اكتب اسم المكتب');
        valid = false;
    } else {
        SaveCategory();
        valid = true;
    }

    return valid;
}

//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//Svae orderkind
function SaveOrder() {

    let objCOrder = {

        orderkind: orderkind.value
    };

    if (orderkind.value != '') {
        orderyArry.push(objCOrder);
    localStorage.setItem('orderkind', JSON.stringify(orderyArry));
    RestOrder();
    ShowOrder();
    ShowTableOrder();
    CountOrder();
    }
}

//Rest order
function RestOrder() {
    orderkind.value = '';
}

//show Data 
function ShowOrder() {

    let itemOrder = '';
    itemOrder += `<option value=""> ...حدد النوع</option>`

    for (let i = 0; i < orderyArry.length; i++) {

        itemOrder += `<option value="${i}">${orderyArry[i].orderkind}</option>`
    }
    order.innerHTML = itemOrder;
}

//Show Table order
function ShowTableOrder() {

    let TableOrder = '';

    for (let i = 0; i < orderyArry.length; i++) {

        TableOrder += `
        <tr>
        <td>${i+1}</td>
        <td>${orderyArry[i].orderkind}</td>

        <td>
            <button class="btn btn-danger" onclick="DeleteOrder(${i})">
                <i class="fas fa-trash"></i>
            </button>
        </td>

    </tr>
        `;
    }
    document.getElementById('oorder').innerHTML = TableOrder;

}


//Delete order

function DeleteOrder(id) {

    
        orderyArry.splice(id, 1);
        localStorage.orderkind = JSON.stringify(orderyArry);
        ShowTableOrder();
        ShowOrder();
        CountOrder();
    
}

//Count order

function CountOrder() {

    document.getElementById('countOrder').innerHTML = `   (${orderyArry.length})`;

}


//Validation order

function ValidationOrder() {

    let validOrder = true;
    if (orderkind.value == '') {
        // alert('..... اكتب اسم المكتب');
        validOrder = false;
    } else {
        validOrder = true;
        SaveOrder();
    }

    return validOrder;
}

//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//Save flyoption
function Saveflyoption() {

    let objctflyoption = {

        flyoption: flyoption.value
    };

   if (flyoption.value != '') {
    
    flyoptionArry.push(objctflyoption);
    localStorage.setItem('flyoption', JSON.stringify(flyoptionArry));
    Restflyoption();
    Showflyoption();
    ShowTableflyoption();
    Countflyoption();
   }
}

//Rest flyoption
function Restflyoption() {
    flyoption.value = '';
}

//show Data 
function Showflyoption() {

    let itemflyoption = '';
    itemflyoption += `<option value="">...حدد المندوب</option>`

    for (let i = 0; i < flyoptionArry.length; i++) {

        itemflyoption += `<option value="${i}">${flyoptionArry[i].flyoption}</option>`
    }
    fly.innerHTML = itemflyoption;
}

//Show Table flyoption
function ShowTableflyoption() {

    let Tableflyoption = '';

    for (let i = 0; i < flyoptionArry.length; i++) {

        Tableflyoption += `
        <tr>
        <td>${i+1}</td>
        <td>${flyoptionArry[i].flyoption}</td>

        <td>
            <button class="btn btn-danger" onclick="Deleteflyoption(${i})">
                <i class="fas fa-trash"></i>
            </button>
        </td>

    </tr>
        `;
    }
    document.getElementById('fflyoption').innerHTML = Tableflyoption;

}


//Delete flyoption

function Deleteflyoption(id) {

    
       flyoptionArry.splice(id, 1);
        localStorage.flyoption = JSON.stringify(flyoptionArry);
        ShowTableflyoption();
        Showflyoption();
        Countflyoption();
    
}

//Count flyoption

function Countflyoption() {

    document.getElementById('countFly').innerHTML = `   (${flyoptionArry.length})`;

}


//Validation flyoption

function Validationflyoption() {

    let validflyoption = true;
    if (flyoption.value == '') {
        // alert('..... اكتب اسم المكتب');
        validflyoption = false;
    } else {
        Saveflyoption();
        validflyoption = true;
    }

    return validflyoption;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//get total

function getTotal() {
    if (price.value != '') {
        let result = (+price.value) + (+delivery.value);
        total.innerHTML = result;
        total.style.background = '#20c997';
    } else {
        total.innerHTML = '';
        total.style.background = '#cf1111';
    }
}



//create product

let dataPro;
if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product)
} else {
    dataPro = [];
}


// SUBMIT
submit.onclick = function submitT() {
    let newPro = {
        lib: lib.options[lib.selectedIndex].text,
        // libsearch: libsearch.innerHTML,
        clent: clent.value,
        clentphone: clentphone.value,
        addres: addres.value,
        from: from.value,
        price: price.value,
        delivery: delivery.value,
        priceDone: priceDone.value,
        reseatt: (+price.value) + (+delivery.value) ,
        order: order.options[order.selectedIndex].text,
        // orderkind: orderkind.value,
        title: title.value,
        am: am.value,
        fly: fly.options[fly.selectedIndex].text,
        // flyoption: flyoption.value,
        }
        //count
    if (clent.value != '' && price.value != '' && clentphone.value != ''  && addres.value != '') {
        if (mood === 'creat') {
            if (newPro.count > 1) {
                for (let i = 0; i < newPro.count; i++) {
                    dataPro.push(newPro);
                }
            } else {
            dataPro.push(newPro);
            
            }
        } else {
            dataPro[tmp] = newPro;
            mood = 'creat';
            submit.innerHTML = 'انشاء'
            
            
            // libsearch.style.display = 'block';
            // orderkind.style.display = 'block';
            // flyoption.style.display = 'block';
        } 
        
        
       


        claerData()
        showData()
        // showDataDelivery()
        // getTotal()
        // ShowCategory()
        // ShowOrder()
        // Showflyoption()
    }

    setTimeout(() => {
            document.location.reload();
          }, 100);

    //save localstorage
    localStorage.setItem('product', JSON.stringify(dataPro));
}



//claer inputs


function claerData() {
    lib.options[lib.selectedIndex].text = '';
    libsearch.value = '';
    clent.value = '';
    clentphone.value = '';
    addres.value = '';
    from.value = '';
    price.value = '';
    delivery.value = '';
    priceDone.value = '';
    total.innerHTML = '';
    order.options[order.selectedIndex].text = '';
    orderkind.value = '';
    am.value = '';
    title.value = '';
    fly.options[fly.selectedIndex].text = '';
    flyoption.value = '';
}

//read

function showData() {
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        table += `
    <tr>
                    <td class="text-center border-end border-start pt-4 pb-4 idid">${i+1}</td>
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].lib}</td> 
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].clent}</td>
                    <td class="text-center border-end pt-4 pb-4 text-break pho">${dataPro[i].clentphone}</td>
                    <td class="text-center border-end pt-4 pb-4 text-break add">${dataPro[i].addres}</td>
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].from}</td>
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].reseatt}</td>
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].priceDone}</td>
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].order}</td>                                                                                                                              
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].title}</td>
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].am}</td>
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].fly}</td>
                    <td class="text-center pt-4 pb-4 border-end btn-up">
                    <button class="me-4" id="update" onclick='updateData(${i})'><i class="fa-solid fa-pen"></i></button>
                    <button onclick='deletData(${i})' id="delete"><i class="fa-solid fa-trash"></i></button></td>
                    
                </tr>
    `


    }
    document.getElementById('tbody').innerHTML = table;

 
//     let btnDalete = document.getElementById('deleteAll')
//     if (dataPro.length > 0) {
//         btnDalete.innerHTML = `
//     <button  onclick ='DeleteAll()'> حذف الكل (${dataPro.length})</button>
// `
//     } else {
//         btnDalete.innerHTML = ''
//     }

}
showData()

function deletData(i) {
    dataPro.splice(i, 1)
    localStorage.product = JSON.stringify(dataPro)
    showData()
    setTimeout(() => {
        document.location.reload();
      }, 100);

}

// function DeleteAll() {
//     localStorage.clear();
//     dataPro.splice(0);
//     showData()
// }

//update

function updateData(i) {
    lib.options[lib.selectedIndex].text = dataPro[i].lib;
    clent.value = dataPro[i].clent;
    clentphone.value = dataPro[i].clentphone;
    addres.value = dataPro[i].addres;
    from.value = dataPro[i].from;
    price.value = dataPro[i].price;
    delivery.value = dataPro[i].delivery;
    priceDone.value = dataPro[i].priceDone;
    order.options[order.selectedIndex].text = dataPro[i].order;
    title.value = dataPro[i].title;
    am.value = dataPro[i].am;
    fly.options[fly.selectedIndex].text = dataPro[i].fly;
    
    // libsearch.style.display = 'none';
    //  orderkind.style.display = 'none';
    // flyoption.style.display = 'none';
    let supdate = submit.innerHTML = 'تعديل';
    mood = 'update';
    tmp = i;
    scroll({
        top: 1,
        behavior: "smooth",
    })
    getTotal()
}

//////////////////////////////// search order (done) //////////////////////////////

function searchDataDone() {
    let searchModDone = 'order';
    let tableorderPageDone = '';
    if (searchModDone == 'order') {
        for (let i = 0; i < dataPro.length; i++) {
            if (dataPro[i].order.includes("تم") ) { 
                tableorderPageDone += `
                <tr>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].lib}</td> 
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].order}</td>                                                                                                                              
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].title}</td>                                                                                                                              
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].clent}</td>
                <td class="text-center border-end pt-4 pb-4 text-break pho">${dataPro[i].clentphone}</td>
                <td class="text-center border-end pt-4 pb-4 text-break add">${dataPro[i].addres}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].from}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].am}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].reseatt}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].priceDone}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].fly}</td>
            </tr> `
            }
        }
    } 
    document.getElementById('tbodyOrder-done').innerHTML = tableorderPageDone;
}

//////////////////////////////// search order (مرتجع) //////////////////////////////

function searchData() {
    let searchMod = 'order';
    let tableorderPage = '';
    if (searchMod == 'order') {
        for (let i = 0; i < dataPro.length; i++) {
            if (dataPro[i].order.includes("مرتجع") ) { 
                console.log("ahmed");  
                tableorderPage += `
                <tr>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].lib}</td> 
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].order}</td>                                                                                                                              
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].title}</td>                                                                                                                              
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].clent}</td>
                <td class="text-center border-end pt-4 pb-4 text-break pho">${dataPro[i].clentphone}</td>
                <td class="text-center border-end pt-4 pb-4 text-break add">${dataPro[i].addres}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].from}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].am}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].reseatt}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].priceDone}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].fly}</td>
            </tr> `
            }
        }
    } 
    document.getElementById('tbodyOrder').innerHTML = tableorderPage;
}

//////////////////////////////// search order (الفعالة) //////////////////////////////

function searchDataOk() {
    let searchModOk = 'order';
    let tableorderPageOK = '';
    if (searchModOk == 'order') {
        for (let i = 0; i < dataPro.length; i++) {
            if (dataPro[i].order.includes("مؤجل") || dataPro[i].order.includes('حدد')) { 
                console.log("ahmed");  
                tableorderPageOK += `
                <tr>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].lib}</td> 
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].order}</td>                                                                                                                              
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].title}</td>                                                                                                                              
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].clent}</td>
                <td class="text-center border-end pt-4 pb-4 text-break pho">${dataPro[i].clentphone}</td>
                <td class="text-center border-end pt-4 pb-4 text-break add">${dataPro[i].addres}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].from}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].am}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].reseatt}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].priceDone}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].fly}</td>
            </tr> `
            }
        }
    } 
    document.getElementById('tbodyOrder-ok').innerHTML = tableorderPageOK;
}


//////////////////////////////// search order (كنسل) //////////////////////////////

function searchDataCansel() {
    let searchModCansel = 'order';
    let tableorderPageCansel = '';
    if (searchModCansel == 'order') {
        for (let i = 0; i < dataPro.length; i++) {
            if (dataPro[i].order.includes("كنسل") || dataPro[i].order.includes("عدم رد")) { 
                console.log("ahmed");  
                tableorderPageCansel += `
                <tr>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].lib}</td> 
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].order}</td>                                                                                                                              
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].title}</td>                                                                                                                              
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].clent}</td>
                <td class="text-center border-end pt-4 pb-4 text-break pho">${dataPro[i].clentphone}</td>
                <td class="text-center border-end pt-4 pb-4 text-break add">${dataPro[i].addres}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].from}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].am}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].reseatt}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].priceDone}</td>
                <td class="text-center border-end pt-4 pb-4">${dataPro[i].fly}</td>
            </tr> `
            }
        }
    } 
    document.getElementById('tbodyOrder-cansel').innerHTML = tableorderPageCansel;
}


///////////////////////////// (صفحة المناديب) //////////////////////////////////


function showDataDelivery() {
    let tableDelivery = '';
    for (let i = 0; i < dataPro.length; i++) {
        tableDelivery += `
    <tr>
                    
                    <td class="text-center border-end border-start pt-4 pb-4">${dataPro[i].fly}</td>
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].clent}</td>
                    <td class="text-center border-end pt-4 pb-4 text-break pho">${dataPro[i].clentphone}</td>
                    <td class="text-center border-end pt-4 pb-4 text-break add">${dataPro[i].addres}</td>
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].from}</td>
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].am}</td>
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].order}</td>                                                                                                                              
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].title}</td>                                                                                                                              
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].reseatt}</td>
                    <td class="text-center border-end pt-4 pb-4">${dataPro[i].priceDone}</td>
 
                    
                </tr>
    `


    }
    document.getElementById('tbodyDelivery').innerHTML = tableDelivery;

}



//////////////// table  ///////////////////

$(document).ready( function () {
    showData()
    ShowCategory()
    ShowTableCategory()
    CountCategory()
    SaveOrder()
    ShowOrder()
    ShowTableOrder()
    CountOrder()
    Saveflyoption()
    Showflyoption()
    ShowTableflyoption()
    Countflyoption()
    // searchData()
    $('#tablPro').dataTable()
    // updateData(i)
} );

$(document).ready( function () {
    showDataDelivery()
    $('#tablProoo').dataTable()
} );

$(document).ready( function () {
    searchData() 
    $('#tablOrder').dataTable()
} );

$(document).ready( function () {
    searchDataOk()
    $('#tablOrder-ok').dataTable()
} );

$(document).ready( function () {
    searchDataDone()
    $('#tablOrder-done').dataTable()
} );

$(document).ready( function () {
    searchDataCansel()
    $('#tablOrder-cansel').dataTable()
} );




/////////////////////////// windowPrint ///////////////////////

function windowPrint() {
    print() ;
}






// ///////////////////////////////////////////////////////////////////

// let pagelogin = document.getElementById('page-login')
// let username = document.getElementById('username')
// let password = document.getElementById('password')
// let divmenu = document.getElementById('div-menu')
// let Cruds = document.getElementById('Cruds')

// const form = document.querySelector("form");
// eField = form.querySelector(".email"),
// eInput = eField.querySelector("input"),
// pField = form.querySelector(".password"),
// pInput = pField.querySelector("input");




// function login() {
//     if (username.value == "kavo" && password.value == "ahmed") {
        
//         divmenu.style.display ="block"
//         Cruds.style.display ="block"
//         pagelogin.style.display ="none"
//     }


//     form.onsubmit = (e)=>{
//         e.preventDefault(); //preventing from form submitting
//         //if email and password is blank then add shake class in it else call specified function
//         (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
//         (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
//         setTimeout(()=>{ //remove shake class after 500ms
//           eField.classList.remove("shake");
//           pField.classList.remove("shake");
//         }, 500);
//         eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
//         pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup
//         function checkEmail(){ //checkEmail function
//           // let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
//           if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
//             eField.classList.add("error");
//             eField.classList.remove("valid");
//             let errorTxt = eField.querySelector(".error-txt");
//             //if email value is not empty then show please enter valid email else show Email can't be blank
//             (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
//           }else{ //if pattern matched then remove error and add valid class
//             eField.classList.remove("error");
//             eField.classList.add("valid");
//           }
//         }
//         function checkPass(){ //checkPass function
//           if(pInput.value == ""){ //if pass is empty then add error and remove valid class
//             pField.classList.add("error");
//             pField.classList.remove("valid");
//           }else{ //if pass is empty then remove error and add valid class
//             pField.classList.remove("error");
//             pField.classList.add("valid");
//           }
//         }
//         //if eField and pField doesn't contains error class that mean user filled details properly
//         if(!eField.classList.contains("error") && !pField.classList.contains("error")){
//           window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
//         }
//       }
// }
