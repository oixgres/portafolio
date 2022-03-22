import React from "react";
import { Segment, Menu, Icon } from "semantic-ui-react";

const Navbar = ( props ) => {
    const [activeItem, setActiveItem] = React.useState("home");
    
    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    };

    const handleExternalClick = (e, {name}) => {
        window.open(name, '_blank');
    }

    return(
        <Segment inverted>
            <Menu inverted pointing secondary size="large">
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='works'
                    active={activeItem === 'works'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='about'
                    active={activeItem === 'about  '}
                    onClick={handleItemClick}
                />

                <Menu.Menu position='right'>
                    <Menu.Item
                        active={activeItem === 'linkedin'}
                        onClick={handleExternalClick}
                        name ='https://www.linkedin.com/in/segc7'
                    >
                        <Icon name='linkedin' size="large"/>
                    </Menu.Item>
                    <Menu.Item
                        active={activeItem === 'github'}
                        onClick={handleExternalClick}
                        name ='https://github.com/oixgres'
                    >
                        <Icon name='github'size="large" />
                    </Menu.Item>
                    <Menu.Item
                        active={activeItem === 'mail'}
                        onClick={handleExternalClick}
                        name ='mailto:sergioegc07@gmail.com'
                    >
                        <Icon name='mail' size="large" />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Segment>
    );
}

export default Navbar;