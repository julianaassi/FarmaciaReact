import { LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
    const data = new Date().getFullYear();

    return (
        <div className="flex justify-center bg-indigo-900 text-white">
            <div className="container flex flex-col items-center py-4">
                <p className="text-xl font-bold">
                    Farmacia Gen| Copyright: {data}
                </p>
                <p className="text-lg">Acesse nossas redes sociais</p>
                <div className="flex gap-2">
                    <a
                        href="https://www.linkedin.com/in/seu_usuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                    >
                        <LinkedinLogo size={48} weight="bold" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
