const Header = ({name, size, color, position, padding}) => {
    return (
        <div>
            <h1 style={{
                'fontSize':size,
                'color':color,
                'textAlign':position,
                'fontFamily':'coolvetica',
                'padding': padding
            }}>{name}</h1>
        </div>
    );
}

export default Header;

