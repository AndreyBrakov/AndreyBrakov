console.log( 'Привет, мир!' );

const menuBurger = document.querySelector ( '.menu-open');


menuBurger.addEventListener ('click', (Event) => {
   
    
    document.body.classList.add( 'is-menu-visible');
    
} );


const menuClose = document.querySelector ( '.close ');


menuClose.addEventListener ('click', (Event) => {
   
    
    document.body.classList.remove( 'is-menu-visible');
    
} );



//валидация формы кодичек
 
 
function validate( event ) {
     const errorContainer = document.getElementById( 'errors' );
   errorContainer.innerHTML = '';
     
    const contactFormData = {
    name : '',
    email : '' 
    }
    
    let valid = true;
    //проверка имени
    const nameField = document.getElementById( 'name' );  
    if( ! nameField.value || nameField.value.length < 3 ){
errorContainer.innerHTML='<p style="color:red">Поле имени ни разу не ОК</p>';
       valid = false; 
} else {
    contactFormData.name = nameField.value;
    
}
    
        //проверка ЕМЕЙЛА
const emailField = document.getElementById( 'email' ),
				re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	if( ! emailField.value || ! re.test(String(emailField.value).toLowerCase()) ) {
		errorContainer.innerHTML += '<p style="color: #f2849e;-webkit-font-smoothing: antialiased;"><strong>Ваш емайл не заполнен или некорректен.</strong></p>';
		valid = false;
	}else {
    contactFormData.email = emailField.value;
}
    

    
    //проверка СООБЩЕНИЯ
    const msgField = document.getElementById( 'message' );  
    if( ! msgField.value || msgField.value.length < 10 ){
errorContainer.innerHTML +='<p style="color:red">Поле сообщения не заполнено</p>';
       valid = false; 
}    
    
    //сохраняем в локал сторадж
localStorage.setItem('contactformdata', JSON.stringify( contactFormData ) );

    ///если есть хоть одно ошибка
    if( false === valid ) {
    event.preventDefault();
}
    return valid;

}


const myForm = document.getElementById( 'contactform' );

myForm.addEventListener( 'submit', validate ); 


const contactFormData = JSON.parse( localStorage.getItem( 'contactformdata') ),
    nameField = document.getElementById( 'name' ),
    emailField = document.getElementById( 'email' );

nameField.value = contactFormData.name;
emailField.value = contactFormData.email;
