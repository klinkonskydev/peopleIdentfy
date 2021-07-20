const fage = document.querySelector('#age') // Ages

const genero = document.getElementsByName('gender') // Gender

const sendbtn = document.querySelector('#button') // Send

const user = document.querySelector('#people-info') // Info

const textWait = document.querySelector('#waiting-txt')

const photo = document.querySelector('#photo')

const age = new Date()

const verify = {

    check(){
        if(fage.value == 0 || fage.value == ' '){
            return window.alert('[ERROR]  verifique os dados e tente novamente ')
        } else{
                const ages =  user.innerHTML = age.getFullYear() - fage.value;
                let fgender = "";

                if (genero[0].checked) 
                {
                    fgender = 'homem'
                    if( ages >= 0 && ages < 10){
                        photo.src = "./foto/foto-bebe-m.png"
                    } else if( ages >= 10 && ages < 23){
                        photo.src = " ./foto/foto-jovem-m.png"
                    } else if( ages >= 23 && ages < 40 ) {
                        photo.src = " ./foto/foto-adulto-m.png"
                    } else {
                        photo.src = "./foto/foto-idoso-m.png"
                    }
                } 
                
                else 
                {
                    fgender = 'mulher';

                    if( ages >= 0 && ages < 10)
                    {
                        photo.src = "./foto/foto-bebe-f.png"
                    } 
                    else if( ages >= 10 && ages < 23)
                    {
                        photo.src = " ./foto/foto-jovem-f.png"
                    } 
                    else if( ages >= 23 && ages < 40 ) 
                    {
                        photo.src = " ./foto/foto-adulto-f.png"
                    } 
                    else 
                    {
                        photo.src = "./foto/foto-idoso-f.png"
                    }
                }

                textWait.style.display = "none"
                user.innerHTML = `Detectamos ${fgender} com ${ages} anos` 
        }
    }
}