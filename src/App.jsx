import React from 'react';
import User from './companents/User'
let data =[
  {
      "id": 1,
      "name": "Ali Akmal",
      "img": "picture.png",
      "position": "Frontend Developer"
    },
    {
      "id": 2,
      "name": "Malika Qobilova",
      "img": "picture.png",
      "position": "Backend Developer"
    },
    {
      "id": 3,
      "name": "Diyorbek Norboyev",
      "img": "picture.png",
      "position": "UI/UX Designer"
    },
    {
      "id": 4,
      "name": "Shahlo Islomova",
      "img": "picture.png",
      "position": "Project Manager"
    },
    {
      "id": 5,
      "name": "Kamol Abdurahmonov",
      "img": "picture.png",
      "position": "Full Stack Developer"
    },
    {
      "id": 6,
      "name": "Xurshid Fayzulloyev",
      "img": "picture.png",
      "position": "QA Engineer"
    },
    {
      "id": 7,
      "name": "Madina Jalilova",
      "img": "picture.png",
      "position": "DevOps Engineer"
    },
    {
      "id": 8,
      "name": "Sardor Boboyev",
      "img": "picture.png",
      "position": "Data Scientist"
    },
    {
      "id": 9,
      "name": "Otabek Soliyev",
      "img": "picture.png",
      "position": "Product Owner"
    },
    {
      "id": 10,
      "name": "Gulnora Matmurodova",
      "img": "picture.png",
      "position": "Marketing Specialist"
    }
]

const App = () => {
  return (
     <div className='contanier' >
      <div>

        {
          data.map((users)=>{
            return(
            <User
            name={users?.name}
            titel={users?.position}
            img={users?.img}
            />
            )
          })
        }
      </div>
     </div>
  );
}

export default App;
