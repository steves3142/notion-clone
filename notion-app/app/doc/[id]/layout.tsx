import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";

function Doclayout({
    children,
    params: { id },
}: {
    children: React.ReactNode;
    params: { id: string };
}) {
    auth();

    return <RoomProvider roomId={id}>{children}</RoomProvider>;

}

export default Doclayout