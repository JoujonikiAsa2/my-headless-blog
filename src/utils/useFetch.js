import { useState, useEffect } from "react";

export const useFetch = ({
  query = "",                        
  variables = {},                    
  url = "http://localhost/blog/graphql", 
} = {}) => {                          
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return; 

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query, variables }),
        });

        if (!res.ok) throw new Error("Failed to fetch data");

        const json = await res.json();

        if (json.errors) {
          throw new Error(json.errors.map((e) => e.message).join(", "));
        }

        setData(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, JSON.stringify(variables), url]);

  return { data, loading, error };
};
