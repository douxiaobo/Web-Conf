import { createCell } from 'web-cell';

interface Logo {
    name: string;
    URL: string;
    path: string;
}

export function LogoList({ member }: { member: Logo[] }) {
    return (
        <div className="logos" data-view="member">
            {member.map(({ URL, name, path }) => (
                <a target="_blank" href={URL}>
                    <img title={name} src={`image/logo/${path}`} />
                </a>
            ))}
        </div>
    );
}
