import { Link } from "@inertiajs/react";

export default function ApplicationLogo() {
    return (
        <Link href={route("Welcome")} className="cursor-pointer">
            <img
                src="../asset/images/navbar-logo.png"
                alt="logo Build-IT 2025"
                className="w-10"
            />
        </Link>
    );
}
