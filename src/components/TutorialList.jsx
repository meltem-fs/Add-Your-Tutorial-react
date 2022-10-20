import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import EditTutorial from "./EditTutorial";
import axios from "axios";
import { useState } from "react";

const TutorialList = ({ tutorials,getTutorials }) => {

  const [edit, setEdit] = useState({id:"", title:"", description:""})

  const deleteTutorial = async(id)=>{
    const url = `https://axios-example-cw.herokuapp.com/api/tutorials/${id}`;
    try {
      await axios.delete(url)
    } catch (error) {
      console.log(error)
    }
    getTutorials()
  }

  const doEdit = (id, title, description)=>{
    setEdit({id:id, title:title, description:description})
    putEdit(id,title,description)
  }

  const putEdit = async(id,title,description)=>{
    const url = `https://axios-example-cw.herokuapp.com/api/tutorials/${id}`;

    try {
      await axios.put(url,{title,description})
    } catch (error) {
      console.log(error);
    }
    getTutorials()
  }



  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    className="me-2 text-warning"
                    onClick={() => doEdit(id, title, description)}
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial doEdit={doEdit} edit={edit} putEdit={putEdit} />
    </div>
  );
};

export default TutorialList;
