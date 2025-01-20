import { useLocalStorage } from "./useLocalStorage";

export const useCollapsible = (key: string) => {
  const [collapsed, setCollapsed] = useLocalStorage<string[]>(key, []);

  const toggleCollapsed = (key: string) => {
    if (collapsed.includes(key)) {
      setCollapsed(collapsed.filter((k) => k !== key));
    } else {
      setCollapsed([...collapsed, key]);
    }
  };
  return { collapsed, setCollapsed, toggleCollapsed };
};
