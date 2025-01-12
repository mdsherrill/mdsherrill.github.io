import React from 'react';
import sigLogo from '../assets/signature.svg';
import gitLogo from '../assets/github.svg';
import linkedLogo from '../assets/linkedin.svg';

const styles = {
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        topPadding: '0px',
        backgroundColor: '#333',
        color: '#fff'
    },
    logo: {
        height: '40px'
    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0
    },
    li: {
        display: 'inline'
    },
    a: {
        color: '#fff',
        textDecoration: 'none'
    }
};

function Navbar() {
    return (
        <nav style={styles.nav}>
            <a href='/'> 
                <img src={sigLogo} alt="signature Logo" style={styles.logo} />
            </a>
            <ul style={styles.ul}>
                <li style={styles.li}><a href="/resume" style={styles.a}>Resume</a></li>
                <li style={styles.li}><a href="/projects" style={styles.a}>Projects</a></li>
                <li style={styles.li}><a href="/contact" style={styles.a}>Contact</a></li>
                <li style={styles.li}><a href="https://github.com/mdsherrill" target="_blank" rel="noopener noreferrer" style={styles.a}><img src={gitLogo} alt='GitHub'></img></a></li>
                <li style={styles.li}><a href="https://www.linkedin.com/in/matthew-sherrill/" target="_blank" rel="noopener noreferrer" style={styles.a}><img src={linkedLogo} alt='LinkedIn'></img></a></li>
            </ul>
        </nav>
    );
}

export default Navbar;