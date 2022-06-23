import React from 'react';

export const Contact = () => {
  return (
    <section className="border-nord-1 flex flex-col items-center border-t">
      <h2 className="text-nord-13 my-3 text-4xl font-bold text-center">Contato</h2>
      <p className="text-nord-15 text-sm text-center">Mande um Email para o Baianim</p>
      <form action="" className="flex flex-col gap-3 mx-10 max-w-[600px]">
        <div className="sm:flex-nowrap flex flex-wrap flex-1 gap-3">
          <input
            type="text"
            className="bg-nord-0 border-nord-3 w-full p-2 border rounded"
            placeholder="Nome"
          />

          <input
            type="text"
            className="bg-nord-0 border-nord-3 w-full p-2 border rounded"
            placeholder="Email"
          />
        </div>
        <textarea
          name="description"
          cols={30}
          rows={10}
          className="bg-nord-0 border-nord-3 p-2 border rounded"
          placeholder="Descrição"
        ></textarea>
      </form>
    </section>
  );
};
