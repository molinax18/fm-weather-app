import { SearchIcon } from "@/shared/ui/svg";
import Input from "@/shared/ui/input/components/input-root";
import Button from "@/shared/ui/button/button";
import style from "./search.module.css";

export default function Search() {
  return (
    <form className={`flex-col ${style["search-wrapper"]}`}>
      <Input
        id="search"
        name="search"
        className={`card p-card-xs ${style["search-input-container"]}`}
      >
        <SearchIcon />
        <Input.Control
          placeholder="Search for a place..."
          className={`${style["search-input"]}`}
        />
      </Input>

      <Button type="submit" className="p-card-sm" buttonTheme="blue">
        Search
      </Button>
    </form>
  );
}
