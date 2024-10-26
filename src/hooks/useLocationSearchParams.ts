import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type SearchParamsType = Record<string, any> | null;
export type SearchParamsFunc = (
  value: SearchParamsType | ((val: SearchParamsType) => SearchParamsType),
) => void;

export const useLocationSearchParams = () => {
  const navigate = useNavigate();
  const { search, hash } = useLocation();

  const [searchParams, setSearchParams] = useState<SearchParamsType>(null);

  useEffect(() => {
    const params = new URLSearchParams(search);

    const newParams: Record<string, any> = {};
    Array.from(params.entries()).forEach(([key, value]) => {
      if (["true", "false"].includes(value)) {
        newParams[key] = value === "true";
      } else if (value[0] === "{" || value[0] === "[") {
        newParams[key] = JSON.parse(value);
      } else if (!isNaN(+value) && value !== "") {
        newParams[key] = +value;
      } else {
        newParams[key] = value;
      }
    });
    setSearchParams(newParams);
  }, [search]);

  const handleChange: SearchParamsFunc = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const data = value instanceof Function ? value(searchParams) : value;
      const params = new URLSearchParams();
      Object.entries(data || {}).forEach(([key, value]) => {
        switch (typeof value) {
          case "boolean":
          case "number":
          case "string":
            params.set(key, `${value}`);
            break;
          case "object":
            if (Array.isArray(value)) {
              if (value.length > 0) {
                params.set(key, JSON.stringify(value));
              }
            } else if (value !== null) {
              params.set(key, JSON.stringify(value));
            }
            break;
          default:
        }
      });
      navigate({ search: params.toString(), hash: hash }, { replace: true });
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error);
    }
  };

  return [searchParams, handleChange] as [SearchParamsType, SearchParamsFunc];
};
