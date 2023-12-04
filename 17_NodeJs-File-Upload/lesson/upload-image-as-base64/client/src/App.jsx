import { useState } from "react";

function App() {
  const [preview, setPreview] = useState("");

  const grabImage = (e) => {
    /*  const link  = URL.createObjectURL(e.target.files[0])
      setPreview(link) */

    //base64urlencodedData

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]); //convert binary data into base64urlencodeddata

    reader.onload = (event) => {
      console.log(event.target.result);
      setPreview(event.target.result);
    };
  };

  const uploadFile = (e) => {
    e.preventDefault();
   
    fetch("http://localhost:5000/api/images", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({image:preview}),
    })
    .then(res=>res.json())
    .then(result=>console.log(result))
  };




  return (
    <>
      <h1>Image Upload React</h1>
      <form onSubmit={uploadFile}>
        <input type="file" onChange={grabImage} />
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
