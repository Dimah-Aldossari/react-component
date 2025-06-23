import React, { useState, useEffect } from "react";
// import axios from "axios";

function Effect() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);

  // جلب البيانات
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // إضافة أو تعديل منتج
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingId) {
      // تعديل
      const res = await fetch(`https://dummyjson.com/products/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      const updated = await res.json();
      setProducts((prev) =>
        prev.map((p) => (p.id === editingId ? { ...p, ...updated } : p))
      );
      setEditingId(null);
    } else {
      // إضافة
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      const newProduct = await res.json();
      setProducts((prev) => [newProduct, ...prev]);
    }

    setTitle("");
  };

  // حذف منتج
  const deleteProduct = async (id) => {
    await fetch(`https://dummyjson.com/products/${id}`, { method: "DELETE" });
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // تحميل بيانات التعديل
  const editProduct = (product) => {
    setTitle(product.title);
    setEditingId(product.id);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📦 إدارة المنتجات</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="عنوان المنتج"
        />
        <button type="submit">{editingId ? "تعديل" : "إضافة"}</button>
      </form>

      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "1rem" }}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <div>{product.title}</div>
            <button onClick={() => editProduct(product)}>✏️</button>
            <button onClick={() => deleteProduct(product.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Effect;
