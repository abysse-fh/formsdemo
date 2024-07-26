import { Flower, List, PlusCircle } from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="w-full flex">
      <div className="max-w-[275px] border-r border-r-pink-300 w-full flex flex-col gap-8 py-16 px-4 bg-pink-100">
        <p className="text-2xl text-pink-700 font-bold flex items-center gap-2">
          Tasks Manager
          <Flower size={24} />
        </p>
        <nav>
          <ul>
            <li className="p-2 hover:bg-slate-100 text-pink-900 hover:text-pink-700 w-full rounded transition ease-in">
              <a href={`/taches`} className="flex items-center gap-2 ">
                {" "}
                <List size={16} /> Liste des tâches
              </a>
            </li>
            <li className="p-2 hover:bg-slate-100 text-pink-900 hover:text-pink-700 w-full rounded transition ease-in">
              <a href={`/creer-une-tache`} className="flex items-center gap-2">
                <PlusCircle size={16} /> Créer une tâche
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
