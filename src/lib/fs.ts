import { promises as fs } from 'fs';
import path from 'path'
import {Service, Faq, Policy, Aftercare, Preop} from '@/types'

async function getJsonData<T>(filePath: string): Promise<T> {
  const jsonData = await fs.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  return objectData satisfies T
}

export async function getServices() {
  const filePath = path.join(process.cwd(), 'src/json/services.json');
  return await getJsonData<Service[]>(filePath)
}

export async function getPolicies() {
  const filePath = path.join(process.cwd(), 'src/json/policies.json');
  return await getJsonData<Policy[]>(filePath)
}

export async function getFaqs() {
  const filePath = path.join(process.cwd(), 'src/json/faqs.json');
  return await getJsonData<Faq[]>(filePath)
}

export async function getAftercare() {
  const filePath = path.join(process.cwd(), 'src/json/aftercare.json');
  return await getJsonData<Aftercare>(filePath)
}

export async function getHealth() {
  const filePath = path.join(process.cwd(), 'src/json/health.json');
  return await getJsonData<string[]>(filePath)
}

export async function getPreop() {
  const filePath = path.join(process.cwd(), 'src/json/preop.json');
  return await getJsonData<Preop>(filePath)
}