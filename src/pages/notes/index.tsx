import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { trpc } from "../_app";

const Notes: NextPage = () => {
  const notes = trpc.note.getNotes.useQuery();

  return (
    <>
        <Head>
            <title>Notes</title>
            <meta name="description" content="Generated by create-t3-app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-5xl mb-2">Notes</h1>
          <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
            {notes.data?.map((note) => <NoteCard
                title={note.title}
                body={note.body}
                type={note.type}
            />)}
          </div>
          <nav className="flex justify-center space-x-4 space-x-4 mt-4">
            <Link href="/">
                <a className="border border-indigo-800 border-slate-300 hover:border-slate-400 px-3 py-2 text-slate-700 hover:bg-slate-100  hover:text-slate-900">
                    Go Back
                </a>
            </Link>
          </nav>
        </main>
    </>
  )
}

export default Notes;

type NoteCardProps = {
    title: string;
    body: string;
    type: string;
  };
  
  const NoteCard = ({
    title,
    body,
    type,
  }: NoteCardProps) => {
    return (
      <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
        <h2 className="text-lg text-gray-700">{title}</h2>
        <h3
          className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        >
          Type: {type}
        </h3>
        <p className="text-sm text-gray-600">{body}</p>
      </section>
    );
  };