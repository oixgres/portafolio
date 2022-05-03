import React, {useEffect,useState} from "react";
import { Segment, Menu, Icon, Dropdown } from "semantic-ui-react";
import {useNavigate} from 'react-router-dom';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const Navbar = ( {location} ) => {
    const [windowSize, setwindowSize] = useState(getWindowDimensions());

    const navigation = useNavigate();
    const activeItem = location;
    
    const handleItemClick = (e, { name }) => {
        name==='home' ? navigation('/') : navigation(`/${name}`);
    };
    
    const handleExternalClick = (e, {name}) => {
        window.open(name, '_blank');
    }

    useEffect(() => {
        function handleResize() {
            setwindowSize(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <Segment inverted >
            <Menu inverted pointing secondary fluid compact>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                    fitted
                />
                <Menu.Item
                    name='about'
                    active={activeItem === 'about'}
                    onClick={handleItemClick}
                    fitted
                />
                <Menu.Item
                    name='work'
                    active={activeItem === 'work'}
                    onClick={handleItemClick}
                    fitted
                />
                <Menu.Item
                    name='skills'
                    active={activeItem === 'skills'}
                    onClick={handleItemClick}
                    fitted
                />

                {windowSize.width >= 500 ?
                <Menu.Menu position='right' >
                    <Menu.Item
                        onClick={handleExternalClick}
                        name ='https://www.linkedin.com/in/segc7'
                        fitted
                        >
                        <Icon name='linkedin' size="large"/>
                    </Menu.Item>
                    <Menu.Item
                        onClick={handleExternalClick}
                        name ='https://github.com/oixgres'
                        fitted
                        >
                        <Icon name='github'size="large" />
                    </Menu.Item>
                    <Menu.Item
                        onClick={handleExternalClick}
                        name ='mailto:sergioegc07@gmail.com'
                        fitted
                        >
                        <Icon name='mail' size="large" />
                    </Menu.Item>
                </Menu.Menu>
                :
                <Dropdown item text=" " placeholder="compact">
                    <Dropdown.Menu>
                        <Segment inverted>
                            <Dropdown.Item
                                onClick={handleExternalClick}
                                name ='https://www.linkedin.com/in/segc7'
                            >
                                <Icon name='linkedin' size="large"/>
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={handleExternalClick}
                                name ='https://github.com/oixgres'
                            >
                                <Icon name='github'size="large" />
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={handleExternalClick}
                                name ='mailto:sergioegc07@gmail.com'
                            >
                                <Icon name='mail' size="large" />
                            </Dropdown.Item>
                        </Segment>
                    </Dropdown.Menu>
                </Dropdown>
            }
            </Menu>
        </Segment>
    );
}

export default Navbar;