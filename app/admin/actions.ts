"use server"

import { createAdminClient } from "@/lib/supabase/admin"
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

async function verifyAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error("Não autenticado")

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single()

  if (profile?.role !== "admin") throw new Error("Sem permissão")
}

export async function updateMaterialStatus(id: string, status: string) {
  await verifyAdmin()
  const db = createAdminClient()
  await db.from("materials").update({ status }).eq("id", id)
  revalidatePath("/")
  revalidatePath("/admin")
}

export async function toggleFeatured(id: string, featured: boolean) {
  await verifyAdmin()
  const db = createAdminClient()
  await db.from("materials").update({ featured }).eq("id", id)
  revalidatePath("/")
  revalidatePath("/admin")
}

export async function updateResultado(id: string, resultado: string) {
  await verifyAdmin()
  const db = createAdminClient()
  await db.from("materials").update({ resultado: resultado || null }).eq("id", id)
  revalidatePath("/admin")
}

export async function createMaterial(data: {
  title: string
  description: string
  type: string
  status: string
  author: string
  path: string
  tags: string[]
}) {
  await verifyAdmin()
  const db = createAdminClient()
  const { error } = await db.from("materials").insert(data)
  if (error) throw new Error(error.message)
  revalidatePath("/")
  revalidatePath("/admin")
}

export async function updateMaterial(id: string, data: {
  title: string
  description: string
  type: string
  author: string
  path: string
  tags: string[]
}) {
  await verifyAdmin()
  const db = createAdminClient()
  const { error } = await db.from("materials").update(data).eq("id", id)
  if (error) throw new Error(error.message)
  revalidatePath("/")
  revalidatePath("/admin")
}

export async function updateUserRole(userId: string, role: "viewer" | "admin") {
  await verifyAdmin()
  const db = createAdminClient()
  await db.from("profiles").update({ role }).eq("id", userId)
  revalidatePath("/admin")
}

export async function generateShareLink(id: string): Promise<string> {
  await verifyAdmin()
  const db = createAdminClient()
  const token = crypto.randomUUID()
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
  const { error } = await db
    .from("materials")
    .update({ share_token: token, share_expires_at: expiresAt })
    .eq("id", id)
  if (error) throw new Error(error.message)
  revalidatePath("/admin")
  return token
}

export async function revokeShareLink(id: string) {
  await verifyAdmin()
  const db = createAdminClient()
  await db
    .from("materials")
    .update({ share_token: null, share_expires_at: null })
    .eq("id", id)
  revalidatePath("/admin")
}

export async function deleteMaterial(id: string) {
  await verifyAdmin()
  const db = createAdminClient()
  await db.from("materials").delete().eq("id", id)
  revalidatePath("/")
  revalidatePath("/admin")
}
