export const dynamic = "force-dynamic"
import DetailsClient from "./DetailsClient"

export default async function Page({ params }) {

const { id } = await params   // 👈 FIX HERE

return <DetailsClient id={id} />
}