import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";



export default function Topic() {

  const contents =[
    {id:1, title:'HTML', description:'HTML is ...'},
    {id:2, title:'JS', description:'JS is ...'},
    {id:3, title:'React', description:'React is ...'},
  ]


  const lis = [];
  for(let i=0; i<contents.length; i++){
    lis.push(
      <li><NavLink to={'/topic/'+contents[i].id}>{contents[i].title}</NavLink></li>
    );
  }

  return (
    <div>
    <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Outlet contents={contents} />
    </div>
    
  );
}