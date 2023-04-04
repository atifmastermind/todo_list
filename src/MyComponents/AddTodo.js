import React, { useState } from 'react';
import "./addTodo.css"
export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can not be blank")
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <>
            <div className="addTodo-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="heading">Add a Todo</h3>
                            <form onSubmit={submit}>
                                <div className="row align-items-center gy-2 gy-lg-0">
                                    <div className="col-lg-5 col-sm-12"><div>
                                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" placeholder='Title' aria-describedby="textHelp" />
                                    </div></div>
                                    <div className="col-lg-5 col-sm-12"><div>
                                        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" placeholder='Description' />
                                    </div></div>
                                    <div className="col-lg-2 col-sm-12">
                                        <button type="submit" className="btn btn-sm">    <span class="btn-label"><i class="fa fa-tasks"></i></span> Add Todo</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
