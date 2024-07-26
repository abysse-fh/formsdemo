import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Flower } from "lucide-react";

type Task = {
  id?: string;
  status?: string;
  title: string;
  description?: string;
  tr: number;
  ti: number;
};

const schema = yup.object({
  status: yup.string(),
  title: yup.string().required(),
  description: yup.string(),
  tr: yup.number().positive().integer().required(),
  ti: yup.number().positive().integer().required(),
});

function TaskEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Task>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Task) => console.log(data);
  return (
    <div className="w-full h-dvh flex items-center bg-pink-200 justify-center">
      <div className="container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 border rounded bg-pink-50 mx-auto max-w-[600px]"
        >
          <h1 className="font-bold text-slate-700 text-3xl mb-4">
            Ajouter une tâche
          </h1>
          <div className="py-2 flex flex-col gap-2">
            <label htmlFor="title" className="font-semibold text-slate-700">
              Titre
            </label>
            <input
              id="title"
              {...register("title")}
              className="bg-white px-4 py-2 border rounded"
            />
            <p className="text-pink-700">{errors.title?.message}</p>
          </div>
          <div className="py-2 flex flex-col gap-2">
            <label
              htmlFor="description"
              className="font-semibold text-slate-700"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              rows={4}
              className="bg-white px-4 py-2 border rounded"
            />
            <p className="text-red-600">{errors.description?.message}</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="py-2 flex flex-col gap-2 w-full">
              <label htmlFor="ti" className="font-semibold text-slate-700">
                Temps inital
              </label>
              <input
                type="number"
                id="ti"
                {...register("ti")}
                className="bg-white px-4 py-2 border rounded"
              />
              <p className="text-pink-700">{errors.ti?.message}</p>
            </div>
            <div className="py-2 flex flex-col gap-2 w-full">
              <label htmlFor="tr" className="font-semibold text-slate-700">
                Temps restant
              </label>
              <input
                type="number"
                id="tr"
                {...register("tr")}
                className="bg-white px-4 py-2 border rounded"
              />
              <p className="text-pink-700">{errors.tr?.message}</p>
            </div>
          </div>

          <button
            type="submit"
            className="px-4 py-2 border border-pink-700 bg-pink-600 text-white rounded flex gap-2 items-center"
          >
            Envoyer
            <Flower size={16} color="white" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskEdit;
