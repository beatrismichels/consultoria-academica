"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-16 rounded-sm bg-cream p-12 text-center">
        <p className="font-serif text-2xl text-primary">
          Obrigada pelo seu contato!
        </p>
        <p className="mt-3 text-warm-gray">
          Retornarei em breve para agendarmos nossa conversa.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-16 max-w-xl space-y-8"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm tracking-wider uppercase text-warm-gray"
        >
          Nome completo
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border-b border-primary/20 bg-transparent py-3 text-primary outline-none transition-colors focus:border-accent placeholder:text-warm-gray/40"
          placeholder="Seu nome"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm tracking-wider uppercase text-warm-gray"
        >
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border-b border-primary/20 bg-transparent py-3 text-primary outline-none transition-colors focus:border-accent placeholder:text-warm-gray/40"
          placeholder="seu@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="project"
          className="mb-2 block text-sm tracking-wider uppercase text-warm-gray"
        >
          Tipo de trabalho
        </label>
        <select
          id="project"
          name="project"
          required
          className="w-full border-b border-primary/20 bg-transparent py-3 text-primary outline-none transition-colors focus:border-accent"
        >
          <option value="">Selecione...</option>
          <option value="apresentacao">Apresentação em PowerPoint</option>
          <option value="revisao-tese">Revisão de Tese</option>
          <option value="revisao-dissertacao">Revisão de Dissertação</option>
          <option value="tcc">TCC / Monografia</option>
          <option value="artigo">Artigo Científico</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm tracking-wider uppercase text-warm-gray"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full resize-none border-b border-primary/20 bg-transparent py-3 text-primary outline-none transition-colors focus:border-accent placeholder:text-warm-gray/40"
          placeholder="Conte um pouco sobre seu projeto e como posso ajudá-lo..."
        />
      </div>
      <div className="pt-4 text-center">
        <button
          type="submit"
          className="inline-block border border-primary px-12 py-4 text-sm tracking-[0.2em] uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-white"
        >
          Enviar Mensagem
        </button>
      </div>
    </form>
  );
}
