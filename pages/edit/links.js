import React, { useState,useEffect  } from 'react';
import axios from 'axios';
const addUrl = async (url, title) => {
  try {
    const response = await axios.post('http://localhost:5000/links', { url, title });
    console.log('Success:', response);
  } catch (error) {
    console.error('Error:', error);
  }
};
const getLinks = async () => {

  try {
 
     const response = await axios.get('http://localhost:5000/links');
 
     return response.data;
 
  } catch (error) {
 
     console.error('Error:', error);
 
     return [];
 
  }
 
 };
const removeLink = async (id) => {
  try {
 
     await axios.delete(`http://localhost:5000/links/${id}`);
 
     console.log('Link removed successfully');
 
  } catch (error) {
 
     console.error('Error:', error);
 
  }
 
 };
 
const UrlForm = () => {
  const [inputs, setInputs] = useState({ url: '', title: '' });
  const [links, setLinks] = useState([]);
 const [linkIdToRemove, setLinkIdToRemove] = useState(null);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { url, title } = inputs;
    await addUrl(url, title);
    setInputs({ url: '', title: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  useEffect(() => {

    const fetchLinks = async () => {

       const linksData = await getLinks();

       setLinks(linksData);

    };


    if (linkIdToRemove) {

       removeLink(linkIdToRemove);

       setLinkIdToRemove(null);

    }


    fetchLinks();

 }, [linkIdToRemove]);
 return (

  <div>
<form onSubmit={handleSubmit}>
      <label style={{ marginLeft: "70px" }}>
     URL:
       <input
          className='outline-none border-gray-200 shadow-md rounded-md px-2 p-1 ml-2'
          type="text"
          name="url"
          value={inputs.url}
          onChange={handleChange}
          placeholder="Enter URL"
        />
      </label>
      <label style={{ marginLeft: "60px" }}>
        Title:
        <input
          className='outline-none border-gray-200 shadow-md rounded-md px-2 p-1 ml-2'
          type="text"
          name="title"
          value={inputs.title}
          onChange={handleChange}
          placeholder="Enter Title"
        />
      </label>
      <button className='bg-green-500 text-white px-4 py-2 rounded-md shadow-sm ml-4' type="submit">
        Save
      </button>
    </form>

     <table style={{border:"1px lightblue solid", width:"95%" , marginTop:"20px", marginLeft:"20px",backgroundColor:"rgb(243, 246, 252)"}}>

        <thead>
   <tr>
 <th style={{border:"1px solid"}}>URL</th>
 <th style={{border:"1px solid"}}>Title</th>
<th style={{border:"1px solid"}}>Action</th>

           </tr>

        </thead>

        <tbody>

           {links.map((link) => (

              <tr key={link._id}>

                 <td style={{border:"1px solid" ,marginLeft:"5px", paddingLeft: "22px"}}>{link.url}</td>

                 <td style={{border:"1px solid" , paddingTop:"30px",paddingLeft: "22px"}}>{link.title}</td>

                 <td style={{border:"1px solid" ,paddingLeft: "22px"}}>

                    <button onClick={() => setLinkIdToRemove(link._id)} style={{borderRadius:"5px" ,width:"100px" ,height:"45px",color:"white", backgroundColor:"red" , marginLeft:"20px"}}>

                       Remove

                    </button>

                 </td>

              </tr>

           ))}

        </tbody>

     </table>

  </div>

);

};
export default UrlForm;

