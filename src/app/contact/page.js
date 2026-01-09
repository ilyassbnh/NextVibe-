"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // 1. Upload logic (Cloudinary)
  const uploadImage = async () => {
    if (!file) return null;
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "NextVibe"); // Your Preset
    data.append("cloud_name", "dtpjdj7m4");   // Your Cloud Name

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dtpjdj7m4/image/upload", {
        method: "POST",
        body: data,
      });
      const fileData = await res.json();
      return fileData.secure_url;
    } catch (error) {
      console.error("Erreur upload:", error);
      return null;
    }
  };

  // 2. Submit Logic (n8n)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const imageUrl = await uploadImage();
      
      // CHANGE THIS URL TO YOUR N8N WEBHOOK
      const webhookUrl = "http://localhost:5678/webhook/contact-form"; 
      
      const payload = {
        ...formData,
        imageUrl: imageUrl || "Aucune image jointe",
        date: new Date().toISOString()
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setFile(null);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contactez-nous</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Une question sur nos programmes ? Envoyez-nous un message.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">Nom complet</label>
            <div className="mt-2.5">
              <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm"/>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
            <div className="mt-2.5">
              <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm"/>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
            <div className="mt-2.5">
              <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm"/>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">Photo (optionnel)</label>
            <div className="mt-2.5">
              <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
            </div>
          </div>

        </div>
        <div className="mt-10">
          <button type="submit" disabled={loading}
            className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-500'}`}>
            {loading ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </div>
        {status === 'success' && <p className="mt-4 text-green-600 text-center font-bold">Message envoyé avec succès !</p>}
        {status === 'error' && <p className="mt-4 text-red-600 text-center font-bold">Erreur lors de l'envoi.</p>}
      </form>
    </div>
  );
}