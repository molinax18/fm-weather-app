import { getCountryByName } from "@/services/weather/open-meteo/search/country-by-name";
import { SearchIcon } from "@/shared/components/svg";
import { useQuery } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import Input from "@/shared/components/input/components/input-root";
import Button from "@/shared/components/button/button";
import Dropdown from "@/shared/components/dropdown/components/dropdown";
import SearchContent from "./search-content";
import style from "./search.module.css";

export default function Search() {
  const [search, setSearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const { data, refetch, isFetching } = useQuery({
    queryKey: ["weatherSearch"],
    queryFn: () => getCountryByName(search),
    enabled: false,
  });

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (search.trim()) {
      const result = await refetch();
      if (result.data) {
        setIsDropdownOpen(true);
      }
      setSearch("");
    }
  };

  return (
    <form
      className={`flex-col gap-md ${style["search-wrapper"]}`}
      onSubmit={onSubmit}
    >
      <Input
        id="search"
        name="search"
        className={`card p-card-xs gap-md ${style["search-input-container"]}`}
      >
        <SearchIcon />

        <Input.Control
          placeholder="Search for a place..."
          className={`${style["search-input"]}`}
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
      </Input>

      <Button
        type="submit"
        className="p-card-sm"
        buttonTheme="blue"
        disabled={!search || isFetching}
      >
        Search
      </Button>

      <Dropdown isOpenByParent={isDropdownOpen} onToggle={toggleDropdown}>
        <Dropdown.Menu className={style["search-menu"]}>
          {data && <SearchContent data={data.results} />}
        </Dropdown.Menu>
      </Dropdown>
    </form>
  );
}
