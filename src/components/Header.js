const Header = ({name, size, color, position}) => {
    return (
        <div>
            <h1 style={{
                'fontSize':'7em',
                'color':color,
                'textAlign':position,
                'fontFamily':'coolvetica'
            }}>{name}</h1>
        </div>
    );
}

export default Header;

