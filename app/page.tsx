import { redirect } from "next/navigation"

export default function Page() {
  // Le livrable est un fichier HTML autonome servi depuis /public.
  redirect("/calendrier.html")
}
