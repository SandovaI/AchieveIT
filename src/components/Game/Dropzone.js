import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";
import React, { useCallback, useMemo, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import storage from "../../firebase";

const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  color: "#bdbdbd",
  transition: "border .3s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const Dropzone = (props) => {
  const [files, setFiles] = useState([]);

  const [document, setDocument] = useState("");
  const [url, setUrl] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    // console.log("this is the accepted file: " + acceptedFiles);
    // setFile(acceptedFiles);
    setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
    })));

    // setDocument(e.target.files[0]);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = files.map(file => (
      <div key={file.name}>
        <img src={file.preview} alt={file.name} width={200} height={200}/>
      </div>
  ));

  

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    //   URL.revokeObjectURL(document.preview);
    },
    [files]
  );

  function handleUpload(e) {
    setDocument(e.target.files[0]);
  }

  // uploads file to firebase
  const upload = (e) => {
    e.preventDefault();
    if (document == null) {
      return;
    }

    const ref = storage.ref(`/images/${files[0].name}`);
    const uploadTask = ref.put(document);
    uploadTask.on("stage_changed", alert("success"), alert, () => {
      ref.getDownloadURL().then((url) => {
        setDocument(null);
        setUrl(url);
      });
    });
  };

  return (
    <section>
      <h1>Uploading File section</h1>
      <div>
        <input type="file" onChange={handleUpload} />
        <button onClick={upload}>Upload!</button>
      </div>

      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Drag and drop your files here. </div>
      </div>

      <img src={url} alt="upload" width={200} height={200} />
      
        <aside>
            {thumbs}
        </aside>
    </section>
  );
};

export default Dropzone;
