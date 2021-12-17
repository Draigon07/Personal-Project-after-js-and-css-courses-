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
                'https://cdn.pixabay.com/photo/2016/05/23/23/32/human-1411499__340.jpg'
      ]
    
   
    
const getGenderAndName = (arr,gen)=>{
        const fil = arr.filter(person => person.Gender === gen);
        fil.forEach(ele =>{
           const name = ele.name
           const mail = ele.email;
           const userName = ele.username
           createElements(gen,name,mail,userName)
           return name
         })
         return fil
      }

      const girls = ()=>{   
         const fil =  getGenderAndName(data,'Female')
         console.log(fil)
      }

    const mans = ()=>{
         const fil = getGenderAndName(data,'Masculine')
         console.log(fil)
       }

       function getRandomPostion(min,max){
         let op1 = max-min +1;
         let op2 = Math.random() * op1;
         let result = Math.floor(op2) + min
         return result
        /*  */
       }


      
      const getImg = (arr,img)=>{
        let inUseImg = [];
         arr.forEach(el =>{
           let index = getRandomPostion(0, arr.length-1)
           return img.src = arr[index]
         })
      }

const createElements = (gender,name,mail,userName) =>{
    function appen(div,el){
       return div.appendChild(el)
    }
    function addTextContent(el,val){
      return el.textContent = val
    }
    function addClases(el,cla){
      return el.classList.add(cla)
   }


    const img = document.createElement('img');
    gender === 'Female' ?  getImg(girlImg,img) : getImg(manImg,img)
    const h1 = document.createElement('h1');
    addTextContent(h1,name)
    const h3 = document.createElement('h3');
    addTextContent(h3,userName)
    const a = document.createElement('a');
    addTextContent(a,mail)
    const figure = document.createElement('figure')
    const div = document.createElement('div')
    const textDiv = document.createElement('div');
    appen(figure,img)
    appen(div,figure)
    appen(textDiv,h1)
    appen(textDiv,h3)
    appen(textDiv,a)
    appen(div,textDiv)
    appen(wrapperUsers,div)
    addClases(textDiv,'text_cont')
   }

girls()
mans()

    
    