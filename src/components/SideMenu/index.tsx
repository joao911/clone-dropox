import React, {useState, useEffect} from 'react';

import { Container } from './styles';

const scrollthreshold = 300;

declare global {
    interface Window{
        toggleActiveMenu: (() => void) | undefined;
    }
}
const SideMenu: React.FC = ({children}) => {
    const [scrollY, setScrollY] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() =>{
        function OnScroll(){
            setScrollY(window.scrollY);
            setIsActive(false);
        }
        window.addEventListener('scroll', OnScroll);

        return () => window.removeEventListener('scroll', OnScroll)
    },[]);
    const classes = [
        isActive ? 'open': '',
        scrollY <= scrollthreshold ? 'scrollOpen' : '',
    ];
    const className = classes.join(' ').trim();

    function toggleActiveMenu() {
        setIsActive((prev) => !prev);
      }
    
      window.toggleActiveMenu = toggleActiveMenu;
        return <Container className={className}>{children}</Container>;
}

export default SideMenu;