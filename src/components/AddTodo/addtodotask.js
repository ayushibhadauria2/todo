import React, { useState} from 'react'
// import DisplayTodo from '../DisplayTodo/DisplayTodo'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo , updateTodo} from '../../actions/index'
import DisplayTodo from '../DisplayTodo/DisplayTodo'

const AddTodo = () => {
    const initialState = ''

    const [inputData, setInputData] = useState(initialState)

    const[isEdit, setIsEdit] = useState(false)
    const[editValue, setEditValue] =('')
    const [error, setError] = useState("");

    const todos = useSelector((state) => state.todoReducer.todos)

    const dispatch = useDispatch()
    let input
    let editInput
    let editId

    function handleEdit(todo){
        setIsEdit(true)
        console.log(todo.task, "[[[[[")
        // setEditValue(todo.task)
        editInput.value = todo.task
        editId = todo.id
    }

    function handleClick() {
        if (!input.value) {
            setError((error) => ({
                ...error,
                title: 'Please enter todo title',
            }));
            return;
        }
        else{
            console.log(input.value, "kkkkk")
            // dispatch(addTodo(inputData))
            // setInputData(initialState)
            dispatch(addTodo(input.value) )
            input.value = ''
        }

    }

    function handleUpdate ()
{
    if (!editInput.value) {
        console.log("pppp")
        setError((error) => ({
            ...error,
            title: 'Please enter todo title',
        }));
        return;
    }
    else{
        console.log(editInput.value, ";;;;;")
        // dispatch(addTodo(inputData))
        // setInputData(initialState)
        dispatch(updateTodo(todo.id, editInput.value) )
        input.value = ''
    }

}
    

    return (

        <div className="h-screen w-screen   bg-gradient-to-r from-slate-200 to-red-200 ">

            <h1 className='text-4xl font-serif font-semibold text-black flex items-center justify-center h-32 '> TODO APP </h1>

            <div className='flex justify-center items-center h-20'>

                {/* <input
                    type="text"

                    className="text-black w-1/3 bg-white h-10 rounded-lg p-4 shadow-md shadow-zinc-800"
                    placeholder="Add a Todo..."
                    onChange={(e) => setInputData(e.target.value)}
                /> */}
               {
                isEdit ? <>  <input placeholder='Add a Todo...' className="text-black w-1/3 bg-white h-10 rounded-lg p-4 shadow-md shadow-zinc-800" ref={node => editInput = node} />
                <button type="submit" className="w-20 bg-gray-950 text-white rounded-lg h-10 mx-2 shadow-md shadow-black hover:text-gray-50 hover:bg-slate-950"
                    onClick={handleUpdate}
                >
                    Update
                </button></> : <>  <input placeholder='Add a Todo...' className="text-black w-1/3 bg-white h-10 rounded-lg p-4 shadow-md shadow-zinc-800" ref={node => input = node} />
                <button type="submit" className="w-20 bg-gray-950 text-white rounded-lg h-10 mx-2 shadow-md shadow-black hover:text-gray-50 hover:bg-slate-950"
                    onClick={handleClick}
                >
                    Add
                </button></>
               }

            </div>
            <span className="text-red-600 flex justify-center  ">{error?.title}</span>


            {todos.length === 0 ?
                <h1 className="text-3xl font-serif font-normal text-cyan-800 flex justify-center ">
                    No todos in your bucket
                </h1>
                :
                <DisplayTodo handleEdit={handleEdit} isEdit={isEdit}/>}



        </div>
    )
}

export default AddTodo
