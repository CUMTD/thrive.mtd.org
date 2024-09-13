import throwError from "@/helpers/throwError";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? throwError('Missing NEXT_PUBLIC_BASE_URL');

interface Props {
    source: string;
    destination: string;
}

export default function Redirect({ source, destination }: Readonly<Props>) {
    return (
        <tr>
            <td data-label="From">{baseUrl}{source}</td>
            <td data-label="To">
                <Link href={destination} passHref>
                    {destination}
                </Link>
            </td>
        </tr>
    );

}