import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import { userTypes } from "../../config/data";

const UserForm = ({ user, onChange, saving, onSave }) => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <h5>Create a new user</h5>
        </div>
        <TextInput
          name="lastname"
          label="lastname"
          value={user.lastname}
          onChange={onChange}
          placeholder="lastname"
        />
        <TextInput
          name="firstname"
          label="firstname"
          value={user.firstname}
          onChange={onChange}
          placeholder="firstname"
        />
        <TextInput
          name="email"
          label="email"
          value={user.email}
          onChange={onChange}
          placeholder="email"
        />
        <TextInput
          name="password"
          label="password"
          type="password"
          value={user.password}
          onChange={onChange}
          placeholder="password"
        />
        <SelectInput
          name="type"
          label="user category"
          defaultOption="Choose a category"
          options={userTypes}
          value={user.type}
          onChange={onChange}
        />
        <button
          disabled={saving}
          className="waves-effect waves-light btn"
          onClick={onSave}
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
