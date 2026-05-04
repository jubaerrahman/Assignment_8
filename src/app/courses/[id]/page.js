import DetailsClient from "./DetailsClient"

export default async function Page({ params }) {
  const { id } = await params
  return <DetailsClient id={id} />
}