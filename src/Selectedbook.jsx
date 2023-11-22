import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const contact = await response.json();
        setContact(contact);
      } catch (error) {
        // Handle the error here if needed, or remove the catch block
      }
    }
    fetchSelectedContact();
  }, [selectedContactId]);

  return (
    <div>
      {contact && (
        <div>
          <p>
            <b>Name:</b> {contact.name}
          </p>
          <p>
            <b>Email:</b> {contact.email}
          </p>
          <p>
            <b>Phone:</b> {contact.phone}
          </p>
          <div>
            <b>Address:</b>
            <p>
              <b>Street:</b>
              {contact.address.street}
              <br />
              <b>City/Zip:</b>
              {contact.address.city}
              {contact.address.zipcode}
            </p>
          </div>
          <p>
            <b>Company:</b> {contact.company.name}
          </p>
        </div>
      )}
      <button
        onClick={() => {
          setSelectedContactId(null);
        }}
      >
        Back
      </button>
    </div>
  );
}

SelectedContact.propTypes = {
  selectedContactId: PropTypes.number.isRequired,
  setSelectedContactId: PropTypes.func.isRequired,
};
