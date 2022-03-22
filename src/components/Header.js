const Header = ({name, size, color, position}) => {
    return (
        <div>
            <h1 style={{
                'fontSize':size,
                'color':color,
                'textAlign':position,
                'fontFamily':'coolvetica',
                // 'fontWeight':'bold'
            }}>{name}</h1>
        </div>
    );
}

export default Header;

