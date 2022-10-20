import { useState } from "react";



const EditTutorial = ({ doEdit, edit, putEdit }) => {
  const { id, title, description } = edit;

  const [changetitle, setChangetitle] = useState("");
  const [changedesc, setChangedesc] = useState("");

  console.log(changetitle);
  console.log(changedesc);


  const changeTutor = (e) => {
    e.preventDefault();
    doEdit(id, changetitle, changedesc);
    putEdit(id, changetitle, changedesc);
  };

  return (
    <div>
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={changeTutor}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder={title}
                    // value={title}
                    onChange={(e) => setChangetitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    placeholder={description}
                    // value={description}
                    onChange={(e) => setChangedesc(e.target.value)}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
