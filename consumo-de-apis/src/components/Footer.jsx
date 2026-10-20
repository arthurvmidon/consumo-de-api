const links = [
    {
        href: "https://github.com/vitejs/vite",
        icon: "github-icon",
        text: "GitHub"
    },
    { href: "https://chat.vite.dev/", icon: "discord-icon", text: "Discord" },
    { href: "https://x.com/vite_js", icon: "x-icon", text: "X.com" },
    {
        href: "https://bsky.app/profile/vite.dev",
        icon: "bluesky-icon",
        text: "Bluesky"
    }
]

function Footer() {
    return (
        <footer id="footer">
            <ul className="social-links">
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} target="_blank">
                           <svg 
                           className="button-icon"
                           role="presentation"
                           aria-hidden="true"
                           >
                            <use href={`/icons.svg#${link.icon}`}></use>
                            </svg>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <p> {new Date().getFullYear()} Consumo de APIs com React. </p>
        </footer>
    )
}

export default Footer;
