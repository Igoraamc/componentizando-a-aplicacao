import { GenreResponseProps } from "../App";

interface ContentHeaderProps {
    selectedGenre: GenreResponseProps;
}

export function ContentHeader(props: ContentHeaderProps) {
    const { selectedGenre } = props;

    return (
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    );
}