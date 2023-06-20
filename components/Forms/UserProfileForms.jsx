import React from 'react';

const UserProfileForms = () => {
  return (
    <form>
      <div>
        <label>First Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" />
      </div>
      <div>
        <label>Phone alt</label>
        <input type="text" />
      </div>
      <div>
        <label>Label</label>
        <input type="text" />
        <label>City</label>
        <input type="text" />
        <label>State</label>
        <input type="text" />
        <label>Zip</label>
        <input type="text" />
      </div>
    </form>
  );
};

export default UserProfileForms;
