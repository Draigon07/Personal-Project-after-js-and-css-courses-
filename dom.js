const data = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "Gender": "Masculine"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "Gender": "Masculine",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "Gender": "Female",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "Gender": "Female",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "Gender": "Female",
       
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
       "Gender": "Masculine",
     
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
       "Gender": "Masculine",
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
       "Gender": "Masculine",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
    
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
       "Gender": "Female",
    
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "Gender": "Female",
     
    }
  ]
  
  const wrapperUsers = document.querySelector('.wrapper')


  const girlImg = [
                'https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056__340.jpg',

    ]

    const manImg = [
                'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg',
                'https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg',
                'https://cdn.pixabay.com/photo/2016/05/23/23/32/human-1411499__340.jpg',
                 'https://cdn.pixabay.com/photo/2016/11/29/03/52/man-1867175__340.jpg',
                 'https://cdn.pixabay.com/photo/2019/04/16/23/59/sad-4133121__340.jpg',
                 'https://cdn.pixabay.com/photo/2018/10/29/21/46/human-3782189__340.jpg',
                 'https://cdn.pixabay.com/photo/2015/08/05/04/02/people-875597__340.jpg',
                 'https://cdn.pixabay.com/photo/2016/11/29/04/04/man-1867224__340.jpg'
                ] 
    
   

  
    
const filUserList = (arr,gender)=>{
        const fil = arr.filter(person => person.Gender === gender);
          return fil
        }
        
        
        const girls = ()=>{   
          const fil =  filUserList(data,'Female')
          fil.forEach(ele =>{
            const name = ele.name
            const mail = ele.email;
            const userName = ele.username;
            console.log(ele)
            createElementsCards('Female',name,mail,userName)
          })
          console.log(fil)
        }
        
        const mans = () =>{
          const fil =  filUserList(data,'Masculine')
          fil.forEach(ele =>{
            const name = ele.name
            const mail = ele.email;
            const userName = ele.username;
            console.log(ele)
            createElementsCards('Masculine',name,mail,userName)
          })
        }

       
        
      

       
        function appen(div,el){
           return div.appendChild(el)
        }
        function addTextContent(el,val){
          return el.textContent = val
        }
        function addClases(el,cla){
          return el.classList.add(cla)
       }
       
const createElementsCards = (gender,name,mail,userName) =>{

  

   function getImg(imgArr,img){

    let arrPositions = [];

    function getRandomPosition(min,max){
      let one = max-min + 1;
      let two = Math.floor(Math.random()*one)
      return two
    }
      for (let i = 0; i < imgArr.length; i++) {
        let index = getRandomPosition(0,imgArr.length-1)
        arrPositions.push(index)
      }

      console.log(arrPositions)

      let newArrPositions = [...new Set(arrPositions)]
      console.log(newArrPositions)
      newArrPositions.forEach(el =>{
         el = getRandomPosition(0,imgArr.length-1)
         return img.src = imgArr[el]
      })
    }

    const excGetImg  = (arr,img)=>{
        getImg(arr,img)
    }

    function createElement(eleName,el){
      eleName = document.createElement(el)
      return eleName
    }

   function reccArr(gen){
     appen(figure,img)   
     gen === 'Masculine' ?    excGetImg(manImg,img) :  excGetImg(girlImg,img)
   }
    const img = document.createElement('img');
    const h1 = document.createElement('h1');
    addTextContent(h1,name)
    const h3 = document.createElement('h3');
    addTextContent(h3,userName)
    const a = document.createElement('a');
    addTextContent(a,mail)
    const figure = document.createElement('figure')
    const div = document.createElement('div')
    const textDiv = document.createElement('div');
    appen(div,figure)
    appen(textDiv,h1)
    appen(textDiv,h3)
    appen(textDiv,a)
    appen(div,textDiv)
    appen(wrapperUsers,div)
    addClases(textDiv,'text_cont'); 
    reccArr(gender)  
  }
    
    mans()
    girls()
    
    function getuserInfo(){
     const userObj = {}
    const name = document.querySelector('.nameUser');
    const email = document.querySelector('.emailUser');
    const user = document.querySelector('.user');

  function getValues(el){
    return el.value
  }

  function getRandomId(){
    const id = Math.floor(Math.random()*1000)
    return id
  }

  inputValidation()
  
  function createElementsUser(){
    const h1 = document.createElement('h1');
    const h3 = document.createElement('h3');
    const a = document.createElement('a');
    const div = document.createElement('div');
    const figure = document.createElement('figure')
    addTextContent(h1,getValues(name));
    addTextContent(h3,getValues(user));
    addTextContent(a,getValues(email));
    const textDiv = document.createElement('div');
    appen(textDiv,h1)
    appen(textDiv,h3)
    appen(textDiv,a)
    addClases(textDiv,'text_cont')
    appen(div,textDiv)
    appen(wrapperUsers,div);


    function newUser (){
      const createUserObj = ({id,name,userName,email})=>{
        const obj = {id,name,userName,email}
        data.push(obj)
      }
      
      createUserObj({
        "id": getRandomId(),
        "name": getValues(name),
         "userName" : getValues(user),
         "email" : getValues(email)
        }) 
      }
      newUser()

     
      const userimg = [
                      'https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699__340.jpg',
                      'https://cdn.pixabay.com/photo/2015/01/31/18/17/arabs-618749__340.jpg',
                      'https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974__340.jpg'                         
  ]
  
  function selectUserPhoto(){
    function getRandomPosition(min,max){
      let one = max-min + 1;
      let two = Math.floor(Math.random()*one)
      return two
    }
    
    let index = getRandomPosition(0,userimg.length+1)
    const img = document.createElement('img');
    img.src = userimg[index];
    appen(figure,img)
    appen(div,figure)
  }
  selectUserPhoto()
  
}

function inputValidation(){
  let count = 0;  
  let users = [];
  let emails = [];
  let userNames = []
  const error = document.querySelector('.error')
  function emailValidation(input){
    let validRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(input.value.match(validRegex)){
      count++
    }else{
     error.textContent ='Invalid Email'
    }
  }
  
   function nameAndUserValidation(input){
     if(input.value.length !== 0 && input.value.length > 6){
       count++
      }else{
        error.textContent = `Nombre Invalido`
      }
    }
    
   
    const newUserList = (arr) =>{
      arr.forEach(el =>{
        const names = el
        users.push(names)
        return users
      })
    }

    const newUserEmailList = (arr) =>{
      arr.forEach(el =>{
        const email = el.email
        emails.push(email)
      })
    }
    
    const ifUserRepeated = (arr,Name,Email,userName)=>{
      newUserList(data)
      function lowered(el){
        return el.toLowerCase()
      }
      function included(arr,el){
         return arr.includes(el)
      }
       
        if(included(arr,lowered(Name)) || included(emails, lowered)){
          error.textContent = 'Usuario ya existente'
        }else{
          nameAndUserValidation(name)
          nameAndUserValidation(user)
          emailValidation(email);
          if(count === 3){
            createElementsUser()
            error.textContent = ''
          }
        }
      }
      
      ifUserRepeated(users,getValues(name))
    }
    
}




const btnSave = document.getElementById('saveUser');
btnSave.addEventListener('click', e =>{
  e.preventDefault()
  getuserInfo()
})


/*Pendiente: 
           Función para imagenes automaticas;
             */
            


    
    