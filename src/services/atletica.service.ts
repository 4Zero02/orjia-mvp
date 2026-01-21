import { Atletica } from "@/types/atletica"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getAtleticas(): Promise<Atletica[]> {
  const res = await fetch(`${API_URL}/atleticas`, {
    cache: "no-store",
  })

  if (!res.ok) throw new Error("Erro ao buscar atléticas")

  return res.json()
}
