import { auth } from "@/lib/auth"

export async function POST(req){

  const session = await auth.api.getSession({
    headers: req.headers
  })

  if(!session?.user){
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await req.json()

  await auth.api.updateUser({
    userId: session.user.id,
    data: {
      name: body.name,
      image: body.image
    }
  })

  return Response.json({ success: true })
}