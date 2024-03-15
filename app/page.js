"use client"
import React, { useState } from "react";
const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, SetMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    if (title.trim() === "" || desc.trim() === "") {
      return;
    }
  
    SetMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  }


  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    SetMainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between  w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i)
            }}
            className="bg-red-400 rounded px-4 py-2 text-white font-bold">Delete</button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className=" text-white p-5 text-5xl font-bold text-center bg-gray-800" >Nagendra Todo-List</h1>
      <form onSubmit={submitHandler}>

        <input type="text" className=" text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded" placeholder="Enter Your Task here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />

        <input type="text" className="text-2xl border-2 m-5 px-4 py-2 border-zinc-800 rounded" placeholder="Enter Your Description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }} />

        <button className=" text-white px-4 py-3 text-2xl  font-bold rounded m-5 bg-lime-600" type="submit">Add Task</button>
      </form>

      <hr />
      <div className="p-8 bg-green-300 ">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page;