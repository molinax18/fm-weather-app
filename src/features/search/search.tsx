import { SearchIcon } from "@/shared/components/svg";
import Input from "@/shared/components/input/components/input-root";
import Button from "@/shared/components/button/button";
import style from "./search.module.css";

export default function Search() {
  return (
    <form className={`flex-col gap-md ${style["search-wrapper"]}`}>
      <Input
        id="search"
        name="search"
        className={`card p-card-xs gap-md ${style["search-input-container"]}`}
      >
        <SearchIcon />
        <Input.Control
          placeholder="Search for a place..."
          className={`${style["search-input"]}`}
          name="search"
        />
      </Input>

      <Button type="submit" className="p-card-sm" buttonTheme="blue">
        Search
      </Button>
    </form>
  );
}
