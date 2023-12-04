import { useState } from "react";

function App() {
  const [preview, setPreview] = useState("");

  const grabImage = (e) => {
    const link = URL.createObjectURL(e.target.files[0])
    setPreview(link)
  };


  const uploadFile = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    fetch("http://localhost:5000/api/images", {
      method:"POST", 
      body:data}
      ).then(res=>res.json())
      .then(result=>console.log(result))
  };




  return (
    <>
      <h1>Image Upload React</h1>
      <form onSubmit={uploadFile}>
      <input type="text" name="username" />
        <input type="file" multiple name="file" onChange={grabImage} />
        <button>upload</button>
      </form>

      <div
        style={{
          display: "flex",
          width: "200px",
          height: "200px",
          border: "2px solid white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={preview} alt="" width="100%" />
      </div>
    </>
  );
}

export default App;
