window.addEventListener('DOMContntentLoaded',()=>{

    const forms = document.querySelectorAll('form__block__iner');

    const message ={
        loading: 'Загрузка',
        success: 'Спасибо! Успешно',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item =>{
        postData(item);
    });

    function postData(form){
        form.addEventListener('submit', (e)=>{
            e.preventDefoult();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            // request.setRequestHeader('Content-type', 'multipart/form-data');
            const formData = new FormData(form);

            request.send(formData);

            request.addEventListener('load', ()=>{
                if(request.status ===200){
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                } else{
                    statusMessage.textContent = message.failure;
                }
            });
        });
    }






    fetch('db.json')
        .then(data => data.json())
        .then(res => console.log(res));

});







/*Slider*/
new Swiper('.works__block', {
    // Стрелки
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop:true,
    coverflow: true,
    shadow: true,
    slideShadows: true,
    shadowScale: 0.94,
    shadowOffset: 15,

    
});