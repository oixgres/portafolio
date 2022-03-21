import React from "react";
import { Segment, Menu, Icon } from "semantic-ui-react";

const MyMenu = ( props ) => {
    const [activeItem, setActiveItem] = React.useState("home");
    
    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    };

    return(
        <Segment inverted>
            <Menu inverted pointing secondary size="large">
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={handleItemClick}
                />

                <Menu.Menu position='right'>
                    <Menu.Item active={activeItem === 'instagram'} onClick={handleItemClick}>
                        <Icon name='instagram' size="large" />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Segment>
    );
}

export default MyMenu;