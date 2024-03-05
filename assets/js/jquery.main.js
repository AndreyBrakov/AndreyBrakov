///валидация формы кодичек
 
 
function validate( event ) {
     const errorContainer = jQuery( '#errors' );
   errorContainer.text('');
     
    const contactFormData = {
    name : '',
    email : '' 
    }
    
    let valid = true;
    //проверка имени
    const nameField = jQuery( '#name' );  
    if( ! nameField.val() || nameField.val().length < 3 ){
errorContainer.append( '<p style="color:red">Поле имени ни разу не ОК</p>' );
       valid = false; 
} else {
    contactFormData.name = nameField.val();
    
}
    
        //проверка ЕМЕЙЛА
const emailField = jQuery( '#email' ),
				re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	if( ! emailField.val() || ! re.test(String(emailField.val()).toLowerCase()) ) {
		errorContainer.append('<p style="color: #f2849e;-webkit-font-smoothing: antialiased;"><strong>Ваш емайл не заполнен или некорректен.</strong></p>' );
		valid = false;
	}else {
    contactFormData.email = emailField.val();
}
    

    
    //проверка СООБЩЕНИЯ
    const msgField = jQuery( '#message' );  
    if( ! msgField.val() || msgField.val().length < 10 ){
errorContainer.append('<p style="color:red">Поле сообщения не заполнено</p>' );
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



jQuery( function($) {


$( '.menu-open').click(function(Event) {
    
   $( 'body').addClass( 'is-menu-visible');
    
} );

$( '.close').click(function(Event) {
    
   $( 'body').removeClass( 'is-menu-visible');
    
} );


$( 'contactform' ).submit( validate ); 

    
    
const contactFormData = JSON.parse( localStorage.getItem( 'contactformdata') ),
    nameField = $( '#name' ),
    emailField = $( '#email' );

nameField.val( contactFormData.name );
emailField.val( contactFormData.email);

    

});