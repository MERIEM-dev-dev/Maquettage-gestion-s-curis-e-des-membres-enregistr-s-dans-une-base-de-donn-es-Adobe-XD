import { useState, useContext } from "react";
import { AppContext } from "./../contexts/Context";
const Form = () => {
  const { insertUser } = useContext(AppContext);
  const [newUser, setNewUser] = useState({});

  // Storing the Insert User Form Data.
  const addNewUser = (e, field) => {
    setNewUser({
      ...newUser,
      [field]: e.target.value,
    });
  };

  // Inserting a new user into the Database.
  const submitUser = (e) => {
    e.preventDefault();
    insertUser(newUser);
    e.target.reset();
  };

    return (
    <div>
    {/* Button trigger modal */}
    <button type="button" id="buttn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Add new
    </button>
    {/* Modal */}
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            {/* <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5> */}
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
          <form className="insertForm" onSubmit={submitUser}>
          <h2>Insert User</h2>
          <label htmlFor="_name">Name</label>
          <input
            type="text"
            id="_name"
            onChange={(e) => addNewUser(e, "user_name")}
            placeholder="Enter name"
            autoComplete="off"
            required
          />
          <label htmlFor="_email">Email</label>
          <input
            type="email"
            id="_email"
            onChange={(e) => addNewUser(e, "user_email")}
            placeholder="Enter email"
            autoComplete="off"
            required
          />
          <input type="submit" data-bs-dismiss="modal" value="Insert" />
        </form>
          </div>
          <div className="modal-footer">
            <button type="button" id="buttn" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Form;