"use client"

import { host } from '@/config';
import { deleteAllItems } from '@/app/actions';

export default function DeleteAllItems({ promise }) {
  return (
    <button 
      className="bg-gray-400 text-slate-950 px-3"
      onClick={async () => deleteAllItems()}>
        Delete all
    </button>
  );
}