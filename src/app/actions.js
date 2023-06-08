'use server'

import { revalidateTag } from "next/cache";
import { nodbUrl, writeToken } from "@/config";
const headers = { token: writeToken };

export const addNewItem = async (formData) => {
  await fetch(
    `${nodbUrl}/items`,
    { method: 'POST', body: JSON.stringify([formData]), headers, next: { tags: ['items'] } });
  revalidateTag('items');
}

export const editItem = async (item) => {
  await fetch(
    `${nodbUrl}/items`,
    { method: 'PUT', body: JSON.stringify([item]), headers, next: { tags: ['items'] } });
  revalidateTag('items');
}

export const deleteItem = async (itemId) => {
  await fetch(
    `${nodbUrl}/items/${itemId}`,
    { method: 'DELETE', headers, next: { tags: ['items'] } });
  revalidateTag('items');
}

export const deleteAllItems = async () => {
  await fetch(
    `${nodbUrl}/items`,
    { method: 'DELETE', headers, next: { tags: ['items'] } });
  revalidateTag('items');
}