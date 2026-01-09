import { SearchIcon } from "@/shared/components/svg";
import { useQuery } from "@tanstack/react-query";
import { getCountryById } from "@/services/weather/weather-search.service";
import { API_KEY } from "@/services/weather/weather.constant";
import { useState, type FormEvent } from "react";
import type { WeatherSearchResponse } from "@/services/weather/weather.type";
import Input from "@/shared/components/input/components/input-root";
import Button from "@/shared/components/button/button";
import Dropdown from "@/shared/components/dropdown/components/dropdown";
import SearchContent from "./search-content";
import style from "./search.module.css";

export default function Search() {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data, refetch, isFetching } = useQuery({
    queryKey: ["weatherSearch"],
    queryFn: () => getCountryById({ key: API_KEY, q: search }),
    enabled: false,
  });

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (search.trim()) {
      const result = await refetch();
      if (result.data) {
        setIsMenuOpen(true);
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

      <Dropdown
        isOpenByParent={isMenuOpen}
        onToggle={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Dropdown.Menu className={style["search-menu"]}>
          {data && <SearchContent data={data as WeatherSearchResponse[]} />}
        </Dropdown.Menu>
      </Dropdown>
    </form>
  );
}
