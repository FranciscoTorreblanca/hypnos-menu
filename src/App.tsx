import { useMemo, useState, useEffect } from "react"
import { Search, Moon, X } from "lucide-react"
import { SiInstagram, SiGooglemaps } from "@icons-pack/react-simple-icons"
import { motion } from "framer-motion"

import CATEGORIES from "./constants/categories.ts"
import ITEMS from "./constants/items.ts"

function formatMXN(value: number) {
    return value.toLocaleString("es-MX", { style: "currency", currency: "MXN" })
}

function normalize(str: string) {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase()
}

function StarDivider() {
    return (
        <div className="relative my-8 flex items-center justify-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
            <div className="absolute -top-2 rounded-full border border-yellow-600 bg-black/60 px-3 py-1 text-xs tracking-widest text-yellow-300">
                ✦ ✧ ✦
            </div>
        </div>
    )
}

function Seal() {
    return (
        <div className="pointer-events-none select-none absolute right-4 top-4 hidden md:block">
            <div className="relative h-24 w-24 rounded-full border-2 border-yellow-600/80 bg-black/40 backdrop-blur-sm">
                <div className="absolute inset-0 m-2 rounded-full border border-yellow-700/60" />
                <div className="absolute inset-0 flex items-center justify-center text-yellow-300">
                    <Moon className="h-8 w-8" />
                </div>
                <div className="absolute right-2 top-2 text-[10px] tracking-widest text-yellow-500">
                    HYPNOS
                </div>
            </div>
        </div>
    )
}

function useCategories(items: typeof ITEMS) {
    return useMemo(() => {
        const map: Record<string, number> = {}
        for (const cat of CATEGORIES)
            map[cat] = Object.values(items).filter(
                (it: (typeof ITEMS)[0]) => it.category === cat
            ).length as number
        return CATEGORIES.map((c) => ({ name: c, count: map[c] }))
    }, [items])
}

export default function HypnosMenuLanding() {
    const [query, setQuery] = useState("")
    const [activeCat, setActiveCat] = useState<string | "Todas">("Todas")
    const [sort, setSort] = useState<"relevance" | "name" | "price">(
        "relevance"
    )

    // Computa categorías con conteo
    const cats = useCategories(ITEMS)

    const filtered = useMemo(() => {
        const q = normalize(query)
        let arr = Object.values(ITEMS).filter((it: (typeof ITEMS)[0]) =>
            activeCat === "Todas" ? true : it.category === activeCat
        )
        if (q) {
            arr = arr.filter((it: (typeof ITEMS)[0]) =>
                normalize(it.name).includes(q)
            )
        }
        if (sort === "name") {
            arr = arr
                .slice()
                .sort((a: (typeof ITEMS)[0], b: (typeof ITEMS)[0]) =>
                    normalize(a.name).localeCompare(normalize(b.name))
                )
        } else if (sort === "price") {
            arr = arr
                .slice()
                .sort(
                    (a: (typeof ITEMS)[0], b: (typeof ITEMS)[0]) =>
                        a.price - b.price
                )
        }
        return arr
    }, [query, activeCat, sort])

    const sections = useMemo(() => {
        const groups: Record<string, (typeof ITEMS)[0][]> = {} as Record<
            string,
            (typeof ITEMS)[0][]
        >
        for (const it of filtered as (typeof ITEMS)[0][]) {
            ;(groups[it.category] ||= []).push(it)
        }
        return groups
    }, [filtered])

    useEffect(() => {
        document.title = "Hypnos Café • Menú"
    }, [])

    return (
        <div className="min-h-screen w-full bg-[#0a0c0b] text-neutral-100 mg-[12px]">
            {/* Fondo estelar y bordes góticos */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-black" />
                <div className="absolute inset-4 rounded-3xl border border-yellow-700/40" />
                <div className="absolute inset-10 rounded-[2rem] border border-yellow-700/30" />
            </div>

            <header className="relative mx-auto w-full max-w-6xl px-4 pt-8">
                <Seal />
                <motion.h1
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center font-serif text-4xl md:text-5xl tracking-[0.2em] text-yellow-300 drop-shadow"
                    style={{ fontFamily: "Cinzel, ui-serif, serif" }}
                >
                    HYPNOS CAFÉ
                </motion.h1>
                <p className="mt-2 text-center text-sm text-yellow-200/70">
                    Menú
                </p>

                {/* Buscador y controles */}
                <div className="relative my-4">
                    <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-60" />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Buscar por nombre…"
                        className="w-full rounded-xl border border-yellow-800/40 bg-black/30 px-10 py-3 text-sm outline-none ring-0 placeholder:text-yellow-200/40 focus:border-yellow-500/60"
                    />
                    {query && (
                        <button
                            onClick={() => setQuery("")}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-yellow-600/10"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>
                <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_auto] md:items-center">
                    <div className="flex items-center justify-end gap-2">
                        <label className="text-xs uppercase tracking-widest text-yellow-300/80">
                            Ordenar
                        </label>
                        <select
                            className="rounded-lg border border-yellow-700/40 bg-black/40 px-3 py-2 text-sm"
                            value={sort}
                            onChange={(e) => setSort(e.target.value as any)}
                        >
                            <option value="relevance">Relevancia</option>
                            <option value="name">Nombre</option>
                            <option value="price">Precio</option>
                        </select>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        <button
                            onClick={() => setActiveCat("Todas")}
                            className={`rounded-full border px-3 py-2 text-xs uppercase tracking-widest ${
                                activeCat === "Todas"
                                    ? "border-yellow-500 bg-yellow-500/10 text-yellow-300"
                                    : "border-yellow-800/50 text-yellow-200/70 hover:border-yellow-600/60"
                            }`}
                        >
                            Todas{" "}
                            <span className="ml-1 opacity-70">
                                {Object.values(ITEMS).length}
                            </span>
                        </button>
                        {cats.map((c) => (
                            <button
                                key={c.name}
                                onClick={() => setActiveCat(c.name)}
                                className={`rounded-full border px-3 py-2 text-xs uppercase tracking-widest ${
                                    activeCat === c.name
                                        ? "border-yellow-500 bg-yellow-500/10 text-yellow-300"
                                        : "border-yellow-800/50 text-yellow-200/70 hover:border-yellow-600/60"
                                }`}
                            >
                                {c.name}{" "}
                                <span className="ml-1 opacity-70">
                                    ({c.count})
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <StarDivider />
            </header>

            <main className="mx-auto max-w-6xl px-4 pb-20">
                {CATEGORIES.filter(
                    (c) => activeCat === "Todas" || c === activeCat
                ).map((cat) => {
                    const list = sections[cat] || []
                    if (!list.length) return null
                    return (
                        <section
                            key={cat}
                            id={normalize(cat)}
                            className="mb-12 scroll-mt-24"
                        >
                            <h2
                                className="mb-4 text-2xl font-semibold tracking-widest text-yellow-300"
                                style={{
                                    fontFamily: "Cinzel, ui-serif, serif",
                                }}
                            >
                                {cat}
                            </h2>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {list.map((item) => (
                                    <motion.article
                                        key={item.name + item.price}
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{
                                            once: true,
                                            margin: "-50px",
                                        }}
                                        transition={{ duration: 0.35 }}
                                        className="relative overflow-hidden rounded-2xl border border-yellow-800/40 bg-[linear-gradient(145deg,rgba(0,0,0,0.55),rgba(23,23,23,0.4))] p-4 shadow-[0_0_40px_rgba(234,179,8,0.05)]"
                                    >
                                        <div className="absolute -right-6 -top-6 h-24 w-24 rotate-12 rounded-full border border-yellow-800/40" />
                                        <div className="absolute -right-12 -top-12 h-24 w-24 -rotate-12 rounded-full border border-yellow-800/30" />

                                        <div className="flex items-start justify-between gap-3">
                                            <h3 className="text-lg font-semibold text-yellow-100">
                                                {item.name}
                                            </h3>
                                            <div className="shrink-0 rounded-full border border-yellow-700/50 bg-black/30 px-3 py-1 text-sm text-yellow-300">
                                                {formatMXN(item.price)}
                                            </div>
                                        </div>
                                        <p className="mt-2 text-sm text-yellow-200/80">
                                            {item.description}
                                        </p>
                                    </motion.article>
                                ))}
                            </div>
                        </section>
                    )
                })}
            </main>

            <footer className="mx-auto max-w-6xl px-4 pb-10 text-yellow-200/70">
                <StarDivider />
                <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
                    <div className="text-sm opacity-80">
                        © {new Date().getFullYear()} Hypnos Café • Coapa, CDMX
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                        <a
                            className="hover:text-yellow-300"
                            href="https://www.instagram.com/hypnoscafecdmx/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiInstagram className="mr-1 inline h-4 w-4" />
                            @hypnoscafecdmx
                        </a>
                        <a
                            className="hover:text-yellow-300"
                            href="https://maps.app.goo.gl/Bb3ysr95CJZQdaeSA"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiGooglemaps className="mr-1 inline h-4 w-4" />
                            ¿Cómo llegar?
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
