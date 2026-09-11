import { useEffect, useState } from "react";
const API_URL = "http://localhost:5257/api/v1/Category";

interface CategoryReadDto {
    id: number;
    name: string;
    slug: string;
    url: string;
    isActive: boolean;
    parentId: number | null;
    products: number[] | null;
}

interface CategoryFormState {
    name: string;
    slug: string;
    url: string;
    parentId: string;
}

export default function Category() {
    const [categories, setCategories] = useState<CategoryReadDto[]>([]);
    const [form, setForm] = useState<CategoryFormState>({
        name: "",
        slug: "",
        url: "",
        parentId: "",
    });

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // === GET all categories ===
    const loadCategories = async () => {
        try {
            const res = await fetch(API_URL);
            setError(null);
            if (!res.ok) {
                if (res.status === 404) {
                    setCategories([]);
                    return;
                }
                throw new Error(`HTTP ${res.status}`);
            }
            const data: CategoryReadDto[] = await res.json();
            setCategories(data);
        } catch (err) {
            console.error("Error loading categories:", err);
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const load = async () => {
            await loadCategories();
        };
        load();
    }, []);

    // === input change ===
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // === POST create category ===
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);


        const formData = new FormData();
        formData.append("Name", form.name);
        formData.append("Slug", form.slug);
        formData.append("Url", form.url);
        if (form.parentId.trim() !== "") {
            formData.append("ParentId", form.parentId);
        }

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(`HTTP ${res.status}: ${text}`);
            }

            // очистка формы
            setForm({ name: "", slug: "", url: "", parentId: "" });

            // перезагрузка списка
            await loadCategories();
        } catch (err) {
            console.error("Error creating category:", err);
            setError((err as Error).message);
        }
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Категорії</h2>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 max-w-md p-4 border rounded bg-gray-50"
            >
                <h3 className="text-lg font-semibold">Додати категорію</h3>

                <input
                    name="name"
                    placeholder="Назва *"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="border px-3 py-2 rounded"
                />
                <input
                    name="slug"
                    placeholder="Slug *"
                    value={form.slug}
                    onChange={handleChange}
                    required
                    className="border px-3 py-2 rounded"
                />
                <input
                    name="url"
                    placeholder="URL (необов'язково)"
                    value={form.url}
                    onChange={handleChange}
                    className="border px-3 py-2 rounded"
                />
                <input
                    name="parentId"
                    placeholder="Parent ID (необов'язково)"
                    value={form.parentId}
                    onChange={handleChange}
                    className="border px-3 py-2 rounded"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Додати
                </button>
            </form>

            {error && (
                <p className="text-red-500 mt-3">Помилка: {error}</p>
            )}

            {loading ? (
                <p className="text-gray-500 mt-4">Завантаження...</p>
            ) : categories.length === 0 ? (
                <p className="text-gray-500 mt-4">Категорій поки немає.</p>
            ) : (
                <ul className="mt-4 list-disc pl-6">
                    {categories.map((c) => (
                        <li key={c.id}>
                            <strong>{c.name}</strong> ({c.slug}) — ID: {c.id}
                            {c.parentId !== null && ` — Parent: ${c.parentId}`}
                            {!c.isActive && " — неактивна"}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}