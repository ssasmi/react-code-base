import axios from "axios";
import useLocalStorage from "hooks/useLocalStorage";
import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setLoading] = useState(false);
  const[response, setResponse] = useState(null);
  const[error,setError] = useState{null}
  const BASE_URL = "https://628a38525da6ddfd5d61021f.mockapi.io";
  return <div>useFetch</div>;
};

export default useFetch;
