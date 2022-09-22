import React from "react";

const Form = (props) => {
    // initialize state to hold the data of our form
    // Array destructuring
    const [formData, setFormData] = React.useState({
        searchTerm: "",
    })
    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
    // use the event object to detect key and value to update
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault();
        //pass the search term to moviesearch prop, which is apps getMovie function
        props.moviesearch(formData.searchterm);
      };
    
    //The component must return some JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

// We must export the component to use it in other files
export default Form;