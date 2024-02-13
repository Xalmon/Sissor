import React from 'react';
import styles from './index.module.css'; 

const footerData = [
    {
        title: "Why Scissor ?",
        List: [
            "Scissor 101",
            "Integrations & API",
            "Pricing"
        ]
    },
    {
        title: 'Solutions ',
        List: [
            'Social Media',
            'Digital Marketing',
            'customer Service',
            'For Developers',
        ]
    },
    {
        title: 'Products ',
        List: [
            'Link Management',
            'QR Codes',
            'Link-in-bio',
        ]
    },
    {
        title: 'Company ',
        List: [
            'About Scissor',
            'Careers',
            'Partners',
            'Press',
            'Contact',
            'Reviews',
        ]
    },
    {
        title: 'Resources ',
        List: [
            'Blog',
            'Resource Library',
            'Developers',
            'App Connectors',
            'Support',
            'Trust Center',
            'Browser Extension',
            'Mobile App'
        ]
    },
    {
        title: 'Features ',
        List: [
            'Branded Links',
            'Mobile Links',
            'Campaign',
            'Management & Analytics',
            'QR Code Generation',
        ]
    },
    {
        title: 'Legal ',
        List: [
            'Privacy Policy',
            'Cookie Policy',
            'Terms of Service',
            'Acceptable Use Policy',
            'Code of Conduct',
        ]
    },
];

const footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                {footerData.map((section, index) => (
                    <li key={index}>
                        <h3>{section.title}</h3>
                        <ul>
                            {section.List.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default footer;
