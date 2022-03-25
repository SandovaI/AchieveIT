import classes from "./Video.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Video({ file }) {
  const [isLoading, setIsLoading] = useState(true);

  const videoIsLoaded = () => setIsLoading(false);

  return (
    <div>
      <video
        onLoadedData={videoIsLoaded}
        className={classes.video}
        width="259px"
        height="486px"
        controls
      >
        <source src={file} />
      </video>
    </div>
  );
}
