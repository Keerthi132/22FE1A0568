import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useUrlStore from "../state/urlStore";

function Redirect() {
  const { code } = useParams();
  const urls = useUrlStore(state => state.urls);

  useEffect(() => {
    const found = urls.find(u => u.short === code);
    if (found) {
      window.location.href = found.original;
    }
  }, [code, urls]);

  return <p>Redirecting...</p>;
}

export default Redirect;
